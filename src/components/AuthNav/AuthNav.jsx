import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <Link to="login">Login</Link>
      <Link to="register">Register</Link>
    </>
  );
};
export default AuthNav;
