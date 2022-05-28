import { Box, styled } from '@mui/material';

export const WrapperStyled = styled(Box)(({ theme, width }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: '8px',
    width: width,
    marginBottom: '24px',
    minWidth: '328px',
    [theme.breakpoints.down('mobile')]: {
      margin: '10px 0',
    },
    '& .MuiInputAdornment-root': {
      marginRight: 0,
    },
  };
});
