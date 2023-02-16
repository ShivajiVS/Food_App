import React from 'react'
import ValidationSchema from '../../validationSchema/SignUpYupSchema'
import {Formik} from 'formik';
import { auth } from '../../config/firebase-config'
import { createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { 
    View,
    Text,
    TextInput, 
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert
     } from 'react-native'

const SignUpScreen = () => {
        const navigation=useNavigation()
        const {signUpYupSchema,initialValues}=ValidationSchema;
        // ===================form submission to firebase ==========================
        const onSignUp=async(email,password)=>{  
        try {
            await auth.createUserWithEmailAndPassword(email,password)
            .then(()=>navigation.navigate("Login"))
        } 
        catch (error) {
            Alert.alert("Error",error.message,)
        }

    }
  return (
    <>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset="8" className='flex-1 bg-slate-100 items-center justify-center'>
            {/*============================Header==================================*/}
            <View>
                <View>
                    <Text className='text-2xl font-bold capitalize text-black '>create acccount</Text>
                    <Text className='text-base px-3 '>Create a new account</Text>
                </View>
            </View>
             {/*===========================Body==================================*/}
            
            <Formik initialValues={initialValues}  validationSchema={signUpYupSchema} onSubmit={(values)=>{onSignUp(values.email,values.password)}}>
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
                    {/*======================== Confirm password Field=====================*/}
                    <View className='mt-6'>
                        <TextInput
                            placeholder='Enter your Confirm password'
                            secureTextEntry={true}
                            className={`border-[2px] bg-slate-200 w-[85vw] h-12 text-xl text-center rounded-md shadow-inner ${!errors.confirmPassword ? "border-green-400" :"border-red-400" }`}
                            value={values.confirmPassword}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            />
                    </View>                   
                    {/*========================Login button=====================*/}
                    <TouchableOpacity className={`w-[85vw] h-12 bg-orange-400 rounded-md mt-6 ${isValid?"bg-orange-400":"bg-orange-200"}`} onPress={handleSubmit}>
                        <Text className="text-[18px] font-semibold text-center uppercase text-white p-[10px] ">Sign Up</Text>
                    </TouchableOpacity>
                </View>
             )}
           </Formik>

        {/*========================Fotter button=====================*/}
            <View className="flex flex-row justify-center items-center  my-12">
                <Text className="text-[18px] ">Already have a account?</Text>
                     <TouchableOpacity>
                        <Text className="text-[18px] ml-2 underline text-orange-400" onPress={()=>navigation.navigate("Login")}>Login</Text>
                     </TouchableOpacity>
            </View>            
        </KeyboardAvoidingView>
    </>
  )
}

export default SignUpScreen;