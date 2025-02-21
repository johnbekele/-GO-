import { Text, View, StyleSheet, Image } from 'react-native';
import React , {useEffect} from 'react';
import SplashText from '../components/SplashText';
import Logo from '../components/Logo';

export default function SplashScreen({navigation}) {

useEffect(()=>{
  setTimeout(()=>{
    navigation.replace('LoginScreen');
  },6000)
},[navigation]);
  
  return (
    <View style={styles.container}>
     <View style={styles.container}>
      <Logo style={styles.logo} />
   </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Change this to match your theme
  },
  
});