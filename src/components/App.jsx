import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refresh } from 'Redux/Auth/AuthOperations';
import { selectRefreshed } from 'Redux/Auth/AuthSelectors';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const PhonebookPage = lazy(() => import('pages/PhonebookPage/PhonebookPage'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshed = useSelector(selectRefreshed);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    !isRefreshed && (
      <>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route
              path="register"
              element={
                <RestrictedRoute
                  component={Register}
                  redirectTo="/phonebook"
                ></RestrictedRoute>
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  component={Login}
                  redirectTo="/phonebook"
                ></RestrictedRoute>
              }
            />

            <Route
              path="phonebook"
              element={
                <PrivateRoute
                  component={PhonebookPage}
                  redirectTo="/login"
                ></PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </>
    )
  );
}
