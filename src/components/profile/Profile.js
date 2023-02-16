import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation =useNavigation();
  return (
    <View className=' w-[94vw] h-40 mx-3 bg-slate-100 rounded-xl'>
      <View className='flex flex-1 justify-center items-center '>
          <TouchableOpacity>
              <MaterialCommunityIcons name="account-circle" color={""} size={120}  />
          </TouchableOpacity>
          <Text className='text-xl capitalize font-semibold '>Name here..</Text>
      </View>
    </View>
  )
}

export default Profile