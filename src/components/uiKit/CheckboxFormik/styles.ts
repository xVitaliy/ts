import { Box, styled, BoxProps } from '@mui/material';

interface WrapperStyledProps extends BoxProps {
  hasError?: boolean;
}

export const WrapperStyled = styled(Box)<WrapperStyledProps>(({ hasError }) => {
  return {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'start',
    '& .MuiSvgIcon-root': {
      border: hasError && '1px solid #d32f2f',
      borderRadius: '3px',
    },
  };
});
