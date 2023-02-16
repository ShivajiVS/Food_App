import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const index = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text onPress={navigation.navigate("products")}>go to products</Text>
    </View>
  )
}


export default index

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
    }
   
})