import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from '../screens/homeScreens/Products';
import index from '../screens/homeScreens/Products';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
        <Stack.Navigator initialRouteName='home' screenOptions={
          {
            headerShown:false,
            presentation:'transparentModal'
          }
        }>
            <Stack.Screen name="home" component={index} />
            <Stack.Screen name="products" component={Product} />
        </Stack.Navigator>
  )
}

export default HomeStack;