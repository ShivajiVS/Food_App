import { View} from 'react-native'
import React from 'react'
import Profile from '../../components/profile/Profile'
import FoodOrdersList from '../../components/ordersList/FoodOrdersList';
import LogOut from '../../components/ordersList/LogOut';

const Account = () => {
  return (
    <View className='flex flex-1 justify-center items-center border-gray-50'>
              <Profile />
              <FoodOrdersList />
              <LogOut />
    </View>
  )
}

export default Account;