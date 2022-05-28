import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { Form, Formik } from 'formik';
import { TextFieldFormik } from '../../components/uiKit/TextFieldFormik/TextFieldFormik';
import { SocialBlock } from '../../components/SocialBlock/SocialBlock';
import { Overlay } from '../../components/Overlay/Overlay';
import { AuthWrapper } from '../../components/AuthWrapper/AuthWrapper';
import LoginPageImage from '../../components/Icons/LoginPageImage.svg';

export const LoginPage: React.FC = () => {
  return (
    <Layout>
      <AuthWrapper
        title={'Вхід'}
        alt={'LoginPageImage'}
        image={LoginPageImage}
        formTitle={'Привіт! Знову.'}
      >
        <Formik
          initialValues={{
            emailOrLogin: '',
            password: '',
          }}
          onSubmit={(values) => {
            return new Promise((resolve) => setTimeout(resolve, 2000)).then(
              () => console.log(values),
            );
          }}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <TextFieldFormik name={'emailOrLogin'} variant={'filled'} />
                <TextFieldFormik
                  name={'password'}
                  variant={'filled'}
                  type={'password'}
                />
                <LinkWrapStyled>
                  <Typography variant={'h3'}>
                    Немає аккаунта? <span>Зареєструватись</span>
                  </Typography>
                </LinkWrapStyled>
                <SocialBlock />
                <ButtonGroupStyled>
                  <Button variant={'outlined'}>Забули пароль?</Button>
                  <Button
                    disabled={isSubmitting}
                    type={'submit'}
                    variant={'contained'}
                  >
                    Вхід
                  </Button>
                </ButtonGroupStyled>
                {isSubmitting && <Overlay />}
              </Form>
            );
          }}
        </Formik>
      </AuthWrapper>
    </Layout>
  );
};

const LinkWrapStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'end',
  gap: '8px',
  marginBottom: '40px',
  span: {
    color: '#2E5DA8',
    cursor: 'pointer',
  },
});
const ButtonGroupStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
