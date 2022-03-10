import { StyleSheet, Text, View,SafeAreaView,KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import{GOOGLE_MAPS_APIKEY} from "@env"
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react'
import { setDestination } from '../slices/navSlice';
import AppLoading from 'expo-app-loading';
import { Icon } from 'react-native-elements';
import NavFavs from './NavFavs';

const NavCard = () => {

  const dispatch=useDispatch();
  const navigation= useNavigation();
  
  return (
    <SafeAreaView style={{backgroundColor:"#fff",flex:1,}}>
    <View style={{paddingHorizontal:'6%',}}>
      <Text style={{textAlign:"center",fontSize:20,fontFamily:'Inter_600SemiBold',paddingVertical:20}}>Good Morning, Rishi</Text>
      
      <GooglePlacesAutocomplete
      placeholder="Where To ?"
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      fetchDetails={true}
      styles={Mapstyles}
      minLength={2}
      enablePoweredByContainer={false}
      returnKeyType={"search"}
      query={{
        key:GOOGLE_MAPS_APIKEY,
        language:'en'}}
      onPress={(data,details = null)=> {
        dispatch (setDestination({
          location:details.geometry.location,
          description:data.description,
        })
        );
        navigation.navigate('RideOptions')
      }}
    />
    <NavFavs/>
    <View style={{flexDirection:'row',width:"100%",justifyContent:'space-around',marginTop:20}}>
      {/* Uber-Rides */}
      <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'black',width:150, borderRadius:80}}
      onPress={()=> navigation.navigate("RideOptions")}>
      <Icon 
        name='car-side'
          type='font-awesome-5'
          color='white'
          size={23}
          style={{marginRight:20}}
      />
      <Text style={{color:'white'}}>Rides</Text>

      {/* Uber-Eats */}
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center',borderColor:'black',borderWidth:2,paddingHorizontal:15,paddingVertical:8,width:150, borderRadius:80}}>
      <Icon 
        name='md-fast-food'
          type='ionicon'
          color='black'
          size={23}
          style={{marginRight:20}}
      />
      <Text style={{color:'black'}}>Eats</Text>
      </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  )
}

export default NavCard

const Mapstyles= StyleSheet.create({
  container:{
    flex:0,
    marginTop:10,
  },
  textInput:{
    fontSize:17,
    fontFamily:'Inter_600SemiBold',
    height: 50,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor:'#fff',
    borderColor:'gray',
    borderWidth: 1.5,
    borderRadius: 5,
  },
})

const styles = StyleSheet.create({
  
})