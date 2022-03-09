import { StyleSheet, Text, View,SafeAreaView,Platform,StatusBar } from 'react-native'
import React from 'react'
import Map from '../Components/Map'
import MapView from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/stack';
import NavCard from '../Components/NavCard';
import RideOps from '../Components/RideOps';


const MapScreen = () => {
  const Stack= createStackNavigator();
  return (
    // <SafeAreaView style={styles.container}>
    // <View style={{paddingHorizontal:'6%',}}>
    // <Text>MapScreen</Text>
    // </View>
    // </SafeAreaView>
    <View style={{height:'100%',}}>
    <View style={{height:'50%'}}>
      <Map/>
    </View>
    <View style={{height:'50%'}}>
      <Stack.Navigator>
      <Stack.Screen
      name={NavCard}
      component={NavCard}
      options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
      name={RideOps}
      component={RideOps}
      options={{
          headerShown: false,
        }}
      />
      </Stack.Navigator>
    </View>

    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     height:'100%',
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
// },
})