import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, FlatList, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native'
import { Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, clearCart, incrementQuantity, decrementQuantity } from '../../Redux/slices/cartSlice';
const CartScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < cart.length; i++) {
            sum += cart[i].price * cart[i].quantity;
        }
        setTotalPrice(sum);
    }, [cart]);


    return (
        <>
            <SafeAreaView>
                <CartHeader />
                <View>
                    {
                        cart.length > 0 ?
                            <>
                                <TouchableOpacity className="bg-gray-200 p-0.5" onPress={() => { dispatch(clearCart()) }}>
                                    <Text className="capitalize, text-lg p-2 ml-36 text-black font-bold capitalize" >Clear cart</Text>
                                </TouchableOpacity>
                                <ScrollView accessible showsHorizontalScrollIndicator className="h-[82vh]">
                                    {
                                        cart.map((item, index) => {
                                            const { title, id, imageUrl, price, description, discount, quantity } = item;
                                            return (
                                                <View key={index} >
                                                    <View className='flex-row sticky top-2 '>
                                                        <TouchableOpacity className=' mx-4' onPress={() => navigation.navigate("ItemDetails", item)}>
                                                            <View className="rounded-lg bg-slate-100 w-32 h-32 justify-center items-center">
                                                                <Image source={{ uri: imageUrl }} className=' rounded-2xl h-28 w-28' />
                                                            </View>
                                                        </TouchableOpacity>
                                                        <View className="my-2">
                                                            <Text className='font-semibold text-xl capitalize m-1'>{title}</Text>
                                                            <Text className='font-semibold text-xl capitalize m-1'>₹ {price}</Text>
                                                            <View>
                                                                <View className="flex-row w-32 h-10 justify-evenly items-center">
                                                                    <TouchableOpacity onPress={() => dispatch(decrementQuantity(item))}>
                                                                        <MaterialCommunityIcons name="minus-circle" color={"orange"} size={25} />
                                                                    </TouchableOpacity>
                                                                    <Text className="text-xl font-bold">{quantity}</Text>
                                                                    <TouchableOpacity onPress={() => dispatch(incrementQuantity(item))} >
                                                                        <MaterialCommunityIcons name="plus-circle" color={"orange"} size={25} />
                                                                    </TouchableOpacity>
                                                                    <TouchableOpacity className='left-5' onPress={() => dispatch(removeItemFromCart(item))}>
                                                                        <Ionicons name="md-trash" color={"red"} size={25} />
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            )
                                        })
                                    }
                                </ScrollView>
                            </>
                            :
                            <>
                                <View className="flex-row justify-center pt-72">
                                    <View>
                                        <MaterialCommunityIcons name="cart" color={"orange"} size={50} />
                                    </View>
                                    <Text className="capitalize font-bold text-lg ml-3">cart empty , please add</Text>
                                </View>
                            </>
                    }
                </View>
            </SafeAreaView>
            {
                cart.length > 0 ?
                    <>
                        <TouchableOpacity className="bg-green-600 h-[7vh] rounded-lg my-1 mx-3 p-3 justify-center items-center" onPress={() => navigation.navigate("CheckOut")}>
                            <View className="flex-row">
                                <View className="flex-row">
                                    <Text className="capitalize text-base font-medium mt-1">total :</Text>
                                    <Text className="uppercase text-xl font-bold mx-2  ">₹{totalPrice}</Text>
                                </View>
                                <Text className="uppercase text-xl font-bold mx-6">Check out</Text>
                            </View>
                        </TouchableOpacity>
                    </> : <></>
            }
        </>
    )
}

const CartHeader = () => {
    const navigation = useNavigation();
    return (
        <View className="flex-row top-10 left-2 h-[85px] ">
            <TouchableOpacity className="" onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back-outline" color={"orange"} size={35} />
            </TouchableOpacity>
            <View className="left-32 mt-0">
                <Text className="capitalize font-bold text-xl text-orange-400 mt-2">cart</Text>
            </View>
        </View>
    )
}


const OrderDetails = () => (
    <View className="mt-5">
        <View className="flex-row justify-between ">
            <Text className="capitalize font-medium text-lg ml-7 ">subtotal</Text>
            <Text className="capitalize font-medium text-lg mr-10">₹ {2000}</Text>
        </View>
        <View className="flex-row justify-between mt-2">
            <Text className="capitalize font-medium text-lg ml-7">delivery</Text>
            <Text className="capitalize font-medium text-lg mr-10">₹ {50}</Text>
        </View>
        <View className="flex-row justify-between mt-2">
            <Text className="capitalize font-medium text-lg ml-7">discount</Text>
            <Text className="capitalize font-medium text-lg mr-10">₹ {100}</Text>
        </View>
        <View className="flex-row justify-between mt-4">
            <Text className="capitalize font-extrabold text-lg ml-7">total</Text>
            <Text className="capitalize font-extrabold text-lg mr-10">₹ {100}</Text>
        </View>

        {/* check out button */}
        <View className="my-5 flex-row justify-center items-center">
            <TouchableOpacity className="w-[88vw] h-12 rounded-xl bg-green-600 justify-center items-center">
                <Text className="capitalize font-bold text-lg text-cyan-100">checkOut</Text>
            </TouchableOpacity>
        </View>
    </View>
)

export default CartScreen