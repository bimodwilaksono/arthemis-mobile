import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Text } from 'react-native';
import { Provider } from './src/provider';

const queryClient = new QueryClient();

export default function App() {

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <Text>Hello</Text>
      </QueryClientProvider>
    </Provider>
  );
}
