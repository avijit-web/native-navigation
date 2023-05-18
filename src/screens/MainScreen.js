import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from '../sidebarScreens/HomeScreen';
import {TabRouter} from "@react-navigation/native"
import Notifications from './Notifications';
import Sidebar from '../Sidebar';

const Drawer = createDrawerNavigator();

const MainScreen = () => {
    return (
        // <View style={styles.mainview}>
        //   <Text style={styles.maintext}>MainScreen</Text>
        // </View>
        <Drawer.Navigator drawerContent={(props)=><Sidebar {...props} />}>
            <Drawer.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{ headerShown:TabRouter}}
            />
             {/* <Drawer.Screen
                name='Notification'
                component={Notifications}
                options={{ headerShown:TabRouter}}
            /> */}
        </Drawer.Navigator>
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
export default MainScreen