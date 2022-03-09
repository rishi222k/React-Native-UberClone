import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity,ImageBackground} from 'react-native'
import {useFonts,Inter_300Light,Inter_400Regular,Inter_500Medium,Inter_600SemiBold,Inter_700Bold,
} from '@expo-google-fonts/inter';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import{GOOGLE_MAPS_APIKEY} from "@env"
import AppLoading from 'expo-app-loading';
import { Icon } from 'react-native-elements';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrigin, setDestination, setOrigin } from '../slices/navSlice';

const NavOps = () => {

  const navigation= useNavigation();
  const dispatch=useDispatch();
  const origin=useSelector(selectOrigin);

  let [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const data1 =[
    {
      id:"123",
      title:"Ride",
      image: require('../Images/Primarycar.png'),
      screen: "MapScreen",
    },
    {
      id:"456",
      title:"Package",
      image: require('../Images/Package.png'),
      screen: "FoodScreen",
    },
  ];
  const data2 =[
    {
      id:"345",
      title:"Premium",
      image: require('../Images/Audi.png'),
      screen: "MapScreen",
    },
    {
      id:"567",
      title:"Transit",
      image: require('../Images/Transit.png'),
      screen: "MapScreen",
    },
    {
      id:"789",
      title:"Delivery",
      image: require('../Images/Delivery.png'),
      screen: "MapScreen",
    },
  ];
  return (
    <View>
    <View style={styles.card}>
    <View style={{width:'60%',backgroundColor:'#5600FF',padding:20,borderBottomLeftRadius:10,borderTopLeftRadius:10}}>
      <Text style={{fontSize:20,fontFamily:'Inter_700Bold',marginBottom:10,color:'#DFFF78'}}>Explore New Features</Text>
      <View style={{display:'flex',flexDirection:'row', alignItems:'center'}}>
      <Text style={{fontSize:17,fontFamily:'Inter_600SemiBold',marginRight:5,color:'#B38DFF'}}>Get Started</Text>
      <Icon
          name='md-arrow-forward-circle-sharp'
          type='ionicon'
          color='#B38DFF'
        />
      </View>
    </View>
    <View style={{width:'40%'}}>
    <Image 
    style={styles.bgimg}
    resizeMode='cover'
    source={require('../Images/Feature-Bg.jpg')} />
    </View>
    </View>

    <GooglePlacesAutocomplete
    placeholder="Enter your current location"
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      styles={{
        container:{
          flex:0,
          marginBottom:20,
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
        }
      }}
      minLength={2}
      enablePoweredByContainer={false}
      returnKeyType={"search"}
      onPress={(data,details = null)=> {
        dispatch (setOrigin({
          location:details.geometry.location,
          description:data.description,
        })
        );

        dispatch(setDestination(null));
      }}
      fetchDetails={true}
      query={{
        key:GOOGLE_MAPS_APIKEY,
        language:'en'}}
    />

    <FlatList
      data={data1}
      contentContainerStyle={styles.listView}
      horizontal
      keyExtractor={(item)=> item.id}
      renderItem={({item})=>(
        <TouchableOpacity 
        onPress={()=>navigation.navigate(item.screen)}
        disabled={!origin}>
          <View style={[styles.conta,]}>
            <Image
            style={{width:70,height:45,resizeMode:'contain',marginLeft:70}} 
            source={item.image}
            />
            <Text style={styles.text}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />

    <FlatList
      data={data2}
      contentContainerStyle={styles.listView}
      horizontal
      keyExtractor={(item)=> item.id}
      renderItem={({item})=>(
        <TouchableOpacity
        disabled={!origin}
        onPress={()=>navigation.navigate(item.screen)}>
          <View style={[styles.contb,]}>
            <Image
            style={{width:60,height:50,resizeMode:'contain'}} 
            source={item.image}
            />
            <Text style={{fontSize:15,fontFamily: 'Inter_600SemiBold'}}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
    </View>
  )
}

export default NavOps

const styles = StyleSheet.create({
  text:{
    fontSize:17,
    fontFamily: 'Inter_600SemiBold'
  },
  bgimg:{
    width:'100%',
    height:'100%',
    borderBottomRightRadius:10,
    borderTopRightRadius:10
  }
  ,
  card:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:130,
    marginBottom:15,
  },
  conta:{
    backgroundColor:'#ECECEC',
    paddingHorizontal:15,
    paddingVertical:12,
    borderRadius:10,
    width:'100%'
  },
  contb:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ECECEC',
    paddingVertical:15,
    paddingHorizontal:25,
    borderRadius:10,
    marginTop:12
  },
  listView:{
    flex:1,
    justifyContent:'space-between',
  }
  
})