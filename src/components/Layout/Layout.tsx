import React from 'react';
import { Box } from '@mui/material';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';

// type PropsTypes = {
//   children?: ReactNode;
// };

export const Layout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};
