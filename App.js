import "react-native-gesture-handler";
import useAppFont from "./src/shared/hooks/useAppFont";
import { ThemeProvider, useTheme } from "@rneui/themed";
import Login from "./src/features/Login/Login";
import Register from "./src/features/Register/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LOGIN, REGISTER } from "./src/shared/constants/routes";
import StackNavigator from "./src/shared/navigation/StackNavigator";
import NavigatorAtBottom from "./src/shared/navigation/NavigatorAtBottom";
import { Provider } from "react-redux";
import store from "./src/shared/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getLocalStorage, clearLocalStorage } from "./src/shared/utils/storageUtil";

const Stack = createStackNavigator();
const queryClient = new QueryClient();

export default function App() {
    const fonts = useAppFont();
    const { theme } = useTheme();
    clearLocalStorage("token");
    const token = getLocalStorage("token");
    console.log("token", token);
    const isLoggedIn = token ? true : false;

    if (!fonts) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            {/* <Provider store={store}> */}
            <QueryClientProvider client={queryClient}>
                <NavigationContainer>
                    {isLoggedIn ? <NavigatorAtBottom /> : <StackNavigator />}
                </NavigationContainer>
            </QueryClientProvider>
            {/* </Provider> */}
        </ThemeProvider>
    );
}
