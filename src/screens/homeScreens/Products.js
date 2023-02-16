import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Product = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text >go to home</Text>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
    }
   
})