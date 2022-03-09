import { StyleSheet, Text, View,SafeAreaView,Platform,StatusBar } from 'react-native'

import React from 'react'


const MapScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{paddingHorizontal:'6%',}}>
    <Text>MapScreen</Text>
    </View>
    </SafeAreaView>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height:'100%',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
},
})