// import 'react-native-gesture-handler';
// import { StyleSheet, Text, View,Button, StatusBar } from 'react-native';
// import * as Haptics from 'expo-haptics';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Avijit chakraborty</Text>
//       <Button
//        style={styles.btn}
//        title='Click me'
//        color={"black"}
//        onPress={
//         () =>{
//           Haptics.notificationAsync(
//             Haptics.NotificationFeedbackType.Success
//           )
//           console.log("hello world")
//         } 
//       }
//       />
//       <StatusBar hidden={false} backgroundColor={"green"} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   heading:{
//     color:"red",
//     fontSize:20,
//     textAlign:"center"
//   },
//   btn:{
//     paddingVertical:10,
//     paddingHorizontal:7,
//   }
// });

import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './src/AppNavigator'

const App = () => {
  return (
    <AppNavigator />
  )
}

export default App