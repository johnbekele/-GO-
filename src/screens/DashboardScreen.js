import { View, Text } from 'react-native';
import React from 'react';
import TabNavigator from '../components/TabNavigator';

export default function DashboardScreen() {
  return (
    <View style={{ flex: 1 }}>
      <TabNavigator />
    </View>
  );
}
