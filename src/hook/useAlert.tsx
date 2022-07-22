import React from 'react';
import { useSnackbar } from 'notistack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const useAlert = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const action = (snackbarId) => (
    <IconButton
      onClick={() => {
        closeSnackbar(snackbarId);
      }}
    >
      <CloseIcon />
    </IconButton>
  );

  const handleClickVariant = (
    variant,
    message = 'This is a success message!',
  ) => {
    return enqueueSnackbar(message, { variant, action });
  };
  return { handleClickVariant };
};
