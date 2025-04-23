import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigatorParamList } from '../types/navigation';
import HomeScreen from '../screens/home';

const Tab = createBottomTabNavigator<BottomNavigatorParamList>();

const BottomNavigator = () => {
  return (
      <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
  );
};

export default BottomNavigator;
