const express = require('express');
const paymentRoutes = require('./router/paymentRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.use('/payments', paymentRoutes);

app.get('/', (req, res) => {
    res.send('<h2>Hello world </h2>');
});

app.listen(PORT, () => {
    console.log('API is listening on port', PORT);
});
