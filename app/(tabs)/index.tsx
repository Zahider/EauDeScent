import { View,Image, StyleSheet, Platform } from 'react-native';
import LoginScreen from '../../Apps/Screens/LoginScreen'
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style='auto'/>
      <LoginScreen/>
    </View>
  );
}