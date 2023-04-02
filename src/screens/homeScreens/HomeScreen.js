import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategoriesListView from '../../components/home/CategoriesScrollListView';
import { DiscountBanner } from '../../components/home/CategoriesScrollListView';
import RecommendedItems from '../../components/home/recommededItems';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HomeScreen = (props) => {
  const [greet, setGreet] = useState('')
  useEffect(() => {
    let myDate = new Date();
    let hrs = myDate.getHours();
    if (hrs < 12)
      setGreet('Good Morning');
    else if (hrs >= 12 && hrs <= 17)
      setGreet('Good Afternoon');
    else if (hrs >= 17 && hrs <= 24)
      setGreet('Good Evening');
  }, [])

  const { navigation } = props;
  return (
    <SafeAreaView>
      <ScrollView className='bg-slate-50'>
        {/* mt-16 */}
        <View className=' mt-12 ml-5 '>
          <View className=' flex-row '>
            {/* fast & delicious food */}
            <Text className='capitalize text-2xl  mr-48 font-extrabold'>{greet}</Text>
            <TouchableOpacity>
              <Ionicons name="notifications-sharp" color={"red"} size={28} />
            </TouchableOpacity>
            {/* <Text className='capitalize text-2xl font-bold pt-2'>food</Text> */}
          </View>
          {/* =======================DiscountBanner component ================  */}
          <View>
            <DiscountBanner />
          </View>

          {/* =======================CategoriesListView component ================  */}
          <View>
            <CategoriesListView />
          </View>

          {/* =======================RecommendedItems component ================  */}
          <View>
            <RecommendedItems />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}


export default HomeScreen
