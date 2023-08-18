import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { LOGIN, REGISTER } from "../constants/routes";
import Login from "../../features/Login/Login";
import Register from "../../features/Register/Register";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={LOGIN}>
            <Stack.Screen name={LOGIN} component={Login} />
            <Stack.Screen name={REGISTER} component={Register} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
