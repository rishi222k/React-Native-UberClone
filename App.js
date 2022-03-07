// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Platform,StatusBar } from 'react-native';
import {Provider} from 'react-redux';
import HomeScreen from './Screens/HomeScreen';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaView style={styles.AndroidSafeArea}>
    <HomeScreen/>
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
