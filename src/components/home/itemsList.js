import { View, Text } from 'react-native'
import React from 'react'

const categoriesData = [
    {
        id: 1,
        title: "pizza",
        imgUrl: "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg",
        description: "description here....",
    },
    {
        id: 2,
        title: "burger",
        imgUrl: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg",
        description: "description here....",
    },
    {
        id: 3,
        title: "snackes",
        imgUrl: "https://cdn.pixabay.com/photo/2017/03/26/11/53/hors-doeuvre-2175326_960_720.jpg",
        description: "description here....",
    },
    {
        id: 4,
        title: "veg ",
        imgUrl: "https://cdn.pixabay.com/photo/2017/09/22/16/16/pizza-2776188_960_720.jpg",
        description: "description here....",
    },
    {
        id: 5,
        title: "non veg ",
        imgUrl: "https://www.shutterstock.com/image-photo/madurai-india-nov-4-2020-600w-1852796557.jpg",
        description: "description here....",
    },
    {
        id: 6,
        title: "pizza",
        imgUrl: "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg",
        description: "description of the item....",
    },
]


const ItemsList = () => {
  return (
<View className='ml-3'>
            <View>
                <Text className='capitalize text-xl font-bold my-2 '>recommended</Text>
            </View>
            {
                categoriesData.map(({ id, title, imgUrl, description }) => (
                    <TouchableOpacity key={id} className='flex-row my-1'>
                        <View className=' mr-4'>
                            <Image source={{ uri: imgUrl }} className='w-28 h-28 rounded-xl ' />
                        </View>
                        <View>
                            <Text className='font-semibold text-xl capitalize my-2'>{title}</Text>
                            <Text>{description}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </View>
  )
}

export default ItemsList