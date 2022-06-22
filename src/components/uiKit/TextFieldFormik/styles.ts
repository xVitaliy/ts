import { Box, BoxProps, styled } from '@mui/material';

interface WrapperStyledProps extends BoxProps {
  width?: string;
}

export const WrapperStyled = styled(Box)<WrapperStyledProps>(({ width }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: '8px',
    width: width,
    marginBottom: '24px',
    minWidth: '328px',
    '& .MuiInputAdornment-root': {
      marginRight: 0,
    },
    '& .MuiFormHelperText-root.Mui-error': {
      fontSize: '10px',
      margin: 0,
      position: 'absolute',
      left: 0,
      bottom: '-23px',
    },
  };
});
