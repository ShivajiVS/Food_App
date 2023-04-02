import { View } from 'react-native'
import React from 'react'
import Profile from '../../components/profile/Profile'
import ListOfFields from './list';
import LogOut from '../account/LogOut';

export const Account = () => {
  return (
    <View className='flex flex-1 justify-center items-center border-gray-50'>
      <Profile />
      <ListOfFields />
      <LogOut />
    </View>
  )
}

