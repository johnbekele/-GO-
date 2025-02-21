// src/navigation/MainNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../tabs/Home';
import Profile from '../tabs/Profile';
import Settings from '../tabs/Settings';
import { tabScreenOptions } from '../../config/tabOptions';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
