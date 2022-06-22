/* eslint-disable */
import { Box, CircularProgress, Portal, styled } from '@mui/material';
import React from 'react';

type OverlayType = {
  regTrue?: boolean;
  regFalse?: boolean;
};

export const Overlay: React.FC<OverlayType> = ({
  // eslint-disable-next-line no-unused-vars
  regTrue = false,
  // eslint-disable-next-line no-unused-vars
  regFalse = false,
}) => {
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
        <ProgressBox>
          <CircularProgress />
        </ProgressBox>
      </Box>
    </Portal>
  );
};

const ProgressBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '96px',
  height: '96px',
  borderRadius: '50%',
  background: '#fff',
});

const RegistrationBlock = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '40px',
  color: '#fff',
  width: '350px',
  border: '5px solid #0A458E',
  padding: '30px 50px',
  textAlign: 'center',
});
