import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
export default function OrderSuccess(props) {
    const { orderNumber } = props.route.params;
    const navigation = useNavigation();
    return (
        <View className="mt-44 justify-center items-center ">
            <LottieView source={require('../../../assets/success.json')} autoPlay className="w-72 h-72" />
            <View className="mx-5">
                <Text className="capitalize font-bold  text-xl mt-7 text-center text-red-600">your order is booked successfully...</Text>
                <Text className=" font-bold  text-xl mt-5">Order Number is  {orderNumber}</Text>
                <Text className=" font-bold  text-base mt-3 text-center">please make a note it, </Text>
            </View>
            <TouchableOpacity className="bg-orange-300 w-40 h-12  justify-center items-center mt-10 rounded-xl opacity-60" onPress={() => navigation.navigate("ReserveScreen")}>
                <Text className="capitalize font-bold  text-xl ">GoBack to home </Text>
            </TouchableOpacity>
        </View>
    )
}