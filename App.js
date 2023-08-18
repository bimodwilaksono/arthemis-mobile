import "react-native-gesture-handler";
import useAppFont from "./src/shared/hooks/useAppFont";
import { ThemeProvider, useTheme } from "@rneui/themed";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./src/shared/context/AuthContext";
import MainNavigator from "./src/shared/navigation/MainNavigator";

const queryClient = new QueryClient();

export default function App() {
    const fonts = useAppFont();
    const { theme } = useTheme();

    if (!fonts) {
        return null;
    }

    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <MainNavigator />
                </QueryClientProvider>
            </ThemeProvider>
        </AuthProvider>
    );
}
