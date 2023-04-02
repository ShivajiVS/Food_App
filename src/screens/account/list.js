import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
const ListOfFields = () => {
  const navigation = useNavigation();
  return (
    <View className='w-[94vw] mx-3 mt-5 bg-slate-50 rounded-xl shadow-2xl' >
      {/* <TouchableOpacity className='border-b-[1px] border-gray-200 p-3 ml-5 my-2 w-[85vw] flex flex-row justify-between items-center' onPress={() => navigation.navigate("HomeDeliveryHistory")}>
        <Text className='text-xl  font-semibold ' >Orders</Text>
        <MaterialCommunityIcons name="chevron-right" color={""} size={20} />
      </TouchableOpacity> */}

      <TouchableOpacity className='border-b-[1px] border-gray-200 p-3 ml-5 my-2 w-[85vw] flex flex-row justify-between items-center' onPress={() => navigation.navigate("Cart")} >
        <Text className='text-xl  font-semibold ' >cart</Text>
        <MaterialCommunityIcons name="chevron-right" color={""} size={20} />
      </TouchableOpacity>

      <TouchableOpacity className='border-b-[1px] border-gray-200 p-3 ml-5 my-2 w-[85vw] flex flex-row justify-between items-center' onPress={() => navigation.navigate("Address")}>
        <Text className='text-xl  font-semibold ' >address</Text>
        <MaterialCommunityIcons name="chevron-right" color={""} size={20} />
      </TouchableOpacity>
      <TouchableOpacity className='border-b-[1px] border-gray-200 p-3 ml-5 my-2 w-[85vw] flex flex-row justify-between items-center' onPress={() => navigation.navigate("Delete")}>
        <Text className='text-xl  font-semibold ' >account</Text>
        <MaterialCommunityIcons name="chevron-right" color={""} size={20} />
      </TouchableOpacity>

      <TouchableOpacity className='border-b-[1px] border-gray-200 p-3 ml-5 my-2 w-[85vw] flex flex-row justify-between items-center' >
        <Text className='text-xl  font-semibold ' >about</Text>
        <MaterialCommunityIcons name="chevron-right" color={""} size={20} />
      </TouchableOpacity>
    </View>
  )
}

export default ListOfFields

