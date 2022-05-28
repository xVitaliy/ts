import { Box, CircularProgress, Portal } from '@mui/material';
import React from 'react';

export const Overlay: React.FC = () => {
  return (
    <Portal>
      <Box
        sx={{
          position: 'fixed',
          left: 0,
          top: 0,
          height: '100%',
          width: '100%',
          background: ' rgba(86, 94, 113, 0.6)',
          backdropFilter: 'blur(40px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '96px',
            height: '96px',
            borderRadius: '50%',
            background: '#fff',
          }}
        >
          <CircularProgress />
        </Box>
      </Box>
    </Portal>
  );
};
