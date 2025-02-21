import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import LoginScreen  from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import SplashScreen from './src/screens/SplashScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import { useFonts } from 'expo-font';
import FontLoader from './src/components/FontLoader'; 

const Stack = createStackNavigator();

export default function App() {
  

  const handleClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    

  }, []);

  return (
     <FontLoader>
     <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.FadeFromBottomAndroid, 
        }}
      
      initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </FontLoader>
 
  );
}

const styles = StyleSheet.create({
 
});
