import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity } from 'react-native'
import React from 'react'

const NavOps = () => {
  const data1 =[
    {
      id:"123",
      title:"Ride",
      image: require('../Images/Primarycar.png'),
      screen: "Map Screen",
    },
    {
      id:"456",
      title:"Food",
      image: require('../Images/food.png'),
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
      title:"Package",
      image: require('../Images/Package.png'),
      screen: "Map Screen",
    },
  ];
  return (
    <View>
    <FlatList
      data={data1}
      horizontal
      keyExtractor={(item)=> item.id}
      renderItem={({item})=>(
        <TouchableOpacity>
          <View style={{width:150}}>
            <Image
            style={{width:110,height:80,resizeMode:'contain'}} 
            source={item.image}
            />
            <Text style={{fontSize:16, fontWeight: '600'}}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
    </View>
  )
}

export default NavOps

const styles = StyleSheet.create({
  
})