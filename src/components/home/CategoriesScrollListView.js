import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

const categoriesData = [
    {
        id: 1,
        title: "pizza",
        imgUrl: "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg",
    },
    {
        id: 2,
        title: "burger",
        imgUrl: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg",
    },
    {
        id: 3,
        title: "snackes",
        imgUrl: "https://cdn.pixabay.com/photo/2017/03/26/11/53/hors-doeuvre-2175326_960_720.jpg",
    },
    {
        id: 4,
        title: "veg ",
        imgUrl: "https://cdn.pixabay.com/photo/2017/09/22/16/16/pizza-2776188_960_720.jpg",
    },
    {
        id: 5,
        title: "non veg ",
        imgUrl: "https://www.shutterstock.com/image-photo/madurai-india-nov-4-2020-600w-1852796557.jpg",
    },
]
const offers = [
    {
        id: 1,
        imgUrl: "https://img.freepik.com/free-photo/side-view-rice-garnish-with-fried-onion-carrot-greens-chili-pepper-table_141793-5069.jpg?w=1060&t=st=1677535231~exp=1677535831~hmac=a262288cb80d649fa80ba0d65839841bba1304a5ca25022a68f3cb358204ae26",
    },
    {

        id: 2,
        imgUrl: "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=1060&t=st=1677535211~exp=1677535811~hmac=06300aa81149d543c65c4d5128a7739fcad7291776e70b21ea5d236dba7668a2",

    },
    {
        id: 3,
        imgUrl: "https://as2.ftcdn.net/v2/jpg/02/84/46/89/1000_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg",
    },
    {
        id: 4,
        imgUrl: "https://img.freepik.com/free-photo/side-view-rice-garnish-with-fried-onion-carrot-greens-chili-pepper-table_141793-5069.jpg?w=1060&t=st=1677535231~exp=1677535831~hmac=a262288cb80d649fa80ba0d65839841bba1304a5ca25022a68f3cb358204ae26",
    }
];

const CategoriesListView = () => {
    return (
        <>
            <View className="bg-slate-50 mt-3 h-44">
                <Text className='capitalize text-xl font-bold my-4 ml-2 '>Vyshnavi, what's on your mind?</Text>
                <ScrollView horizontal centerContent>
                    {
                        categoriesData.map(({ id, title, imgUrl }) => (
                            <View key={id} className="m-1.5 w-28 h-24 placeholder:justify-center items-center " >
                                <Image source={{ uri: imgUrl }} className='w-20 h-20 rounded-full ' />
                                <Text className='capitalize text-1xl font-bold mt-1.5'>{title}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        </>
    )
}

// ============================ DiscountBanner component start===========================
export const DiscountBanner = () => {
    return (
        <View className="w-full bg-slate-50 mt-3">
            <Text className='capitalize text-xl font-bold mb-3 ml-2'>offers</Text>
            <ScrollView horizontal >
                {
                    offers && offers.map(({ id, imgUrl }) => (
                        <View key={id} className="mt-2 ml-3 h-40 justify-center items-center">
                            <Image source={{ uri: imgUrl }}
                                className='w-[88vw] h-[95vh]  rounded-md hover:rounded-3xl ' />
                            {/* <View className="rounded-full w-16 h-16 absolute top-4 right-7 bg-violet-500 bg-opacity-0 justify-center items-center ">
                                <Text>50% Off</Text>
                            </View> */}
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}
// ============================ DiscountBanner component end===========================

export default CategoriesListView
