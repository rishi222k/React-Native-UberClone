import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import NavOps from '../Components/NavOps'


const HomeScreen = () => {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <Image 
    style={styles.img} 
    source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"}} />
    <Image 
    style={{height:30,width:30,resizeMode:'contain'}}
    source={require('../Images/Profileicon.png')}
    />
    </View>
    
    <NavOps/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal:'6%'
    },
    img: {
        height:100,
        width:100,
        resizeMode:"contain",
    },
    header:{
      width:'100%',
      display:'flex',
      flexDirection:'row', 
      alignItems:'center',
      justifyContent:'space-between',
      marginBottom:15,
    }
})