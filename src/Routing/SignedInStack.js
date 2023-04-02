import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeStack, ItemStack, ProfileStack, ReservationStack } from './Stacks'

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MaterialTopTabs from '../Routing/material_top_tabs';

const Tab = createBottomTabNavigator();
const SignedInStack = () => {

  return (
    <Tab.Navigator initialRouteName="Home"
      // screenOptions={{
      //     headerBackground:"red",
      //     headerShown:false,
      //     // tabBarBackground:"orange",        
      //     tabBarActiveTintColor:"red",
      //     tabBarInactiveTintColor:"gray",
      //     headerStyle:{
      //         height:100,
      //     },
      //     }}
      screenOptions={({ route }) => (
        {
          headerShown: false,
          // tabBarShowLabel: false,
          tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            display: getRouteName(route),
            height: 60,
            padding: 10,
            backgroundColor: "white",
            paddingBottom: 0,
          },
          tabBarItemStyle: {
            display: "flex",
            bottom: 10,
            alignContent: "center",
            justifyContent: "center"
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
        }
      )}

    >
      {/* <Tab.Screen name="HomeTab" component={HomeStack} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size + 5} />
        ),
      }} /> */}
      <Tab.Screen name="Reservation" component={ReservationStack} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="restaurant-sharp" color={color} size={size + 5} />
        ),
      }} />
      <Tab.Screen name="items" component={ItemStack} options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="shopping-bag" color={color} size={size + 5} />
        ),
      }} />

      <Tab.Screen name="orders" component={MaterialTopTabs} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="history" color={color} size={size + 5} />
        ),
      }} />
      <Tab.Screen name="account" component={ProfileStack} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-circle" color={color} size={size + 5} />
        ),
      }} />
    </Tab.Navigator>
  )
}



const getRouteName = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (routeName?.includes("ItemDetails") || routeName?.includes("Cart") || routeName?.includes("AddAddress") || routeName?.includes("PlaceOrderSucces") || routeName?.includes("CheckOut") || routeName?.includes("ReservationSuccesfull") || routeName?.includes("FoodOrderingMain") || routeName?.includes("ListOfSelectedItems") || routeName?.includes("OrderSuccess") || routeName?.includes("DefaultAddress") || routeName?.includes("Payment") || routeName?.includes("EditProfilePicture") || routeName?.includes("TableTypeScreen") || routeName?.includes("TableReserveScreen") || routeName?.includes("ConfirmReserveScreen") || routeName?.includes("ConfirmOrder")) {
    return "none"
  }
  return "flex"
}

export default SignedInStack;

