import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import { LoginPage } from './pages/LoginPage/LoginPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
