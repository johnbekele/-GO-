import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font'; // Import the hook for font loading

export default function Logo() {
  const [fontsLoaded] = useFonts({
    'Orbitron': require('../../assets/fonts/Orbitron-VariableFont_wght.ttf'), // Load Orbitron font
  });

  // Check if the font is loaded before rendering the component
  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>; // Show loading message if font isn't loaded
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/020/111/055/non_2x/tgo-flat-accounting-logo-design-on-white-background-tgo-creative-initials-growth-graph-letter-logo-concept-tgo-business-finance-logo-design-vector.jpg',
        }}
        style={styles.image}
      />
      <Text style={styles.text}>ተማሪ GO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',  // Center the contents horizontally
  },
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
  text: {
    marginTop: -30,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Orbitron', // Apply the Orbitron font
    marginBottom: 12,
  },
});
