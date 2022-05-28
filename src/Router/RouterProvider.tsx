import React, { ReactNode } from 'react';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { HomePage } from '../pages/HomePage/HomePage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { ResetPasswordPage } from '../pages/ResetPasswordPage/ResetPasswordPage';

export const RouterProvider = () => {
  return (
    <BrowserRouter>
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
          path={'login'}
          element={
            <RequireAuth>
              <LoginPage />
            </RequireAuth>
          }
        />
        <Route
          path={'reset-password'}
          element={
            <RequireAuth>
              <ResetPasswordPage />
            </RequireAuth>
          }
        />
      </Route>
    </BrowserRouter>
  );
};

type RequireAuthProps = {
  children: JSX.Element;
};

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  // const isAuth = false;
  const isAuth = true;
  if (!isAuth) {
    return <Navigate to='/login' />;
  }
  return children;
};
