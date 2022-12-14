import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { HomePage } from '../pages/HomePage/HomePage';
import { ResetPasswordPage } from '../pages/ResetPasswordPage/ResetPasswordPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { ResetPasswordStepTwoPage } from '../pages/ResetPasswordOkPage/ResetPasswordStepTwoPage';
import { ChangePasswordPage } from '../pages/ChangePasswordPage/ChangePasswordPage';
import { TestingGqlPage } from '../pages/TestingGqlPage/TestingGqlPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';

type RequireAuthProps = {
  children: JSX.Element;
};

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route
            index
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route
            path={'gql'}
            element={
              <RequireAuth>
                <TestingGqlPage />
              </RequireAuth>
            }
          />
          <Route path={'reset-password'} element={<ResetPasswordPage />} />
          <Route
            path={'reset-password-stepTwo'}
            element={<ResetPasswordStepTwoPage />}
          />
          <Route path={'change-password'} element={<ChangePasswordPage />} />
          <Route path={'registration'} element={<RegisterPage />} />
          <Route path={'login'} element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const token = localStorage.getItem('myToken');
  const location = useLocation();
  const isAuth = !!token;

  if (isAuth && location.pathname === '/login') {
    return <Navigate to='/' />;
  }
  if (!isAuth && location.pathname !== '/login') {
    return <Navigate to='/login' />;
  }
  return children;
};
