import React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { AuthWrapper } from '../../components/AuthWrapper/AuthWrapper';
import ResetPasswordImage from '../../components/Icons/ResetPasswordImage.svg';
import { Form, Formik } from 'formik';
import { TextFieldFormik } from '../../components/uiKit/TextFieldFormik/TextFieldFormik';
import { Box, Button, styled, Typography } from '@mui/material';
import { CheckboxFormik } from '../../components/uiKit/CheckboxFormik/CheckboxFormik';
import { CaptchaIcon } from '../../components/Icons/CartchaIcon';

export const ResetPasswordPage = () => {
  return (
    <Layout>
      <AuthWrapper
        image={ResetPasswordImage}
        alt={'ResetPasswordImage'}
        title={'Відновлення пароля'}
        formTitle={'Спробуємо щось пригадати'}
      >
        <Formik
          initialValues={{
            emailOrLogin: '',
            boolCaptcha: false,
          }}
          onSubmit={() => {}}
        >
          <Form style={{ maxWidth: '328px' }}>
            <TextFieldFormik name={'emailOrLogin'} variant={'filled'} />
            <Box mb={'24px'} color={'#565E71'}>
              <Typography variant={'h4'}>
                Ми надішлемо посилання для скидання пароля на вашу електронну
                адресу.
              </Typography>
            </Box>
            <CaptchaWrapperStyled>
              <CheckboxFormik name={'boolCaptcha'} label={'Я точно не робот'} />
              <CaptchaIcon />
            </CaptchaWrapperStyled>
            <ButtonGroupStyled>
              <Button variant={'outlined'}>Назад</Button>
              <Button variant={'contained'} type={'submit'}>
                Відновити пароль
              </Button>
            </ButtonGroupStyled>
          </Form>
        </Formik>
      </AuthWrapper>
    </Layout>
  );
};

const CaptchaWrapperStyled = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 16px',
  marginBottom: '40px',
});

const ButtonGroupStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
