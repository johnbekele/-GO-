// Dashboard.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Home from '../tabs/Home';
import Profile from '../tabs/Profile';
import Settings from '../tabs/Settings';
import TabNavigator from '../components/TabNavigator';
import BottomDrawer from '../components/BottomDrawer';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const DashboardScreen = ({ navigation }) => {
  return (
    <Drawer.Navigator
      initialRouteName="TabNavigator"
      drawerPosition="right"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Drawer Screen for Tab Navigator */}
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="BottomDrawer" component={BottomDrawer} />
    </Drawer.Navigator>
  );
};

export default DashboardScreen;
