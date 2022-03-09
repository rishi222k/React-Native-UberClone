// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View,} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import HomeScreen from './Screens/HomeScreen';
import MapScreen from './Screens/MapScreen';
import { store } from './store';

export default function App() {
  const Stack= createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen 
          name='HomeScreen'
          component={HomeScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name='MapScreen'
          component={MapScreen}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
          {/* <HomeScreen/> */}
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  // AndroidSafeArea: {
  //   backgroundColor: "#fff",
  //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  // },
});
