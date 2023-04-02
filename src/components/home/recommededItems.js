import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';


const RecommendedItems = () => {
    const navigation = useNavigation();
    const { items } = useSelector(state => state);
    return (
        <View className='ml-3'>
            <View>
                <Text className='capitalize text-xl font-bold my-2 '>recommended</Text>
            </View>
            {
                items.map(({ id, title, imageUrl, price, discount, description }) => (
                    <TouchableOpacity key={id} className='flex-row my-1' onPress={() => navigation.navigate("ItemDetails2", { title, imageUrl, price, description, discount })}>
                        <View className=' mr-4'>
                            <Image source={{ uri: imageUrl }} className='w-28 h-28 rounded-xl ' />
                        </View>
                        <View className="mr-36">
                            <Text className='font-semibold text-xl capitalize my-2'>{title}</Text>
                            <Text className="capitalize text-justify ">{description}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

export default RecommendedItems


