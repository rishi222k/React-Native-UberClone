import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,Image } from 'react-native'
import {useFonts,Inter_300Light,Inter_400Regular,Inter_500Medium,Inter_600SemiBold,Inter_700Bold,
} from '@expo-google-fonts/inter';
import { Icon } from 'react-native-elements';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import { setTravelTimeInformation,selectTravelTimeInformation } from '../slices/navSlice';

const   SURGE_CHARGE_RATE=1.5;

const RideOps = () => {
  const navigation= useNavigation();
  const [selected,setSelected] = useState(null);
  const travelTimeInformation =useSelector(selectTravelTimeInformation);

  const data =[
    {
      id:"Uber-X-123",
      title:"Uber-X",
      image: require('../Images/Primarycar.png'),
      multiplier:1,
    },
    {
      id:"Uber-XL-456",
      title:"Uber-XL",
      image: require('../Images/UberXL.png'),
      multiplier:1.2,
    },
    {
      id:"Uber-LUX-789",
      title:"Uber-LUX",
      image: require('../Images/Lux.png'),
      multiplier:1.75,
    },
  ];

  return (
    <SafeAreaView style={{backgroundColor:"#fff",flex:1,}}>
    <View style={{paddingHorizontal:'3%',}}>
    <View>
      <TouchableOpacity 
      style={{position:'absolute',top:25,left:10,zIndex:50}}
      onPress={() => navigation.navigate("NavigateCard")}>
      <Icon 
        name='arrow-left'
        type='font-awesome-5'
        color='#000'
        size={20}
      />
      </TouchableOpacity>
      <Text style={{textAlign:"center",fontSize:20,fontFamily:'Inter_600SemiBold',paddingVertical:20}}>
      Select a Ride - {travelTimeInformation?.distance.text}</Text>
    </View>
    <FlatList 
      data={data}
      keyExtractor={(item)=> item.id}
      renderItem={({ item:{id,title,multiplier,image}, item }) => (
        <TouchableOpacity 
        onPress={()=> setSelected(item)}
        style={tw`flex-row justify-between items-center px-5 rounded ${id === selected?.id && "bg-gray-200"}`}>
          <Image 
          style={{width:80,height:90,resizeMode:"contain"}}
          source={image}
          />
          <View>
          <Text style={{fontSize:20,fontFamily:'Inter_600SemiBold'}}>{title}</Text>
          <Text style={{marginTop:4}}>{travelTimeInformation?.duration.text} travel time</Text>
          </View>
          <Text style={{fontSize:20,fontFamily:'Inter_500Medium'}}>

            {new Intl.NumberFormat('en-IN',{
              style:'currency',
              currency:'INR'
            }).format(
              (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier*7)/100
            )}

          </Text>
        </TouchableOpacity>
      )}
    />

    <View>
      <TouchableOpacity 
      disabled={!selected}
      style={[styles.choose,selected? {backgroundColor:"black"}:{backgroundColor:"#CACACA"}]}>
        <Text style={{textAlign:'center',color:'white',fontSize:20}}>
          Confirm  {selected?.title}
        </Text>
      </TouchableOpacity>
    </View>

    </View>
    </SafeAreaView>
  )
}

export default RideOps

const styles = StyleSheet.create({
  choose:{
    marginTop:15,
  paddingHorizontal:25,
  paddingVertical:15,
  borderRadius:10
  },
})