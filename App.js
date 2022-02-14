import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View } from 'react-native';
import login from './loginpic.JPEG';

export default function App() {
  return (
    <View style={styles.container}>
       <Image source={login} style={{ width: 305, height: 159 }} /> 
      <Text>salma fathy
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
    alignItems: 'center',
    justifyContent: 'center',
  },
});
