import React from 'react';
import { ThemeProvider, useTheme } from '@rneui/themed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Text } from 'react-native';

const queryClient = new QueryClient();

export default function App() {
  const {theme} = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Text>Hello</Text>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
