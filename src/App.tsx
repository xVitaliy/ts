import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import { ResetPasswordPage } from './pages/ResetPasswordPage/ResetPasswordPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResetPasswordPage />
    </ThemeProvider>
  );
}

export default App;
