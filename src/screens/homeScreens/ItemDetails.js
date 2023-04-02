import { View, Text, ImageBackground, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addItemToCart, incrementQuantity, decrementQuantity } from '../../Redux/slices/cartSlice';


const ItemDetails = (props) => {
    const { title, imageUrl, price, description, discount } = props.route.params;
    const navigation = useNavigation();
    const dispatch = useDispatch();

    function showToast() {
        ToastAndroid.show('Item Added Successfully!', ToastAndroid.CENTER, ToastAndroid.CENTER);
    }

    function addToCart(props) {
        dispatch(addItemToCart(props));
        showToast()
    }
    return (
        <>
            {/* main view container */}
            <View className="flex-1">
                {/* item container */}
                <View className=" h-[70vh]">
                    <Image source={{ uri: imageUrl }} className="h-full w-screen" />
                    <TouchableOpacity className="absolute top-12 left-1" onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back-outline" color={"white"} size={40} />
                    </TouchableOpacity>
                    <TouchableOpacity className="absolute top-12 right-3" onPress={() => navigation.navigate("Cart")}>
                        <MaterialCommunityIcons name="cart" color={"white"} size={40} />
                    </TouchableOpacity>
                </View>
                {/* item body container */}
                <View className="bg-gray-100 h-[40vh] ">
                    {/* item name */}
                    <View className=" mt-3 mx-5">
                        <Text className="capitalize font-bold text-xl">{title}</Text>
                    </View>
                    <View className="p-3 ml-5">
                        <Text className=" capitalize font-bold text-xl">₹ {price}</Text>
                    </View>
                    <View className="mx-6">
                        <Text className="capitalize font-semibold text-lg">description</Text>
                        <Text numberOfLines={4} className="text-justify p-0.5 ml-0.5">{description}</Text>
                    </View>
                    {/* check out container */}
                    <View className="mt-12 flex-row justify-center items-center">
                        <TouchableOpacity className="w-[94vw] h-12 rounded-xl bg-green-600 justify-center items-center" onPress={() => { addToCart(props.route.params) }}>
                            <Text className=" font-bold text-lg text-cyan-100">Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}
export default ItemDetails;

