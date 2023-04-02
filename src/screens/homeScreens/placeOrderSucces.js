import { Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
export default function PlaceOrderSucces() {
    const navigation = useNavigation();
    return (
        <View className="mt-44 justify-center items-center ">
            <LottieView source={require('../../assets/success.json')} autoPlay className="w-72 h-72" />
            <View>
                <Text className="capitalize font-bold  text-xl mt-10">order placed successfully</Text>
            </View>
            <TouchableOpacity className="bg-orange-300 w-40 h-12  justify-center items-center mt-20 rounded-xl " onPress={() => navigation.navigate("Items")}>
                <Text className="capitalize font-bold  text-xl ">GoBack home </Text>
            </TouchableOpacity>
        </View>
    )
}

