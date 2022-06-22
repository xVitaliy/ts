import React, { useEffect } from 'react';
import { AuthWrapper } from '../../components/AuthWrapper/AuthWrapper';
import RobotIcon from '../../components/Icons/robotIcon.svg';
import { Form, Formik } from 'formik';
import { TextFieldFormik } from '../../components/uiKit/TextFieldFormik/TextFieldFormik';
import { Button } from '@mui/material';
import { CheckboxFormik } from '../../components/uiKit/CheckboxFormik/CheckboxFormik';
import { CaptchaIcon } from '../../components/Icons/CartchaIcon';
import { Overlay } from '../../components/Overlay/Overlay';
import { ButtonGroupStyled, CaptchaWrapperStyled } from './styles';
import { changePasswordSchema } from '../../validation/schemas/changePassword.schema';
import { useLocation, useNavigate } from 'react-router-dom';

type locationType = {
  email: string;
  isICanStay: boolean;
};

type currentUserType = {
  [key: string]: string;
};

export const ChangePasswordPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationState = location.state as locationType;

  useEffect(() => {
    if (!locationState?.isICanStay) {
      navigate('/login');
    }
  }, []);

  return (
    <AuthWrapper
      image={RobotIcon}
      alt={'RobotIcon'}
      title={'Відновлення пароля'}
      formTitle={'Встановимо новий пароль!'}
    >
      <Formik
        initialValues={{
          password: '',
          newPassword: '',
          confirm: false,
        }}
        validationSchema={changePasswordSchema}
        onSubmit={(values) => {
          return new Promise((resolve) => setTimeout(resolve, 100)).then(() => {
            const allUsersJson = localStorage.getItem('registerUsers');
            const allUserData = allUsersJson && JSON.parse(allUsersJson);

            const newUser = {
              emailOrLogin: locationState.email,
              password: values.password,
            };

            const newAryUsersData = allUserData.filter(
              (user: currentUserType) =>
                user.emailOrLogin !== locationState.email,
            );
            newAryUsersData.push(newUser);
            localStorage.setItem(
              'registerUsers',
              JSON.stringify(newAryUsersData),
            );
            navigate('/login');
            alert('Пароль успешно изменен');
          });
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Form style={{ maxWidth: '328px' }}>
              <TextFieldFormik
                name={'password'}
                variant={'filled'}
                type={'password'}
                placeholder={'Пароль'}
              />
              <TextFieldFormik
                name={'newPassword'}
                variant={'filled'}
                type={'password'}
                placeholder={'Пароль'}
              />
              <CaptchaWrapperStyled>
                <CheckboxFormik name={'confirm'} label={'Я точно не робот'} />
                <CaptchaIcon />
              </CaptchaWrapperStyled>
              <ButtonGroupStyled>
                <Button variant={'contained'} type={'submit'}>
                  Встановити пароль
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
