import { View, Text, Image, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToOrder } from '../../../Redux/slices/itemAddSlice';
const FoodOrderingMain = () => {
    const { items } = useSelector(state => state);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    function showToast() {
        ToastAndroid.show('Item Added Successfully!', ToastAndroid.CENTER, ToastAndroid.CENTER);
    }


    return (
        <View className="mt-8 ml-3">
            <View>
                <Text className="capitalize font-semibold text-2xl">menu</Text>
            </View>
            <View>
                {/* image card */}
                <ScrollView className="h-[90vh] mt-0.5">
                    {
                        items.map((item) => {
                            const { title, id, imageUrl, price, description, discount } = item;
                            return (
                                <View className=" mt-2 h-64 w-[94vw] bg-slate-100 rounded-md" key={id}>
                                    <Image source={{ uri: imageUrl }} className="w-[92vw] m-1 h-44 rounded-lg" />
                                    <Text className="text-xl font-semibold capitalize text-slate-700 ml-2">{title}</Text>
                                    <View className="flex-row justify-between">
                                        <Text className="text-lg font-semibold capitalize text-slate-700 ml-5 mt-1 ">₹  {price}</Text>
                                        <TouchableOpacity className="w-32 h-9 mr-2 bg-orange-400 justify-center items-center rounded-lg " onPress={() => {
                                            dispatch(addItemToOrder(item))
                                            showToast()
                                        }}>
                                            <Text className="text-xl font-semibold capitalize text-slate-700 ">add</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <View>
                    <TouchableOpacity className="w-[93vw] h-12 mt-2.5 rounded-xl items-center justify-center bg-gray-500" onPress={() => navigation.navigate("ListOfSelectedItems")}>
                        <Text className="uppercase text-xl font-bold text-white"> View added items</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View >
    )
}
export default FoodOrderingMain