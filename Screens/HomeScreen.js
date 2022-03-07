import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import NavOps from '../Components/NavOps'


const HomeScreen = () => {
  return (
    <View style={styles.container}>
    <Image 
    style={styles.img} 
    source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"}} />
    <NavOps/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal:20
    },
    img: {
        height:100,
        width:100,
        resizeMode:"contain",
    }
})