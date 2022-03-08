// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Platform,StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import HomeScreen from './Screens/HomeScreen';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.AndroidSafeArea}>
          <HomeScreen/>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
