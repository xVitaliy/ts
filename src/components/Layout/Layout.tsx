import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { Header } from '../Header/Header';

type PropsTypes = {
  children?: ReactNode;
};

export const Layout: React.FC<PropsTypes> = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
};
