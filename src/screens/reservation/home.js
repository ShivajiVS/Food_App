import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect, } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const ReservationHomeScreen = () => {
    // const navigation = useNavigation();
    const [greet, setGreet] = useState('')
    const tableImage = `https://img.freepik.com/free-photo/table-set-dinning-table_1339-3461.jpg?w=1060&t=st=1678301483~exp=1678302083~hmac=2d4727c3024ebcf0921554595a46fa9ab7e76d6fcc763506495d71441bf3c547`;
    const foodImage = `https://img.freepik.com/premium-photo/plate-delicious-homemade-chicken-biryani-yogurt-dip-plate-white-surface_665346-15464.jpg?w=900`;
    useEffect(() => {
        let myDate = new Date();
        let hrs = myDate.getHours();
        if (hrs < 12)
            setGreet('Good Morning');
        else if (hrs >= 12 && hrs <= 17)
            setGreet('Good Afternoon');
        else if (hrs >= 17 && hrs <= 24)
            setGreet('Good Evening');
    }, [])
    return (
        <View className="flex-1 bg-slate-200">
            <View className=" mt-16 mx-5">
                {/* greeting message */}
                <View className=' flex-row'>
                    <Text className='capitalize text-2xl  mr-44 font-extrabold'>{greet}</Text>
                    <TouchableOpacity >
                        <Ionicons name="notifications-sharp" color={"red"} size={28} />
                    </TouchableOpacity>
                </View>
                <View className="mt-3">
                    {/* table reservation */}
                    <Text className="capitalize text-xl font-semibold ">reserve your table</Text>
                    <View className="bg-gray-200 h-72 justify-center items-center rounded-md mt-0.5">
                        <Image source={{ uri: tableImage }} className="w-[92vw] m-1 h-52 rounded-md" />
                        <TouchableOpacity className="rounded-lg bg-orange-300 w-[92vw] h-10 mt-2" onPress={() => navigation.navigate("TableReserveScreen")}>
                            <Text className="capitalize text-xl font-bold text-center p-1.5">Book Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="mt-2">
                    {/* food reservation */}
                    <Text className="capitalize text-xl font-semibold ">order your food</Text>
                    <View className="bg-gray-200 h-72 justify-center items-center rounded-md ">
                        <Image source={{ uri: foodImage }} className="w-[92vw] m-0.5 h-52 rounded-md" />
                        <TouchableOpacity className="rounded-lg bg-orange-300 w-[92vw] h-10 mt-2" onPress={() => navigation.navigate("FoodOrderingMain")}>
                            <Text className="capitalize text-xl font-semibold text-center p-1.5 ">Book Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default ReservationHomeScreen