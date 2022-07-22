import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import { RouterProvider } from './Router/RouterProvider';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <RouterProvider />
        </SnackbarProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
