/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Platform} from 'react-native';

import {Movies} from '../screens/Movies';
import {Lista} from '../screens/Lista';
import {Search} from '../screens/Search';
import {colores} from '../theme/appTheme';
import {Series} from '../screens/Series';

export const BottomTabs = () => {
  return Platform.OS === 'ios' ? <TabsIos /> : <TabsAndroid />;
};

//Navegación Android
const AndroidTabs = createMaterialBottomTabNavigator();
const TabsAndroid = () => {
  return (
    <AndroidTabs.Navigator
      sceneAnimationEnabled={true}
      activeColor="white"
      inactiveColor="white"
      barStyle={{backgroundColor: colores.primary}}>
      <AndroidTabs.Screen name="Movies" component={Movies} />
      <AndroidTabs.Screen name="Series" component={Series} />
      <AndroidTabs.Screen name="Mi Lista" component={Lista} />
      <AndroidTabs.Screen name="Search" component={Search} />
    </AndroidTabs.Navigator>
  );
};

// Navegación IOS
const IosTabs = createBottomTabNavigator();
const TabsIos = () => {
  return (
    <IosTabs.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={{headerShown: false, tabBarLabelStyle: {fontSize: 15}}}>
      <IosTabs.Screen name="Movies" component={Movies} />
      <IosTabs.Screen name="Series" component={Series} />
      <IosTabs.Screen name="Mi Lista" component={Lista} />
      <IosTabs.Screen name="Search" component={Search} />
    </IosTabs.Navigator>
  );
};
