import React from 'react';
import { AuthWrapper } from '../../components/AuthWrapper/AuthWrapper';
import EmailIcon from '../../components/Icons/emailIcon.svg';
import { OkIcon } from '../../components/Icons/okIcon';
import ErrIcon from '../../components/Icons/errIcon.svg';
import { Box, Typography, Button } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ErrorIcon } from '../../components/Icons/ErrorIcon';
import { IconWrapper } from './styles';

export const ResetPasswordStepTwoPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  type locationType = {
    error: boolean;
    email: string;
  };

  const state = location.state as locationType;
  const { email, error } = state;

  const text = {
    err: 'На жаль, ми не знайшли таких даних для входу в нашій базі. Перевірте вірність вказаних даних та повторіть спробу. Ми обов’язково пошукаємо ще!',
    notErr:
      'Ми знайшли такі дані для входу в нашій базі і надіслали посилання для скидання пароля на вашу електронну адресу.',
  }[error ? 'err' : 'notErr'];

  return (
    <AuthWrapper
      image={!error ? EmailIcon : ErrIcon}
      alt={'EmailIcon'}
      title={'Відновлення пароля'}
      formTitle={!error ? 'Хутчіш перевіряти пошту!' : 'Щось пішло не так!'}
    >
      <Box style={{ maxWidth: '328px' }}>
        <IconWrapper>{!error ? <OkIcon /> : <ErrorIcon />}</IconWrapper>
        {error && <Typography mb={3}>{email}</Typography>}
        <Typography variant='h4' mb={5}>
          {text}
        </Typography>
        {error && (
          <Button onClick={goBack} variant={'outlined'}>
            Назад
          </Button>
        )}
        <Button
          component={Link}
          to={'/login'}
          variant={'contained'}
          sx={{ float: 'right' }}
          state={{
            email: !error ? email : null,
          }}
        >
          На головну
        </Button>
      </Box>
    </AuthWrapper>
  );
};
