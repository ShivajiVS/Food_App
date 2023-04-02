import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth, db } from '../../config/firebase-config'
import { collection, getDocs, onSnapshot, orderBy } from "firebase/firestore";

const TableReservationHistory = () => {
    const [tableReservation, setTableReservation] = useState()
    useEffect(() => {
        getTableReservationData()
    }, [])
    const getTableReservationData = async () => {
        const docummentId = auth.currentUser.uid;
        const tableReservationSubCollectionRef = collection(db, `/users/${docummentId}/tableReservation/`)
        // // const query = tableReservationSubCollectionRef.orderBy('createdAt', 'desc');
        // const query = (tableReservationSubCollectionRef, orderBy('createdAt', 'desc'));
        await onSnapshot(tableReservationSubCollectionRef, (Snapshot) => {
            let data = [];
            Snapshot.docs.forEach((doc) => {
                data.push({ ...doc.data(), id: doc.id })
            })
            setTableReservation(state => data)
        })
    }
    return (
        <View className=" w-full h-full mt-2 ">
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    tableReservation ? tableReservation.map((item, index) => {
                        return (
                            <View key={index} className={` w-[93vw] h-44 bg-slate-200 mt-1 mx-3.5 rounded-xl  justify-center px-2`}>
                                <View className="flex-row">
                                    <Text className="mt-2 ml-2 text-base capitalize font-normal text- ">email address : </Text>
                                    <Text className="mt-1.5 ml-2 text-base font-semibold ">{item?.email}</Text>
                                </View>
                                <View className="flex-row">
                                    <Text className="mt-2 ml-2 text-base capitalize font-normal text- ">date : </Text>
                                    <Text className="mt-1.5 ml-2 text-base font-semibold ">{item?.selectedDate}</Text>
                                </View>
                                <View className="flex-row">
                                    <Text className="mt-2 ml-2 text-base capitalize font-normal text- ">time slot : </Text>
                                    <Text className="mt-1.5 ml-2 text-base font-semibold text- ">{item?.slotTime}</Text>
                                </View>
                                <View className="flex-row">
                                    <Text className="mt-2 ml-2 text-base capitalize font-normal text- ">table type : </Text>
                                    <Text className="mt-1.5 ml-2 text-base font-semibold ">{item?.tableType}</Text>
                                </View>
                                <View className="flex-row">
                                    <Text className="mt-2 ml-2 text-base capitalize font-normal text- ">reservation number : </Text>
                                    <Text className="mt-1.5 ml-2 text-base font-semibold ">{item?.tableReservationId}</Text>
                                </View>
                            </View>
                        )
                    }) : <View className="my-64">
                        <Text className="text-orange-500 text-xl capitalize font-semibold text-center">till now , you have no bookings..</Text>
                    </View>
                }
            </ScrollView>
        </View>
    )
}

export default TableReservationHistory



//date , slot,  table type, resrvation id, email address 