import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const LogOut = () => {
  return (
    <View className='w-[94vw] mx-3 mt-5 bg-slate-100 rounded-xl shadow-2xl'>
      <TouchableOpacity className=''>
        <Text className=" text-2xl text-center p-3 " onPress={""}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LogOut