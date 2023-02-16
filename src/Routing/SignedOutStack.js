import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
const Stack = createNativeStackNavigator();

const SignedOutStack = () => {
  return (
        <Stack.Navigator initialRouteName='Login'screenOptions={
          {
            headerShown:false,
            presentation:'transparentModal'
          }
        }>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
  )
}

export default SignedOutStack;