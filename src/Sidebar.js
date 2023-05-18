import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Sidebar = () => {
  return (
    <View style={styles.sidebar}>
      <Text>Sidebar</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    sidebar:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"green"
    }
})
export default Sidebar