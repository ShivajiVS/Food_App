import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth, db } from '../../config/firebase-config'
import { collection, getDocs, onSnapshot, orderBy } from "firebase/firestore";

const OrderHistroy = () => {
    const [foodOrder, setFoodOrder] = useState()
    useEffect(() => {
        getTableReservationData()
    }, [])
    const getTableReservationData = async () => {
        const docummentId = auth.currentUser.uid;
        const tableReservationSubCollectionRef = collection(db, `/users/${docummentId}/orders/`)
        await onSnapshot(tableReservationSubCollectionRef, (Snapshot) => {
            let data = [];
            Snapshot.docs.forEach((doc) => {
                data.push({ ...doc.data(), id: doc.id })
            })
            setFoodOrder(state => data)
            console.log("food orders data from order screen : ", JSON.stringify(foodOrder))
        })
    }
    return (
        <View className=" w-full h-full mt-2" >
            <ScrollView showsVerticalScrollIndicator={false} >
                {
                    foodOrder ? foodOrder.map((items, index) => {
                        return (
                            <View key={index} className={`w-[96vw] bg-slate-200 mt-1 mx-1 rounded-xl  justify-center px-2`}>
                                {
                                    items?.items.map((item, index) => {
                                        return (
                                            <View className="w-full py-1 flex-row " key={index}>
                                                <Image source={{ uri: item?.imageUrl }} className='w-20 h-20 rounded-xl ' />
                                                <View className="ml-3.5">
                                                    <Text className="capitalize font-semibold text-base ">{item?.title}</Text>
                                                    <Text className=" capitalize font-semibold text-base">₹ {item?.price}</Text>
                                                    <Text className='font-bold text-base capitalize m-1'>Qty : {item?.quantity}</Text>
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                                <Text className='font-bold text-xl capitalize m-1 mt-2'>Total :   ₹ {items?.totalPrice}</Text>
                            </View >
                        )
                    }) : <View className="justify-center my-">
                        <Text className="text-orange-500 text-xl capitalize font-semibold text-center">till now , you have no orders..</Text>
                    </View>
                }
            </ScrollView >
        </View >
    )
}
export default OrderHistroy