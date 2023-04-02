import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, FlatList, TouchableOpacity, Image, Alert } from 'react-native'
import { Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromOrder, clearorder, incrementQuantity, decrementQuantity } from '../../../Redux/slices/itemAddSlice'
const ListOfSelectedItems = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { Order } = useSelector(state => state.Order);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        totalCalculation()
    }, [Order]);


    const totalCalculation = () => {
        let sum = 0;
        for (let i = 0; i < Order.length; i++) {
            sum += Order[i].price * Order[i].quantity;
        }
        setTotalPrice(state => sum);
    }

    return (
        <>
            <SafeAreaView>
                <CartHeader />
                <View>
                    {
                        Order.length > 0 ?
                            <>
                                <TouchableOpacity className="bg-gray-200 p-0.5" onPress={() => { dispatch(clearorder()) }}>
                                    <Text className="capitalize, text-lg p-2 ml-36 text-black font-bold capitalize" >Clear cart</Text>
                                </TouchableOpacity>
                                <ScrollView accessible showsHorizontalScrollIndicator className="h-[82vh]">
                                    {
                                        Order.map((item, index) => {
                                            const { title, id, imageUrl, price, description, discount, quantity } = item;
                                            return (
                                                <View key={index} >
                                                    <View className='flex-row sticky top-2 '>
                                                        <TouchableOpacity className=' mx-4'>
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
                                                                    <TouchableOpacity className='left-5' onPress={() => dispatch(removeItemFromOrder(item))}>
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
                                    <Text className="capitalize font-bold text-lg ml-3">Order list is empty , please add</Text>
                                </View>
                            </>
                    }
                </View>
            </SafeAreaView>
            {
                Order.length > 0 ?
                    <>
                        <TouchableOpacity className="bg-orange-400 h-[7vh] w-[95vw] rounded-xl mb-3 mx-2 p-3 justify-center items-center" onPress={() => navigation.navigate("ConfirmOrder", { Order, totalPrice })}>
                            <View className="flex-row">
                                <View className="flex-row">
                                    <Text className="capitalize text-base font-medium mt-1">total :</Text>
                                    <Text className="uppercase text-xl font-bold mx-2  ">₹{totalPrice}</Text>
                                </View>
                                <Text className="uppercase text-xl font-bold mx-6">Continue</Text>
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
        <View className="flex-row top-10 left-4 h-[85px] ">
            <TouchableOpacity className="" onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back-outline" color={"black"} size={35} />
            </TouchableOpacity>
            <View className="left-16 mt-0">
                <Text className="capitalize font-bold text-xl  mt-2">list of selected items</Text>
            </View>
        </View>
    )
}



export default ListOfSelectedItems


