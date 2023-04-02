const express = require('express');
const router = express.Router();
const stripe = require('stripe')(
    'sk_test_51MiL4gSGW1KhbpPQ6tFqO49Oy4gGXZqaXB3PKWYeJucJqwjy4LBaE8os0O0xs3Yd4mGLMnJ0ec0D6pJqVKAPewKq005bQTBzun',
    { apiVersion: '2022-11-15', }
);

// router endpoints
router.post('/intents', async (req, res) => {
    try {
        const { amount } = req.body;
        // /console.log("wwwww", req)
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'inr',
            automatic_payment_methods: {
                enabled: true,
            },
        });
        // Return the secret key to the client
        res.json({ "paymentIntent ": paymentIntent.client_secret });
    } catch (e) {
        res.status(400).json({
            error: e.message,
        });
    }
});

module.exports = router;