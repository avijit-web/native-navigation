import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from "../bottom/Home"
import Settings from "../bottom/Settings"
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

const Bottom = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {

  // const handlePress = (routeName) => {
  //   Haptics.selectionAsync() // Trigger haptic feedback

  //   // Navigate to the specified screen
  //   navigation.navigate(routeName);
  // };
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign
              name="home"
              size={size}
              color={color}
               />
          )
        }}
      />

      <Bottom.Screen
        name='Settings'
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          )
        }}
      />
    </Bottom.Navigator>
  )
}
const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  maintext: {
    fontSize: 20,
    fontWeight: "700"
  }
})
export default HomeScreen