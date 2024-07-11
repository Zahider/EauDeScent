import { View, Image, Text, StyleSheet, Platform } from 'react-native';
import LoginScreen from '../../Apps/Screens/LoginScreen'
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View>
      <StatusBar style='auto'/>
      <LoginScreen/>
    </View>
  );
}


