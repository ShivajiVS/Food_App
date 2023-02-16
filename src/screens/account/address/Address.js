import { View, Text ,SafeAreaView,TouchableOpacity} from 'react-native'
import React,{useEffect} from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 

const Address = () => {   
  return (
    <SafeAreaView className='absolute'>
                <TouchableOpacity className="mt-24 h-12  w-screen border-y-2 border-gray-300 border-opacity-0 " onPress=    {()=>console.log("logged..")}>
                    <View className='p-2 flex-row '>
                        <MaterialIcons name="add" color={"indigo"} size={17} />
                        <Text className='uppercase text-base  text-indigo-700 font-bold ' >add new address</Text>
                    </View>
            </TouchableOpacity>  
        <View className="mt-6  bg-slate-50 w-full h-[35vh] ">
            <Text className='mt-3.5 ml-3 text-lg capitalize'>kondeti shivaji</Text>
            <Text className='mt-3.5 ml-3 capitalize'>yerramsettivari palem 1-155</Text>
            <Text className='mt-1 ml-3 capitalize'>p.gannavaram</Text>
            <Text className='mt-1 ml-3 capitalize'>kothapeta -533240</Text>
            <Text className='mt-1 ml-3 capitalize'>andhra pradesh</Text>
            <Text className='mt-3.5 ml-3 capitalize'>mobile: 767181421</Text>
            <View className='mt-5 border-b-2 w-full border-gray-300 border-opacity-0'></View>
            <View className='flex flex-row justify-evenly p-4 '>
                <TouchableOpacity onPress={()=>console.log("logged..")} >
                    <Text className='uppercase text-base text-indigo-700 font-bold  ' >edit</Text>
                </TouchableOpacity>
                    <View className='capitalize border-r-2 border-gray-300 border-opacity-0 h-6' ></View>
                <TouchableOpacity onPress={()=>console.log("logged..")}>
                        <Text className='uppercase text-base text-indigo-700 font-bold' >remove</Text>
                </TouchableOpacity>      
            </View>
        </View>
    </SafeAreaView>

  )
}
export default Address;