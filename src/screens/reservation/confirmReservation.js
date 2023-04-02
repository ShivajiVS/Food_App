import React from 'react'
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { confirmReservationSchema, initialValues } from '../../validationSchema/confirmResrvationForm';
import { auth, db } from '../../config/firebase-config';
import { collection, addDoc, getDoc, doc, updateDoc, onSnapshot, serverTimestamp } from "firebase/firestore";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert
} from 'react-native'

const ConfirmReservation = (props) => {
    const navigation = useNavigation();
    const tableReservationColRef = collection(db, "tableReservation")
    // user subCollection reference
    const tableSubCollectionRef = collection(db, `/users/${auth.currentUser.uid}/tableReservation`)

    const { selectDate, slot, tableType } = props.route.params;


    const onConfirmReservation = async (props) => {
        const { email, fullName, phoneNumber } = props;

        const tableReservationId = Date.now()
        const reservation = {
            email: email,
            fullName: fullName,
            phoneNumber: phoneNumber,
            selectedDate: selectDate,
            slotTime: slot,
            tableType: tableType,
            tableReservationId: tableReservationId,
        }
        await addDoc(tableReservationColRef, { ...reservation, createdAt: serverTimestamp() }).then(() => {
        })
        await addDoc(tableSubCollectionRef, { ...reservation, createdAt: serverTimestamp() }).then(() => {
            navigation.navigate("ReservationSuccesfull", { tableReservationId })
        }).catch(err => console.log(err))

    }

    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset="8" className='flex-1 bg-slate-100 items-center justify-center'>
                {/*============================Header==================================*/}
                <View>
                    <View>
                        <Text className='text-2xl font-bold capitalize text-black '>confirm Reservation</Text>
                        {/* <Text className='text-base px-3 '>Create a new account</Text> */}
                    </View>
                </View>
                {/*===========================Body==================================*/}

                <Formik initialValues={initialValues} validationSchema={confirmReservationSchema} onSubmit={(values) => { onConfirmReservation(values) }}>
                    {({ values, errors, isValid, touched, setFieldTouched, handleBlur, handleChange, handleSubmit }) => (
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
                            {/*========================Login button=====================*/}
                            <TouchableOpacity className={`w-[85vw] h-12 bg-orange-400 rounded-md mt-6 ${isValid ? "bg-orange-400" : "bg-orange-200"}`} onPress={handleSubmit}>
                                <Text className="text-[18px] font-semibold text-center uppercase text-white p-[10px] ">Book Now</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </KeyboardAvoidingView>
        </>
    )
}


export default ConfirmReservation