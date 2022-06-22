import React from 'react';
import { AuthWrapper } from '../../components/AuthWrapper/AuthWrapper';
import ResetPasswordImage from '../../components/Icons/ResetPasswordImage.svg';
import { Form, Formik } from 'formik';
import { TextFieldFormik } from '../../components/uiKit/TextFieldFormik/TextFieldFormik';
import { Box, Button, Typography } from '@mui/material';
import { CheckboxFormik } from '../../components/uiKit/CheckboxFormik/CheckboxFormik';
import { CaptchaIcon } from '../../components/Icons/CartchaIcon';
import { useNavigate } from 'react-router-dom';
import { namedSchema } from '../../validation/schemas/named.schema';
import { Overlay } from '../../components/Overlay/Overlay';
import { ButtonGroupStyled, CaptchaWrapperStyled } from './styles';

type userDataType = {
  [key: string]: string;
};

export const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const goBack = (): void => {
    navigate(-1);
  };

  return (
    <AuthWrapper
      image={ResetPasswordImage}
      alt={'ResetPasswordImage'}
      title={'Відновлення пароля'}
      formTitle={'Спробуємо щось пригадати'}
    >
      <Formik
        initialValues={{
          emailOrLogin: '',
          confirm: false,
        }}
        validationSchema={namedSchema}
        onSubmit={(values) => {
          return new Promise((resolve) => setTimeout(resolve, 2000)).then(
            () => {
              const usersJson = localStorage.getItem('registerUsers');
              if (!usersJson) {
                navigate('reset-password-stepTwo', {
                  state: { email: values.emailOrLogin, error: true },
                });
                return;
              } else {
                const usersData = JSON.parse(usersJson);
                const user = usersData.find(
                  (userData: userDataType) =>
                    userData?.emailOrLogin === values.emailOrLogin,
                );
                navigate('/reset-password-stepTwo', {
                  state: {
                    email: values.emailOrLogin,
                    error: !user,
                  },
                });
              }
            },
          );
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Form style={{ maxWidth: '328px' }}>
              <TextFieldFormik name={'emailOrLogin'} variant={'filled'} />
              <Box mb={'24px'} color={'#565E71'}>
                <Typography variant={'h4'}>
                  Ми надішлемо посилання для скидання пароля на вашу електронну
                  адресу.
                </Typography>
              </Box>
              <CaptchaWrapperStyled>
                <CheckboxFormik name={'confirm'} label={'Я точно не робот'} />
                <CaptchaIcon />
              </CaptchaWrapperStyled>
              <ButtonGroupStyled>
                <Button variant={'outlined'} onClick={goBack}>
                  Назад
                </Button>
                <Button variant={'contained'} type={'submit'}>
                  Відновити пароль
                </Button>
              </ButtonGroupStyled>
              {isSubmitting && <Overlay />}
            </Form>
          );
        }}
      </Formik>
    </AuthWrapper>
  );
};
