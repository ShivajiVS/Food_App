import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { updateDefaultAddress } from '../../Redux/slices/defaultAddress';
import { collection, addDoc, getDoc, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from '../../config/firebase-config'

const DefaultAddress = (props) => {
  const [addressList, setAddressList] = useState([])
  const [temp] = addressList;

  const orderDetailsAndAddress = [
    temp,
    props.route.params,
  ];
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userColRef = collection(db, "users")
  const docRef = doc(userColRef, auth.currentUser.uid)
  let tempAddress = [];
  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (snapShot) => {
      tempAddress = [...snapShot.data().address]
      setAddressList(tempAddress)
    })
    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <>

      <View className="flex-row top-12 left-2 h-[85px] ">
        <TouchableOpacity className="" onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" color={"orange"} size={35} />
        </TouchableOpacity>
        <View className="left-28">
          <Text className="capitalize font-bold text-xl text-orange-400 mt-1"> address</Text>
        </View>
      </View>
      {
        addressList.length > 0 ? (
          addressList.length > 0 && addressList.map((item, index) => (
            <View className="w-[95vw] mx-auto mt-7 " key={index}>
              <View className="flex-row h-52 bg-slate-200 w-full justify-between items-center mt-4 shadow-xl rounded-2xl">
                <View className="ml-4 0  w-[70vw]">
                  <Text className="capitalize font-normal text-base">name : {item?.name}</Text>
                  <Text className="capitalize font-normal text-base" >phone number : {item?.phoneNumber}</Text>
                  <Text className="capitalize font-normal text-base" >address  : {item?.address}</Text>
                  <Text className="capitalize font-normal text-base" >pincode  : {item?.pincode}</Text>
                  <Text className="capitalize font-normal text-base" >district :  {item?.district}</Text>
                  <Text className="capitalize font-normal text-base" >Locality/Town :  {item?.locality}</Text>
                </View>
              </View>
            </View>
          ))
        ) : (
          <View className="flex-col justify-center items-center h-full w-full">
            <Text className="text-2xl font-bold">No address found...</Text>
            <TouchableOpacity className="mt-4" onPress={() => navigation.navigate("AddAddress2", { title: "add" })}>
              <Text className=" text-2xl underline text-red-400">add address</Text>
            </TouchableOpacity>
          </View>
        )
      }
      <View className="absolute bottom-10 ">
        <TouchableOpacity className={`w-[95vw] h-12 mr-3 ml-3 rounded-lg justify-center items-center ${addressList ? "bg-green-600" : "bg-green-300"} `} disabled={addressList.length > 0 ? false : true} onPress={() => navigation.navigate("Payment", orderDetailsAndAddress)}>
          <Text className="capitalize text-xl ">continue</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default DefaultAddress