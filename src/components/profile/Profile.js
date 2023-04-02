import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc, getDoc, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from '../../config/firebase-config'
const Profile = () => {
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const userColRef = collection(db, "users")
  const docRef = doc(userColRef, auth.currentUser.uid)
  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (snapShot) => {
      setName(snapShot.data().fullName)
    })
    return () => {
      unsubscribe();
    }
  }, [])
  return (
    <View className=' w-[94vw] h-40 mx-3 bg-slate-100 rounded-xl'>
      <View className='flex flex-1 justify-center items-center '>
        <TouchableOpacity onPress={() => navigation.navigate("EditProfilePicture")}>
          <MaterialCommunityIcons name="account-circle" color={""} size={120} />
        </TouchableOpacity>
        <Text className='text-xl capitalize font-semibold '>{name}</Text>
      </View>
    </View>
  )
}

export default Profile