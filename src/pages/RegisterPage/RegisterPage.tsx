import React from 'react';
import LoginPageImage from '../../components/Icons/LoginPageImage.svg';
import { Form, Formik } from 'formik';
import { TextFieldFormik } from '../../components/uiKit/TextFieldFormik/TextFieldFormik';
import { Button, Typography } from '@mui/material';
import { Overlay } from '../../components/Overlay/Overlay';
import { AuthWrapper } from '../../components/AuthWrapper/AuthWrapper';
import { NavLink } from 'react-router-dom';
import { registrationSchema } from '../../validation/schemas';
import { ButtonGroupStyled, LinkWrapStyled } from './styles';

type Employee = {
  [key: string]: string;
};

export const RegisterPage = () => {
  const toJson = (item: object[]) => JSON.stringify(item);

  return (
    <AuthWrapper
      title={'Зареєструватись'}
      alt={'LoginPageImage'}
      image={LoginPageImage}
      formTitle={'Привіт!'}
    >
      <Formik
        validationSchema={registrationSchema}
        initialValues={{
          emailOrLogin: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={async (values) => {
          const obj = {
            emailOrLogin: values.emailOrLogin,
            password: values.password,
          };

          await new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
            const newData: Array<object> = [];
            const registerUsersJson = localStorage.getItem('registerUsers');

            const registerUsersData =
              registerUsersJson && JSON.parse(registerUsersJson);

            if (registerUsersData !== null) {
              if (
                registerUsersData.some(
                  (i: Employee) => i.emailOrLogin === values.emailOrLogin,
                )
              ) {
                console.log(1);
                alert('пользователь с таким именем уже существует');
              } else {
                newData.push(...registerUsersData, obj);
                localStorage.setItem('registerUsers', toJson(newData));
                alert('Поздравляем, Вы успешно зарегитрировались');
              }
            } else {
              newData.push(obj);
              localStorage.setItem('registerUsers', toJson(newData));
              alert('Поздравляем, Вы успешно зарегитрировались');
            }
          });
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
                placeholder={'Підтвердіть пароль'}
              />
              <TextFieldFormik
                name={'confirmPassword'}
                variant={'filled'}
                type={'password'}
                placeholder={'Пароль'}
              />
              <LinkWrapStyled>
                <Typography variant={'h3'}>
                  <NavLink to={'/reset-password'}>Забули пароль?</NavLink>
                </Typography>
              </LinkWrapStyled>
              <ButtonGroupStyled>
                <Button component={NavLink} to={'/login'} variant={'outlined'}>
                  Увійти
                </Button>
                <Button
                  disabled={isSubmitting}
                  type={'submit'}
                  variant={'contained'}
                >
                  Зареєструватись
                </Button>
              </ButtonGroupStyled>
              {isSubmitting && <Overlay regTrue regFalse />}
            </Form>
          );
        }}
      </Formik>
    </AuthWrapper>
  );
};
