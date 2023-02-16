import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import EditProfilePicture from '../screens/account/address/EditProfilePicture'
import Address from '../screens/account/address/Address';
import AddAddress from '../screens/account/address/AddAddress';
import Account from '../screens/account/index';

const ProfileStack = () => {
  return (
        <Stack.Navigator initialRouteName='Profile' screenOptions={
          {
            headerShown:false,
            presentation:'transparentModal'
          }
        }>  
        
          <Stack.Group>
              <Stack.Screen name="Profile" component={Account} />
              <Stack.Screen name="EditProfile" component={EditProfilePicture} />
              <Stack.Screen name="Address" component={Address} />
              <Stack.Screen name="AddAddress" component={AddAddress} />
          </Stack.Group>
        </Stack.Navigator>
  )
}

export default ProfileStack;