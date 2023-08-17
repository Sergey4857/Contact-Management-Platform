import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage';
import PhonebookPage from 'pages/PhonebookPage';
import Login from 'pages/Login';
import Register from 'pages/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

          <Route path="phonebook" element={<PhonebookPage />} />
        </Route>
      </Routes>
    </>
  );
}
