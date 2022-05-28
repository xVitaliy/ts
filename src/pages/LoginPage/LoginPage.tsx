import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';
import { Layout } from '../../components/Layout/Layout';
import LoginPageImage from '../../components/Icons/LoginPageImage.svg';
import { Form, Formik } from 'formik';
import { TextFieldFormik } from '../../components/uiKit/TextFieldFormik/TextFieldFormik';
import { SocialBlock } from '../../components/SocialBlock/SocialBlock';
import { Overlay } from '../../components/Overlay/Overlay';

export const LoginPage: React.FC = () => {
  return (
    <Layout>
      <Container maxWidth={'xl'}>
        <TitleStyled>
          <Typography variant={'h1'}>Вхід</Typography>
        </TitleStyled>
        <CardWrapperStyled>
          <CardStyled>
            <CardMedia
              component='img'
              image={LoginPageImage}
              alt='LoginPageImage'
              sx={{ width: '336px' }}
            />
            <CardContentStyled>
              <Box sx={{ color: '#44474F', marginBottom: '40px' }}>
                <Typography variant={'h2'}>Привіт! Знову.</Typography>
              </Box>
              <Formik
                initialValues={{
                  emailOrLogin: '',
                  password: '',
                }}
                onSubmit={(values) => {
                  return new Promise((resolve) =>
                    setTimeout(resolve, 2000),
                  ).then(() => console.log(values));
                }}
              >
                {({ isSubmitting }) => {
                  return (
                    <Form>
                      <TextFieldFormik
                        name={'emailOrLogin'}
                        variant={'filled'}
                      />
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
            </CardContentStyled>
          </CardStyled>
        </CardWrapperStyled>
      </Container>
    </Layout>
  );
};

const TitleStyled = styled(Box)({
  margin: '64px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#001A42',
});

const CardWrapperStyled = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const CardStyled = styled(Card)({
  display: 'flex',
  height: '100%',
  maxHeight: '556px',
  borderRadius: '24px',
  filter: 'drop-shadow(0px 4px 40px rgba(9, 173, 234, 0.05))',
});

const CardContentStyled = styled(CardContent)({
  padding: '40px',
});

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
