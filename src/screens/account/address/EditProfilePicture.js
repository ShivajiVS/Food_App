import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const EditProfilePicture = () => {
  const navigation =useNavigation();
  return (
    <TouchableOpacity className='absolute bottom-0 w-full h-1/4 bg-slate-50 flex justify-evenly items-center'onPress={()=>{console.log("")}}>
      <Text className='border-b-[1px] border-gray-200 text-center text-base pb-3 w-screen' onPress={()=>{console.log("")}}>Delete Photo</Text>
      <Text className='border-b-[1px] border-gray-200 text-center  text-base pb-2 w-screen' 
       onPress={()=>{console.log("")}}>Change Photo</Text>
      <Text className=' text-center text-base w-screen' >Cancle</Text>
    </TouchableOpacity>
  )
}

export default EditProfilePicture