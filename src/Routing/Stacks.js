import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// home screen related imports start
import HomeScreen from '../screens/homeScreens/HomeScreen';
// home screen related imports end

// item  related screen imports 
import ItemScreen from '../screens/homeScreens/Items';
import ItemDetails from '../screens/homeScreens/ItemDetails';
import CartScreen from '../screens/homeScreens/cart';
import CheckOut from '../screens/homeScreens/checkOut';
import DefaultAddress from '../screens/homeScreens/defaultAddress';
import Payment from '../screens/homeScreens/payment';
import PlaceOrderSucces from '../screens/homeScreens/placeOrderSucces';

// reservation  related screen imports
import ReservationHomeScreen from '../screens/reservation/home';
import TableReservation from '../screens/reservation/tableReservation'
import TableType from '../screens/reservation/tableType'
import ConfirmReservation from '../screens/reservation/confirmReservation'
import ReservationSuccesfull from '../screens/reservation/succesfulReservation';


import FoodOrderingMain from '../screens/reservation/foodOrdering/main';
import ListOfSelectedItems from '../screens/reservation/foodOrdering/listSelectedItems';
import ConfirmOrder from '../screens/reservation/foodOrdering/confirmOrder';
import OrderSuccess from '../screens/reservation/foodOrdering/orderSucces';

// acount screen related imports 
import { Account } from '../screens/account/index';
import { AddAddressScreen } from '../screens/account/address/AddAddressScreen';
import { Address } from '../screens/account/address/Address';
import HomeDeliveryHistory from '../screens/orders/homeOrdersHistory';

import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import DeleteAcount from '../screens/account/deleteAcount';
import TimeSlotForFood from '../screens/reservation/foodOrdering/timeSlot';
import EditProfilePicture from '../screens/account/EditProfilePicture';


// stack variable initialization
const Stack = createNativeStackNavigator();

export const SignedOutStack = () => {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={
            {
                headerShown: false,
                presentation: 'transparentModal'
            }
        }>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
    )
}


//home stack
export const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ presentation: 'card' }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="ItemDetails2" component={ItemDetails} options={{ headerShown: false, }} />
        </Stack.Navigator>
    )
}


export const ItemStack = () => {
    return (
        <Stack.Navigator screenOptions={{ presentation: 'card', headerShown: false, }}>
            <Stack.Screen name="Items" component={ItemScreen} />
            <Stack.Screen name="ItemDetails" component={ItemDetails} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="CheckOut" component={CheckOut} />
            <Stack.Screen name="DefaultAddress" component={DefaultAddress} />
            <Stack.Screen name="PlaceOrderSucces" component={PlaceOrderSucces} />
            <Stack.Screen name="AddAddress2" component={AddAddressScreen} options={{ headerShown: true, title: " " }} />
            <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>
    )
}

export const ReservationStack = () => {
    return (
        <Stack.Navigator screenOptions={{ presentation: 'card', headerShown: false, }}>
            <Stack.Screen name="ReserveScreen" component={ReservationHomeScreen} />
            <Stack.Screen name="TableReserveScreen" component={TableReservation} options={{ headerShown: true, title: " " }} />
            <Stack.Screen name="TableTypeScreen" component={TableType} options={{ headerShown: true, title: " " }} />
            <Stack.Screen name="ConfirmReserveScreen" component={ConfirmReservation} options={{ headerShown: true, title: " " }} />
            <Stack.Screen name="ReservationSuccesfull" component={ReservationSuccesfull} options={{ headerShown: false, title: " " }} />
            <Stack.Screen name="FoodOrderingMain" component={FoodOrderingMain} options={{ headerShown: false, }} />
            <Stack.Screen name="ListOfSelectedItems" component={ListOfSelectedItems} options={{ headerShown: false, }} />
            <Stack.Screen name="TimeSlotForFood" component={TimeSlotForFood} options={{ headerShown: false, }} />
            <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} options={{ headerShown: false, }} />
            <Stack.Screen name="OrderSuccess" component={OrderSuccess} options={{ headerShown: false, }} />
        </Stack.Navigator>
    )
}


export const ProfileStack = () => {
    return (
        <Stack.Navigator initialRouteName='Account' screenOptions={
            {
                headerShown: false,
                presentation: 'card'
            }
        }>
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Address" component={Address} options={{ headerShown: true, }} />
            <Stack.Screen name="AddAddress" component={AddAddressScreen} options={{ headerShown: true, title: " " }} />
            {/* <Stack.Screen name="HomeDeliveryHistory" component={HomeDeliveryHistory} /> */}
            <Stack.Screen name="EditProfilePicture" component={EditProfilePicture} />
            <Stack.Screen name="Delete" component={DeleteAcount} />
        </Stack.Navigator>
    )
}