import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
const TableType = (props) => {
    const { selectDate, slot } = props.route.params;

    const navigation = useNavigation()
    const tableTypes = ["Two Chairs", "Four Chairs", "Six Chairs", "Eight Chairs", "Ten Chairs"]
    const tableImageUrl = "https://img.freepik.com/premium-photo/restaurant-table-setting-service-with-reserved-card_53876-55934.jpg?size=626&ext=jpg&ga=GA1.1.325624779.1677223231&semt=ais"
    const [tableType, setTableType] = useState("")
    return (
        <View className="mt-12 mx-5 ">
            <View className="justify-center items-center">
                <Text className="uppercase text-2xl font-bold text-red-500">reserve your table </Text>
                <Image source={{ uri: tableImageUrl }} className='w-full h-60 rounded-lg mt-4 ' />
            </View>
            <View className="mt-10">
                <Text className="uppercase text-xl font-bold">select your table  type </Text>
            </View>
            <View className="mt-5">
                {/* dropdown list  */}
                <SelectDropdown
                    data={tableTypes}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, selectedItem)
                        setTableType(state => selectedItem)
                        console.log("table ", tableType)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                    buttonStyle={{
                        backgroundColor: "gray",
                        width: "96%",
                        marginHorizontal: 6,
                        borderRadius: 5,
                    }}
                    buttonTextStyle={{
                        color: "white",
                        fontSize: 22,
                        fontWeight: "bold",
                    }}
                    defaultButtonText="Select your table type"
                    renderDropdownIcon={() => {
                        return (
                            <Ionicons name="chevron-down-outline" color={"white"} size={30} />
                        )
                    }}
                />
            </View>
            <View className=" items-end mr-2">
                {/* next button container */}
                <View>
                    <TouchableOpacity className="w-[87vw] ml-20 h-12 mt-12 rounded-xl justify-center items-center bg-orange-400" onPress={() => {
                        tableType ? navigation.navigate("ConfirmReserveScreen", { selectDate, slot, tableType }) : Alert.alert("Please select table type first..")
                    }}>
                        <Text className="uppercase text-xl font-bold "> continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default TableType