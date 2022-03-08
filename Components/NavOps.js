import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity } from 'react-native'
import {useFonts,Inter_300Light,Inter_400Regular,Inter_500Medium,Inter_600SemiBold,Inter_700Bold,
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import React from 'react'

const NavOps = () => {
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
      screen: "Map Screen",
    },
    {
      id:"456",
      title:"Package",
      image: require('../Images/Package.png'),
      screen: "Food Screen",
    },
  ];
  const data2 =[
    {
      id:"345",
      title:"Premium",
      image: require('../Images/Audi.png'),
      screen: "Map Screen",
    },
    {
      id:"567",
      title:"Transit",
      image: require('../Images/Transit.png'),
      screen: "Map Screen",
    },
    {
      id:"789",
      title:"Delivery",
      image: require('../Images/Delivery.png'),
      screen: "Map Screen",
    },
  ];
  return (
    <View>
    <FlatList
      data={data1}
      contentContainerStyle={styles.listView}
      horizontal
      keyExtractor={(item)=> item.id}
      renderItem={({item})=>(
        <TouchableOpacity>
          <View style={styles.conta}>
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
        <TouchableOpacity>
          <View style={styles.contb}>
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