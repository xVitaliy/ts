import { Typography, TextField, InputAdornment } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { WrapperStyled } from './styles';

type PropsTypes = {
  name: string;
  label?: string;
  nativeLabel?: string;
  placeholder?: string;
  maxLength?: number;
  type?: 'email' | 'text' | 'password' | 'number';
  width?: string;
  sx?: object;
  variant?: 'filled' | 'standard' | 'outlined';
};

export const TextFieldFormik: React.FC<PropsTypes> = ({
  name,
  label,
  nativeLabel,
  placeholder,
  maxLength = Infinity,
  type = 'text',
  width = '100%',
  sx,
  variant,
}) => {
  const [field, meta] = useField(name);
  const { handleChange } = useFormikContext();
  const hasError = Boolean(meta.error && meta.touched);

  const [viewPassword, setViewPassword] = useState(false);

  return (
    <WrapperStyled width={width} sx={sx}>
      {!nativeLabel && label ? (
        <label htmlFor={name}>
          <Typography>{label}</Typography>
        </label>
      ) : null}
      <TextField
        variant={variant}
        id={name}
        name={name}
        value={field.value}
        onChange={handleChange}
        label={nativeLabel || ''}
        error={hasError}
        helperText={hasError ? meta.error : ''}
        placeholder={placeholder}
        fullWidth
        type={viewPassword ? 'text' : type}
        InputProps={{
          endAdornment: (
            <InputAdornment position='start' sx={{ cursor: 'pointer' }}>
              {type === 'password' ? (
                <VisibilityIcon
                  onClick={() => {
                    setViewPassword(!viewPassword);
                  }}
                />
              ) : null}
            </InputAdornment>
          ),
        }}
        inputProps={{ maxLength: maxLength }}
      />
    </WrapperStyled>
  );
};
