import { StyleSheet, Text, View,SafeAreaView,Platform,StatusBar,ScrollView,KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React from 'react'
import Map from '../Components/Map'
import MapView from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/stack';
import NavCard from '../Components/NavCard';
import RideOps from '../Components/RideOps';
import { Icon } from 'react-native-elements';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';


const MapScreen = () => {
  const Stack= createStackNavigator();
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{flex:1}}>

    <TouchableOpacity 
    onPress={()=> navigation.navigate("HomeScreen")}
    style={tw`bg-black absolute top-16 left-8 z-50 px-2.2 py-2 rounded-full shadow-xl`}>
    <Icon 
        name='arrow-left'
        type='font-awesome-5'
        color='#fff'
        size={20}
      />
    </TouchableOpacity>
    <View style={{height:'45%',zIndex:0}}>
      <Map/>
    </View>
    <View style={{height:'55%',zIndex:1}}>
      <Stack.Navigator>
      <Stack.Screen
      name="NavigateCard"
      component={NavCard}
      options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
      name="RideOptions"
      component={RideOps}
      options={{
          headerShown: false,
        }}
      />
      </Stack.Navigator>
    </View>

    </KeyboardAvoidingView>
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