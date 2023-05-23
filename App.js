import "react-native-gesture-handler";
import useAppFont from "./src/shared/hooks/useAppFont";
import { ThemeProvider, useTheme } from "@rneui/themed";
import Login from "./src/features/Login/Login";
import Register from "./src/features/Register/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LOGIN, REGISTER } from "./src/shared/constants/routes";
import StackNavigator from "./src/shared/navigation/StackNavigator";

const Stack = createStackNavigator();

export default function App() {
    const fonts = useAppFont();
    const { theme } = useTheme();

    if (!fonts) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        </ThemeProvider>
    );
}
