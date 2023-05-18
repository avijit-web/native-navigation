import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {

    useEffect(()=>{
       setTimeout(()=>{
         navigation.navigate("MainScreen")
       },3000)
    },[])
  return (
    <View style={styles.splashview}>
      <Text style={styles.splashtext}>Splash</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    splashview:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    splashtext:{
        fontSize:20,
        fontWeight:"700"
    }
})

export default Splash