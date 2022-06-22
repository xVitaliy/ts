import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import { RouterProvider } from './Router/RouterProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider />
    </ThemeProvider>
  );
}

export default App;
