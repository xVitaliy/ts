import { Checkbox, FormControlLabel } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import { WrapperStyled } from './styles';
import React from 'react';

type CheckboxFormikType = {
  label?: string;
  name: string;
  sx?: object;
};

export const CheckboxFormik: React.FC<CheckboxFormikType> = ({
  label,
  name,
  sx,
}) => {
  const [field, meta] = useField(name);
  const { handleChange } = useFormikContext();
  const hasError = Boolean(meta.error && meta.touched);
  return (
    <WrapperStyled sx={sx} hasError={hasError}>
      <FormControlLabel
        sx={{
          '& .MuiCheckbox-root': { marginRight: '7px' },
          '& .MuiTypography-root': {
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#1B1B1D',
          },
        }}
        control={
          <Checkbox
            id={name}
            name={name}
            value={field.value}
            onChange={handleChange}
          />
        }
        label={label || ''}
      />
    </WrapperStyled>
  );
};
