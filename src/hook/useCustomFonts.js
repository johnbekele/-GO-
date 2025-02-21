import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';

export default function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    Orbitron: require('../../assets/fonts/Orbitron-VariableFont_wght.ttf'),
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      setIsReady(true);
    }
  }, [fontsLoaded]);

  return isReady;
}
