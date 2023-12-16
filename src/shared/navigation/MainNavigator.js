import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import RegionsScreen from '../../screens/RegionsScreen/RegionsScreen';
import { BookingsScreen } from '../../screens/BookingsScreen/BookingsScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import { LOGIN, REGISTER } from '../constants/routes';
import Login from '../../features/Login/Login';
import Register from '../../features/Register/Register';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MainNavigator = () => {
  const { isLoggedIn, token } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {token ? (
                <Tab.Navigator>
                    <Tab.Screen
                        name='Campsites'
                        component={RegionsScreen}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name='tent' color={color} size={size} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name='Bookings'
                        component={BookingsScreen}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name='book' color={color} size={size} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name='Profile'
                        component={ProfileScreen}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name='account' color={color} size={size} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            ) : (
                <Stack.Navigator>
                    <Stack.Screen name={LOGIN} component={Login} />
                    <Stack.Screen name={REGISTER} component={Register} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};

export default MainNavigator;
