import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import { RouterProvider } from './Router/RouterProvider';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <RouterProvider />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
