import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, ToastAndroid, Image } from 'react-native'
import React from 'react'
import Items from '../../components/home/Items';
import CustomeInput from '../../components/home/Input';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../Redux/slices/cartSlice';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ItemScreen = (props) => {
    const { items } = useSelector(state => state);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    function showToast() {
        ToastAndroid.show('Item Added Successfully!', ToastAndroid.CENTER, ToastAndroid.CENTER);
    }
    return (
        <SafeAreaView>

            <View className="m-3 mt-10">
                {/* <Items /> */}
                <View>
                    <Text className="capitalize font-semibold text-2xl text-red-500">menu</Text>
                    <TouchableOpacity className="absolute  right-2 " onPress={() => navigation.navigate("Cart")}>
                        <MaterialCommunityIcons name="cart" color={"red"} size={35} />
                    </TouchableOpacity>
                </View>
                <View>
                    {/* image card */}
                    <ScrollView className="h-[90vh] mt-2.5" showsVerticalScrollIndicator={false}>
                        {
                            items.length > 0 && items.map((item) => {
                                const { title, id, imageUrl, price, description, discount } = item;
                                return (
                                    <View className=" mt-2 h-64 w-[94vw] bg-slate-100 rounded-md" key={id}>
                                        <TouchableOpacity onPress={() => navigation.navigate("ItemDetails", { title, imageUrl, price, description, discount })}>
                                            <Image source={{ uri: imageUrl }} className="w-[92vw] m-1 h-44 rounded-lg" />
                                            <Text className="text-xl font-semibold capitalize text-slate-700 ml-2">{title}</Text>
                                        </TouchableOpacity>
                                        <View className="flex-row justify-between">
                                            <Text className="text-lg font-semibold capitalize text-slate-700 ml-5 mt-1 ">₹  {price}</Text>
                                            <TouchableOpacity className="w-32 h-9 mr-2 bg-green-600 justify-center items-center rounded-lg " onPress={() => {
                                                dispatch(addItemToCart(item))
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
                    {/* <View>
                        <TouchableOpacity className="w-[93vw] h-12 mt-2.5 rounded-xl items-center justify-center bg-gray-500" onPress={() => navigation.navigate("ListOfSelectedItems")}>
                            <Text className="uppercase text-xl font-bold text-white"> View added items</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ItemScreen;