import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown'

const TableReservation = () => {
    const navigation = useNavigation()
    const [week, setWeek] = useState([]);
    const [selectDate, setSelectDate] = useState("")
    const dateAndDay = ["FRI 31-3-2023", "SATUR 1-4-2023", "SUN 2-4-2023", "MON 3-4-2023", "TUES 4-4-2023", "WEDNS 5-4-2023", "THUR 6-4-2023",]

    const timeSlotes = [{
        id: 1,
        slot: "10:00 AM",
        selected: false,
    },
    {
        id: 2,
        slot: "10:15 AM",
        selected: false,
    },
    {
        id: 3,
        slot: "10:30 AM",
        selected: false,
    },
    {
        id: 4,
        slot: "11:00 AM",
        selected: false,
    },
    {
        id: 5,
        slot: "11:30 AM",
        selected: false,
    },
    {
        id: 6,
        slot: "12:00 PM",
        selected: false,
    },
    {
        id: 7,
        slot: "12:30 PM",
        selected: false,
    },
    {
        id: 8,
        slot: "01:00 PM",
        selected: false,
    },
    {
        id: 9,
        slot: "01:30 PM",
        selected: false,
    },
    {
        id: 10,
        slot: "02:00 PM",
        selected: false,
    },
    {
        id: 11,
        slot: "02:30 PM",
        selected: false,
    },
    {
        id: 12,
        slot: "03:00 PM",
        selected: false,
    },
    {
        id: 13,
        slot: "03:30 PM",
        selected: false,
    },
    {
        id: 14,
        slot: "04:00 PM",
        selected: false,
    },
    {
        id: 15,
        slot: "04:30 PM",
        selected: false,
    },
    {
        id: 16,
        slot: "05:00 PM",
        selected: false,
    },
    {
        id: 17,
        slot: "05:30 PM",
        selected: false,
    },
    {
        id: 18,
        slot: "06:00 PM",
        selected: false,
    },
    {
        id: 19,
        slot: "06:30 PM",
        selected: false,
    },
    {
        id: 20,
        slot: "07:00 PM",
        selected: false,
    },
    {
        id: 21,
        slot: "07:30 PM",
        selected: false,
    },
    {
        id: 22,
        slot: "08:00 PM",
        selected: false,
    },
    {
        id: 23,
        slot: "08:30 PM",
        selected: false,
    },

    ];

    // useEffect(() => {
    //     const today = new Date();
    //     const DaysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //     const newWeek = [];

    //     for (let i = 0; i < 7; i++) {
    //         const date = new Date();
    //         date.setDate(today.getDate() + i);
    //         const day = DaysOfWeek[date.getDay()];
    //         const id = i + 1;

    //         newWeek.push({ date, day, id });
    //     }
    //     setWeek(newWeek);
    //     console.log("newWeek", week.length)
    //     console.log("newWeek", week)
    // }, [])
    // const onTimeSlotSelect = (props) => {
    //     console.log("props", props)
    //     navigation.navigate("TableReserveScreen")
    // }

    return (
        <View className="flex-1 bg-slate-50">
            <View className="mx-4 mt-5">
                {/* main container */}
                <View>
                    {/* date container */}
                    <Text className=" text-xl font-bold">Book a slot</Text>
                    <View className="mt-3">
                        {/* dropdown list  */}
                        <SelectDropdown
                            data={dateAndDay}
                            onSelect={(selectedItem, index) => {
                                setSelectDate(state => selectedItem)
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
                                width: "95%",
                                marginHorizontal: 10,
                                borderRadius: 10,
                            }}
                            buttonTextStyle={{
                                color: "white",
                                fontSize: 22,
                                fontWeight: "bold",
                            }}
                            defaultButtonText="Select your date"
                            renderDropdownIcon={() => {
                                return (
                                    <Ionicons name="chevron-down-outline" color={"white"} size={30} />
                                )
                            }}
                        />
                    </View>
                </View>
                <View className="mt-5">
                    {/* time container */}
                    <Text className=" capitalize text-xl font-semibold">Time scheduling </Text>
                    <ScrollView showsVerticalScrollIndicator={false} className="h-[65vh] mt-1">
                        {
                            timeSlotes.map((item) => {
                                const { id, slot } = item;
                                return (
                                    <TouchableOpacity className={`mt-5`} key={id} onPress={() => {
                                        selectDate ?
                                            navigation.navigate("TableTypeScreen", { selectDate, slot }) : Alert.alert("Please select date first..")
                                    }}>
                                        <Text className="uppercase text-lg font-medium mx-3">{slot}</Text>
                                        <View className="h-0.5 mt-2 bg-slate-200"></View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default TableReservation