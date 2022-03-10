import { FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {useFonts,Inter_300Light,Inter_400Regular,Inter_500Medium,Inter_600SemiBold,Inter_700Bold,
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { Icon } from 'react-native-elements';
import React from 'react'


const NavFavs = () => {
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
  const data =[
    {
      id:"123",
      icon:"md-home",
      location:"Home",
      destination:"Saket,New Delhi, Delhi, India" ,
    },
    {
      id:"564",
      icon:"md-briefcase",
      location:"Work",
      destination:"Tagore Garden, Tilak Nagar, New Delhi, India" ,
    },
  ];
  return (
    <View>
    <FlatList
      data={data}
      keyExtractor={(item)=> item.id}
      style={{marginTop:10,marginBottom:15}}
      ItemSeparatorComponent={()=>(
        <View 
          style={{backgroundColor:'#CECECE',height:1}}
        />
      )}
      renderItem={({item:{location,destination,icon}}) =>(
        <TouchableOpacity style={styles.card}>
        <Icon
          name={icon}
          type='ionicon'
          color='#0C0C0C'
          size={27}
          style={{marginRight:20}}
        /> 
        <View>
          <Text style={{fontSize:17,fontFamily:'Inter_700Bold',padding:1}}>{location}</Text>
          <Text style={{fontSize:14,fontFamily:'Inter_500Medium',color:'gray'}}>{destination}</Text>
        </View>
        </TouchableOpacity>
      )}
    />
    </View>
  )
}

export default NavFavs

const styles = StyleSheet.create({
  card:{
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    marginVertical:5
  }
})