import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../Redux/slices/cartSlice';
import { collection, addDoc, getDoc, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from '../../config/firebase-config';
import { paymentSchema, initialValues } from '../../validationSchema/paymentSchema';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native'

const Payment = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);
    const userColRef = collection(db, "users")
    const docRef = doc(userColRef, auth.currentUser.uid)
    const userOrderColRef = collection(db, `/users/${auth.currentUser.uid}/foodHomeorders/`)
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
    const onOrderComplete = async () => {
        // await updateDoc(docRef, {
        //     orders: [...props.route.params]
        // }
        // ).then(() => {
        //     useDispatch(clearCart())
        //     navigation.navigate("PlaceOrderSucces")
        // }).catch((error) => {
        //     Alert.alert("Error", "please try again later")
        // })
        await addDoc(userOrderColRef, {
            orders: props.route.params,
            totalAmount: totalAmount,
        }).then(() => {
            // useDispatch(clearCart())
            navigation.navigate("PlaceOrderSucces")
        }).catch((error) => {
            Alert.alert("Error ", "please try again later")
        })
    }
    return (
        <>
            <View >
                <View className="w-['80vw'] h-60 mt-20 mx-1">
                    <Formik initialValues={initialValues} validationSchema={paymentSchema} onSubmit={(values) => onOrderComplete()}>
                        {({ values, errors, isValid, touched, setFieldTouched, handleBlur, handleChange, handleSubmit }) => (
                            <>
                                {/*======================== Input Name Field=====================*/}
                                <View className='h-screen m-2 rounded-2xl '>
                                    <View>
                                        <Text className='font-bold text-xl ml-1'>Payment details </Text>
                                    </View>
                                    <Text className=" mt-4 mx-2 font-normal text-base">Card holder name *</Text>
                                    <TextInput
                                        placeholder='kondeti shivaji'
                                        className={`border-[1px] bg-slate-100 w-[92vw] h-12 rounded-lg ml-2 pl-4 mt-1 text-base ${!errors.name ? "border-green-400" : "border-slate-300"}`}
                                        value={values.name}
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                    />
                                    {/*======================== card Number Field=====================*/}
                                    <Text className=" mt-2 mx-2 font-normal  text-base">Card number*</Text>
                                    <TextInput
                                        placeholder='3424  5643  6565  7846 *'
                                        className={`border-[1px] bg-slate-100 w-[92vw] h-12 rounded-lg ml-2 pl-4 mt-1 text-base ${!errors.cardNumber ? "border-green-400" : "border-slate-300"}`}
                                        value={values.cardNumber}
                                        onChangeText={handleChange('cardNumber')}
                                        onBlur={handleBlur('cardNumber')}
                                    />
                                    <View className="flex-row ">
                                        <View>
                                            <Text className=" mt-2 mx-2 font-normal  text-base">empiry date *</Text>
                                            <TextInput
                                                placeholder='MM/YY *'
                                                className={`border-[1px] bg-slate-100 w-[45vw] rounded-lg h-12 ml-2 pl-4  mt-1 text-base ${!errors.empiryDate ? "border-green-400" : "border-slate-300"}`}
                                                value={values.empiryDate}
                                                onChangeText={handleChange('empiryDate')}
                                                onBlur={handleBlur('empiryDate')}
                                            />
                                        </View>
                                        <View>
                                            <Text className=" mt-2 ml-3 font-normal text-base">CVV *</Text>
                                            <TextInput
                                                placeholder=' XXX *'
                                                className={`border-[1px] bg-slate-100 w-[45vw] h-12 ml-2 mt-1 pl-4 text-base rounded-lg ${!errors.cvv ? "border-green-400" : "border-slate-300"}`}
                                                value={values.cvv}
                                                onChangeText={handleChange('cvv')}
                                                onBlur={handleBlur('cvv')}
                                            />
                                        </View>
                                    </View>
                                    <View className="mt-10 ">
                                        <TouchableOpacity className={`w-[92vw] h-12 mr-3 ml-2 rounded-lg justify-center items-center ${isValid ? "bg-green-600" : "bg-green-300"} `} disabled={isValid ? false : true} onPress={handleSubmit} >
                                            <Text className="capitalize text-xl ">pay ₹{totalAmount}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </>
                        )}
                    </Formik>
                </View>
            </View>
        </>
    )
}

export default Payment

// onPress={() => navigation.navigate("DefaultAddress")}

//disabled={addressList.length > 0 ? false : true}