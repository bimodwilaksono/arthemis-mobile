import "react-native-gesture-handler";
import useAppFont from "./src/shared/hooks/useAppFont";
import { ThemeProvider, useTheme } from "@rneui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getLocalStorage } from "./src/shared/utils/storageUtil";
import { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LOGIN, REGISTER } from './src/shared/constants/routes';
import Login from './src/features/Login/Login';
import Register from './src/features/Register/Register';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import { BookingsScreen } from './src/screens/BookingsScreen/BookingsScreen';
import RegionsScreen from './src/screens/RegionsScreen/RegionsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

export default function App() {
    const fonts = useAppFont();
    const { theme } = useTheme();
    const [token, setToken] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        async function fetchToken() {
            const token = await getLocalStorage("token");
            setToken(token);
        }
        fetchToken();
    }, []);

    useEffect(() => {
        if(token) {
            setIsLoggedIn(true)
        }
    }, [token])

    if (!fonts) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <NavigationContainer>
                        {isLoggedIn ? (
                            <Tab.Navigator>
                                <Tab.Screen
                                    name='Campsites'
                                    component={RegionsScreen}
                                    options={{
                                        tabBarIcon: ({ color, size }) => (
                                            <MaterialCommunityIcons
                                                name='tent'
                                                color={color}
                                                size={size}
                                            />
                                        ),
                                    }}
                                />
                                <Tab.Screen
                                    name='Bookings'
                                    component={BookingsScreen}
                                    options={{
                                        tabBarIcon: ({ color, size }) => (
                                            <MaterialCommunityIcons
                                                name='book'
                                                color={color}
                                                size={size}
                                            />
                                        ),
                                    }}
                                />
                                <Tab.Screen
                                    name='Profile'
                                    component={ProfileScreen}
                                    options={{
                                        tabBarIcon: ({ color, size }) => (
                                            <MaterialCommunityIcons
                                                name='account'
                                                color={color}
                                                size={size}
                                            />
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
            </QueryClientProvider>
        </ThemeProvider>
    );
}
