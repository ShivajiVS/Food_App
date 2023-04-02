import React from 'react'
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { confirmReservationSchema, initialValues } from '../../../validationSchema/confirmOrderSchema';
import { db, auth } from '../../../config/firebase-config'
import { collection, addDoc, getDoc, doc, updateDoc, onSnapshot, serverTimestamp } from "firebase/firestore";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert
} from 'react-native'

const ConfirmOrder = (props) => {
    const navigation = useNavigation();
    const orderColRef = collection(db, "orders")
    const orderSubCollectionRef = collection(db, `/users/${auth.currentUser.uid}/orders`)
    const { Order, totalPrice } = props.route.params;
    const onConfirmOrder = async (props) => {
        const { fullName, email, phoneNumber, tableReservationNumber } = props
        const orderNumber = Date.now()
        const orderDetails = {
            items: [...Order],
            fullName: fullName,
            phoneNumber: phoneNumber,
            email: email,
            tableReservationNumber: tableReservationNumber,
            orderNumber: orderNumber,
            totalPrice: totalPrice,
        }

        await addDoc(orderColRef, { ...orderDetails, createdAt: serverTimestamp() })
        await addDoc(orderSubCollectionRef, { ...orderDetails, createdAt: serverTimestamp() }).then(() => {
            navigation.navigate("OrderSuccess", { orderNumber })
        })
    }
    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset="8" className='flex-1 bg-slate-100 items-center justify-center'>
                {/*============================Header==================================*/}
                <View>
                    <View>
                        <Text className='text-2xl font-bold capitalize text-black '>confirm your order...</Text>
                    </View>
                </View>
                {/*===========================Body==================================*/}

                <Formik initialValues={initialValues} validationSchema={confirmReservationSchema} onSubmit={(values) => { onConfirmOrder(values) }}>
                    {({ values, isValid, handleBlur, handleChange, handleSubmit }) => (
                        <View>
                            {/*========================Full name Input Field=====================*/}
                            <View className='mt-10'>
                                <TextInput
                                    placeholder='enter your name *'
                                    className={`border-[1px] bg-slate-200 w-[85vw] h-12 text-xl pl-4 rounded-md `}
                                    value={values.fullName}
                                    onChangeText={handleChange('fullName')}
                                    onBlur={handleBlur('fullName')}
                                />
                            </View>
                            {/*========================Email Input Field=====================*/}
                            <View className='mt-6'>
                                <TextInput
                                    placeholder='enter your email *'
                                    className={`border-[1px] bg-slate-200 w-[85vw] h-12 text-xl pl-4 rounded-md `}
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                />
                            </View>
                            {/*========================Phone Number Input Field=====================*/}
                            <View className='mt-6'>
                                <TextInput
                                    placeholder='enter your phone number *'
                                    className={`border-[1px] bg-slate-200 w-[85vw] h-12 text-xl pl-4 rounded-md `}
                                    value={values.phoneNumber}
                                    onChangeText={handleChange('phoneNumber')}
                                    onBlur={handleBlur('phoneNumber')}
                                />
                            </View>
                            <View className='mt-6'>
                                <TextInput
                                    placeholder='enter table reservation No, if u have '
                                    className={`border-[1px] bg-slate-200 w-[85vw] h-12 text-xl pl-4 rounded-md `}
                                    value={values.tableReservationNumber}
                                    onChangeText={handleChange('tableReservationNumber')}
                                    onBlur={handleBlur('tableReservationNumber')}
                                />
                            </View>
                            {/*========================Login button=====================*/}
                            <TouchableOpacity className={`w-[85vw] h-12 bg-orange-400 justify-center items-center rounded-md mt-6 ${isValid ? "bg-orange-400" : "bg-orange-200"}`} onPress={handleSubmit}>
                                <Text className="text-[18px] font-semibold text-center uppercase text-white p-[10px] ">Book Now</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </KeyboardAvoidingView>
        </>
    )
}


export default ConfirmOrder