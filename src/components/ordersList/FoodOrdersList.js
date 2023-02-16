import { View, Text,FlatList,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
const FoodOrdersList = () => {
  const navigation =useNavigation();
  const list=[
      {
        title:'your orders',
        id:1,
        path:"", 
      },
      {
        title:'wishlist',
        id:2,
        path:"", 

      },
      {
        title:'billing',
        id:3,
        path:"AddAddress", 
      },
      {
        title:'about',
        id:4,
        path:"", 
      },
    ]
  return (
    <View className='w-[94vw] mx-3 mt-5 bg-slate-100 rounded-xl shadow-2xl' >
    {/* <Text className='p-1' >Food Orders</Text> */}
    <ScrollView>
        <TouchableOpacity className='border-b-[1px] border-gray-200 p-3 ml-5 my-2 w-[85vw] flex flex-row justify-between items-center' >
          <Text className='text-xl capitalize font-semibold ' >Orders</Text>
          <MaterialCommunityIcons name="chevron-right" color={""} size={20} />
        </TouchableOpacity>
        
        <TouchableOpacity className='border-b-[1px] border-gray-200 p-3 ml-5 my-2 w-[85vw] flex flex-row justify-between items-center' >
          <Text className='text-xl capitalize font-semibold ' >wishlist</Text>
          <MaterialCommunityIcons name="chevron-right" color={""} size={20} />
        </TouchableOpacity>

        <TouchableOpacity className='border-b-[1px] border-gray-200 p-3 ml-5 my-2 w-[85vw] flex flex-row justify-between items-center' >
          <Text className='text-xl capitalize font-semibold ' onPress={()=>navigation.navigate(Address)}>billing</Text>
          <MaterialCommunityIcons name="chevron-right" color={""} size={20} />
        </TouchableOpacity>

        <TouchableOpacity className='border-b-[1px] border-gray-200 p-3 ml-5 my-2 w-[85vw] flex flex-row justify-between items-center' >
          <Text className='text-xl capitalize font-semibold ' >about</Text>
          <MaterialCommunityIcons name="chevron-right" color={""} size={20} />
        </TouchableOpacity>

        </ScrollView>  
  </View>
  )
}

export default FoodOrdersList




    //<View className='w-[94vw] mx-3 mt-5 bg-slate-100 rounded-xl shadow-2xl' >
     // {/* <Text className='p-1' >Food Orders</Text> */}
     // <FlatList data={list} renderItem={({item})=>(
       //   <TouchableOpacity className='border-b-[1px] border-gray-200 p-3 ml-5 my-2 w-[85vw] flex flex-row justify-between items-center' onPress={()=>navigation.navigate(item.path)}>
         //   <Text className='text-xl capitalize font-semibold '>{item.title}</Text>
           // <MaterialCommunityIcons name="chevron-right" color={""} size={20} />
          //</TouchableOpacity>
        //)}
      //keyExtractor={item => item.id}
      //>  
   // </View>