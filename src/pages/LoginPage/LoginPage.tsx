import { Button, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { Form, Formik } from 'formik';
import { TextFieldFormik } from '../../components/uiKit/TextFieldFormik/TextFieldFormik';
import { SocialBlock } from '../../components/SocialBlock/SocialBlock';
import { Overlay } from '../../components/Overlay/Overlay';
import { AuthWrapper } from '../../components/AuthWrapper/AuthWrapper';
import LoginPageImage from '../../components/Icons/LoginPageImage.svg';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ButtonGroupStyled, LinkWrapStyled } from './styles';
import IconButton from '@mui/material/IconButton';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

type locationType = {
  email?: string;
};

export const LoginPage: React.FC = () => {
  const location = useLocation();
  const locationState = location.state as locationType;
  const email = locationState?.email;
  const navigate = useNavigate();

  return (
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
            () => {
              const allUsersJson = localStorage.getItem('registerUsers');
              if (!allUsersJson) {
                alert(' Вы не правильно ввели пароль');
              } else {
                const usersData = JSON.parse(allUsersJson);
                const res = usersData.some(
                  (item: any) =>
                    item.emailOrLogin === values.emailOrLogin &&
                    item.password === values.password,
                );
                if (!res) {
                  alert('Вы ввели неверно имеил или пароль');
                } else {
                  localStorage.setItem('myToken', '999');
                  navigate('/');
                }
              }
            },
          );
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <TextFieldFormik
                name={'emailOrLogin'}
                variant={'filled'}
                placeholder={'Email або Логін'}
              />
              <TextFieldFormik
                name={'password'}
                variant={'filled'}
                type={'password'}
                placeholder={'Пароль'}
              />
              <LinkWrapStyled>
                <Typography variant={'h3'}>
                  Немає аккаунта?{' '}
                  <NavLink to={'/registration'}>Зареєструватись</NavLink>
                </Typography>
              </LinkWrapStyled>
              <SocialBlock />
              <ButtonGroupStyled>
                <Button
                  component={NavLink}
                  to={'/reset-password'}
                  variant={'outlined'}
                >
                  Забули пароль?
                </Button>
                <Button
                  disabled={isSubmitting}
                  type={'submit'}
                  variant={'contained'}
                >
                  Вхід
                </Button>
              </ButtonGroupStyled>
              {isSubmitting && <Overlay />}
              {email && (
                <Tooltip
                  title={'/change-password'}
                  sx={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                  }}
                >
                  <IconButton
                    component={Link}
                    to={'/change-password'}
                    state={{ isICanStay: true, email: email }}
                  >
                    <ArrowCircleUpIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Form>
          );
        }}
      </Formik>
    </AuthWrapper>
  );
};
