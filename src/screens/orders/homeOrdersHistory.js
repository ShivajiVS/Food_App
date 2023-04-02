import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth, db } from '../../config/firebase-config'
import { collection, onSnapshot, } from "firebase/firestore";

const HomeDeliveryHistory = () => {
    const [homeDeliveryOrders, setHomeDeliveryOrders] = useState()
    useEffect(() => {
        getTableReservationData()
    }, [])
    const getTableReservationData = async () => {
        const docummentId = auth.currentUser.uid;
        const tableReservationSubCollectionRef = collection(db, `/users/${docummentId}/foodHomeorders`)
        await onSnapshot(tableReservationSubCollectionRef, (Snapshot) => {
            let data = [];
            Snapshot.docs.forEach((doc) => {
                data.push({ ...doc.data(), id: doc.id })
            })
            console.log("data from orders screenddss :", JSON.stringify(data))
            setHomeDeliveryOrders(state => data)
        })
    }
    return (
        <View className=" w-full h-full mt-10 " >
            <ScrollView showsVerticalScrollIndicator={false} className="h-[90vh]">
                {console.log("data from orders screenddssc ssfsfsfsfsfssdsds :", JSON.stringify(homeDeliveryOrders))}
                {
                    homeDeliveryOrders.map((item, index) => {
                        return (
                            <View key={index} className="bg-slate-400 w-full">
                                {Object.values(item).map((food, i) => {
                                    return (
                                        <View key={i} className="bg-slate-900 ">
                                            <Text className="bg-slate-400 text-red-500">{food.name}</Text>
                                            <Text>{food.quantity}</Text>
                                            <Text>{food.price}</Text>
                                        </View>
                                    );
                                })}
                            </View>
                        );
                    })
                }
                {/* <View className="m-20"><Text>hello</Text></View> */}
            </ScrollView>
        </View>
    )
}

export default HomeDeliveryHistory