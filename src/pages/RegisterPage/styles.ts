import { Box, styled } from '@mui/material';

export const LinkWrapStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'end',
  gap: '8px',
  marginBottom: '40px',
  a: {
    color: '#2E5DA8',
  },
});

export const ButtonGroupStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
