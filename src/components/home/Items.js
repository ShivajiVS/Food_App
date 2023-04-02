import { View, Text, FlatList, TouchableOpacity, ToastAndroid, Image, ScrollView } from 'react-native'
import { Button } from 'react-native-paper';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../Redux/slices/cartSlice';


const Items = () => {
    const { items } = useSelector(state => state);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    function showToast() {
        ToastAndroid.show('Item Added Successfully!', ToastAndroid.CENTER, ToastAndroid.CENTER);
    }

    return (
        <View>
            <ScrollView>
                {
                    items.map((item) => {
                        const { title, id, imageUrl, price, description, discount } = item;
                        return (
                            <View className='flex-row my-2 sticky top-2' key={id}>
                                <TouchableOpacity className=' mr-4' onPress={() => navigation.navigate("ItemDetails", { title, imageUrl, price, description, discount })}>
                                    <Image source={{ uri: imageUrl }} className='w-32 h-28 rounded-2xl ' />
                                </TouchableOpacity>
                                <View>
                                    <Text className='font-semibold text-xl capitalize my-1'>{title}</Text>
                                    <Text className='font-semibold text-xl capitalize'>₹ {price}</Text>
                                    <View className='flex-row'>
                                        <Button icon="cart" mode="contained-tonal" className="p-px text-center bg-orange-300" onPress={() => {
                                            dispatch(addItemToCart(item))
                                            showToast()
                                        }}> Add to cart</Button>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Items