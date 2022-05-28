import { Components } from '@mui/material';

export const textField: Components = {
  MuiTextField: {
    styleOverrides: {
      root: {
        width: '100%',
        fontWeight: 'normal',
        // fontSize: 14,
        lineHeight: '18px',
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        minHeight: 40,
        color: '#6C6C6C',
        paddingLeft: '0',
        paddingRight: '12px',
        paddingBottom: '16px',
        background: '#E1E2EC',
        '&.Mui-focused': {
          background: '#E1E2EC',
        },
        '&:hover': {
          background: '#E1E2EC',
        },
      },
      input: {
        padding: '16px 16px 0px 16px',
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      multiline: {
        paddingLeft: '16px !important',
        paddingRight: '16px !important',
        paddingTop: '16px !important',
      },
    },
  },
};
