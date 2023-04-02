import { View, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { usePaymentSheet, useStripe } from "@stripe/stripe-react-native";
import { collection, addDoc, getDoc, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from '../../config/firebase-config';
const CheckOut = () => {
    // const stripe = useStripe();
    // const { initPaymentSheet, presentPaymentSheet } = useStripe();
    // const { initPaymentSheet, presentPaymentSheet } = usePaymentSheet;
    const userColRef = collection(db, "users")
    const docRef = doc(userColRef, auth.currentUser.uid)
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < cart.length; i++) {
            sum += cart[i].price * cart[i].quantity;
        }
        setTotalPrice(sum);

    }, [cart]);
    let deliveryAmount = 50;
    let discountAmount = 100;
    let totalAmount = totalPrice + deliveryAmount - discountAmount;
    let clientSecret = "";


    const dataTransformation = cart.map(item => {

        return {
            id: item.id,
            name: item.title,
            price: item.price,
            quantity: item.quantity,
            imageUrl: item.imageUrl,
        }
    });


    const tempOrderId = Date.now()
    // const orderId = {
    //     orderNumber: tempOrderId
    // }
    const tempDataTransformation = { ...dataTransformation }

    // useEffect(() => {
    //     const fetchApiSeretKey = async () => {
    //         const response = await fetch("http://192.168.43.51:3000/payments/intents", {
    //             method: "POST",
    //             body: JSON.stringify({
    //                 amount: Math.floor(totalAmount),
    //             }),
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //         const data = await response.json();
    //         console.log(data);
    //         if (!response.ok) return Alert.alert("efeee", data.message);
    //         clientSecret = data.clientSecret;
    //     }
    //     fetchApiSeretKey()
    // }, [])

    // ====================== payment ======================
    const onPayment = async () => {
        // const initSheet = await stripe.initPaymentSheet({
        //     paymentIntentClientSecret: clientSecret,
        //     // googlePay: true,
        //     merchantDisplayName: 'Merchant Name',
        //     paymentIntentClientSecret: data.data.paymentIntent,
        //     // paymentIntent added 
        // });
        // console.log(" after payment sheeet")
        // if (initSheet.error) {
        //     Alert.alert(initSheet.error.message);
        //     return;
        // }
        // 2. Initialize the Payment sheet
        const initResponse = await initPaymentSheet({
            merchantDisplayName: 'shivaji',
            paymentIntentClientSecret: clientSecret,
        });
        if (initResponse.error) {
            console.log(initResponse.error);
            Alert.alert('Something went wrong');
            return;
        }
        console.log("end of initPaymentSheet.")
        // 3. Present the Payment Sheet from Stripe
        try {
            const paymentResponse = await presentPaymentSheet();
            if (paymentResponse.error) {
                Alert.alert(
                    `Error code: ${paymentResponse.error.code}`,
                    paymentResponse.error.message
                );
                return;
            }
        }
        catch (e) {
            console.log(e)
        }

        console.log("end..")
        // const presentSheet = await stripe.presentPaymentSheet({
        //     clientSecret,
        // });
        // console.log(" after presentpayment sheeet")
        // if (presentSheet.error) return Alert.alert(presentSheet.error.message);

        // else {
        //     /// after payment successfull
        //     Alert.alert("Donated successfully! Thank you for the donation.");
        // }
    }

    const onOrderComplete = async () => {
        await updateDoc(docRef, {
            orders: [...dataTransformationForDatabase]
        }
        ).then(() => {
            // Alert.alert("Order placed successfully")
            navigation.navigate("PlaceOrderSucces")
        })
        // navigation.navigate("PlaceOrderSucces")
    }
    return (
        <View className="bg-slate-50 w-full h-full">
            <View className="mt-10">
                <ScrollView accessible showsHorizontalScrollIndicator className="h-full">
                    {
                        cart.length > 0 &&
                        <>
                            {
                                cart.map((item, index) => {
                                    const { title, id, imageUrl, price, description, discount, quantity } = item;
                                    return (
                                        <View key={index} >
                                            <View className='flex-row '>
                                                <TouchableOpacity className=' mx-1' onPress={() => navigation.navigate("ItemDetails", item)}>
                                                    <View className="rounded-lg bg-slate-100 w-32 h-32 justify-center items-center">
                                                        <Image source={{ uri: imageUrl }} className=' rounded-2xl h-28 w-28' />
                                                    </View>
                                                </TouchableOpacity>
                                                <View className="my-2 ">
                                                    <Text className='font-extrabold text-xl capitalize m-1'>{title}</Text>
                                                    <Text className='font-semibold text-xl capitalize m-1'>₹ {price}</Text>
                                                    <Text className='font-semibold text-xl capitalize m-1'>Qty : {quantity}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                        </>
                    }
                    {/* <View className="mt-5 border-t-0.5 border-gray-500 ">
                        <View className=" flex-row">
                            <View>
                                <Text className="capitalize font-medium text-lg ml-7 mt-2">selected address</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate("defaultAddress")}>
                                <Text numberOfLines={1} className="capitalize font-medium text-lg ml-16 mt-2 text-blue-400 underline">change address</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text className="capitalize font-medium text-lg ml-7 mt-2 text-orange-300">adresss of person is someone is vyshanavi..</Text>
                        </View>
                    </View> */}
                    <View className="mt-3  border-t-0.5 border-gray-500">
                        <View className="flex-row justify-between mt-2">
                            <Text className="capitalize font-medium text-lg ml-7 ">subtotal</Text>
                            <Text className="capitalize font-medium text-lg mr-10">₹ {totalPrice}</Text>
                        </View>
                        <View className="flex-row justify-between mt-2">
                            <Text className="capitalize font-medium text-lg ml-7">delivery</Text>
                            <Text className="capitalize font-medium text-lg mr-10">₹ {deliveryAmount}</Text>
                        </View>
                        <View className="flex-row justify-between mt-2">
                            <Text className="capitalize font-medium text-lg ml-7">discount</Text>
                            <Text className="capitalize font-medium text-lg mr-10">₹ {discountAmount}</Text>
                        </View>
                        <View className="flex-row justify-between mt-4">
                            <Text className="capitalize font-extrabold text-lg ml-7">total</Text>
                            <Text className="capitalize font-extrabold text-lg mr-10">₹ {totalAmount}</Text>
                        </View>
                        <TouchableOpacity className="bg-green-600 mt-4 w-[95vw] h-12 mr-3 ml-3 rounded-lg justify-center items-center" onPress={() => navigation.navigate("DefaultAddress", tempDataTransformation)}>
                            <Text className="capitalize text-xl ">continue</Text>
                        </TouchableOpacity>
                        <View className="mt-0.5"></View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default CheckOut