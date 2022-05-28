import { Components } from '@mui/material';

export const button: Components = {
  MuiButton: {
    defaultProps: {
      size: 'large',
    },
    styleOverrides: {
      root: {
        maxWidth: '280px',
        height: '40px',
        fontSize: 14,
        fontWeight: 500,
        padding: '10px 24px',
        borderRadius: '100px',
        textTransform: 'none',
      },
    },
    variants: [
      {
        props: {
          variant: 'contained',
        },
        style: {
          color: '#fff',
          background: '#2E5DA8',
        },
      },
      {
        props: {
          variant: 'outlined',
        },
        style: {
          color: '#565E71',
          border: '1px solid #565E71',
        },
      },
    ],
  },
};
