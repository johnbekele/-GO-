import { View } from 'react-native'
import React from 'react'

import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function SplashText(props) {
  return (
    <Text style={styles.text}>
      {props.text}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginTop: 20,
  },
});