import React from 'react'
import { Formik } from 'formik';
import {auth } from '../../config/firebase-config'
import { useNavigation } from '@react-navigation/native';
import ValidationSchema from '../../validationSchema/LoginYupSchema'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import { 
    View,
    Text,
    TextInput, 
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
    } from 'react-native'

const LoginScreen = () => {
    const {logInYupSchema,initialValues}=ValidationSchema;
    const navigation=useNavigation()

    // ===================== auth form submission ========================
    const onSignIn=async(email,password)=>{
       try {
            await auth.setPersistence('local')
            .then(()=>{
                 auth.signInWithEmailAndPassword(email,password)
                .then(console.log("logged.."))    
            })
       }
        catch (error) {
                 Alert.alert("Error",error.message)
        }  
    }
  return (
    <>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset="8" className='flex-1 bg-slate-100 items-center justify-center'>
            {/*============================Header==================================*/}
            <View>
                <View className="px-5">
                    <MaterialIcons name="account-circle"  color={"#FFFFF7"} size={120} />
                </View>
                <View >
                    <Text className='text-2xl font-bold capitalize text-black '>welcome back</Text>
                    <Text className='text-base px-6 '>Sign to Continue</Text>
                </View>
            </View>
             {/*===========================Body==================================*/}
            
            <Formik initialValues={initialValues}  validationSchema={logInYupSchema} onSubmit={(values)=>{onSignIn(values.email,values.password)}}>
	            {({values,errors,isValid,touched,setFieldTouched,handleBlur,handleChange,handleSubmit})=>(
                <View>
                {/*========================Email Input Field=====================*/}
                    <View className='mt-6'>
                        <TextInput
                            placeholder='Enter your Email'
                            className={`border-2 border-white bg-slate-200 w-[85vw] h-12 text-xl text-center rounded-md ${!errors.email ? "border-green-400" : "border-red-400"}`}
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}    
                            />
                    </View>
                {/*========================password Input Field=====================*/}
                    <View className='mt-6'>
                        <TextInput
                            placeholder='Enter your password'
                            secureTextEntry={true}
                            className={`border-[2px] bg-slate-200 w-[85vw] h-12 text-xl text-center rounded-md shadow-inner ${!errors.password ? "border-green-400" :"border-red-400" }`}
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            />
                    </View>
                    {/*========================Forgot button=====================*/}
                    < TouchableOpacity className='mt-5 text-right'>
                        <Text h4 className="pb-3 text-orange-400 text-[18px] text-right">Forgot?</Text>
                    </TouchableOpacity>
                    {/*========================Login button=====================*/}
                    <TouchableOpacity className={`w-[85vw] bg-orange-400 rounded-md ${isValid?"bg-orange-400":"bg-orange-200"}`} onPress={handleSubmit}>
                        <Text className="text-[18px] font-semibold text-center uppercase text-white p-[10px] ">Login</Text>
                    </TouchableOpacity>

                </View>
             )}
           </Formik>

        {/*========================Fotter=====================*/}
            <View className="flex flex-row justify-center i tems-center  my-12">
                <Text className="text-[18px] ">Don't have an account?</Text>
                     <TouchableOpacity>
                        <Text className="text-[18px] ml-2 underline text-orange-400" onPress={()=>navigation.navigate("SignUp")}>Sign Up</Text>
                     </TouchableOpacity>
            </View>            
        </KeyboardAvoidingView>         
    </>
  )
}

export default LoginScreen;