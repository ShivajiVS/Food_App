import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../../config/firebase-config'

const Account = () => {
  const Logout=()=>{
    auth.signOut();
  }
  return (
    <View className="flex flex-1 items-center justify-center bg-lime-50">
      <TouchableOpacity className='mt-5 rounded-2xl  bg-fuchsia-400'>
        <Text className=" text-2xl text-center w-48 h-15 p-3 italic" onPress={Logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}
// className="rounded-md  bg-fuchsia-400 m-5 
export default Account