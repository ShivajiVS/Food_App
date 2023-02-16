import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/home/Home';
import index from '../screens/account/index'
import Notification from '../screens/home/Notification';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
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
            screenOptions={{
              headerShown:true,             
              tabBarShowLabel:false,
              tabBarActiveTintColor: '#e91e63',
              tabBarInactiveTintColor:'gray',
              tabBarStyle:{
                height:60,
                padding:10,
                backgroundColor:"white",
                paddingBottom:0,
              },
              tabBarItemStyle:{
                bottom:10,
                alignContent:"center",
                justifyContent:"center" 
              },
              tabBarLabelStyle:{
                fontSize:13,
              },
            }}
  
            >  
            <Tab.Screen name="Home" component={HomeStack} options={{
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size+5} />
            ),
            }} />  
            <Tab.Screen name="Notification" component={Notification} options={{
                 tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bell" color={color} size={size+5} />
            ),
            }}/>
            <Tab.Screen name="Account" component={ProfileStack} options={{
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-circle" color={color} size={size+5} />
            ),
            }}/>
    </Tab.Navigator>
  )
}

export default SignedInStack;