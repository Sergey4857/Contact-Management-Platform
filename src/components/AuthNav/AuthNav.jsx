import { Link } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <>
      <Link className={css.login} to="login">
        Login
      </Link>
      <Link className={css.register} to="register">
        Register
      </Link>
    </>
  );
};
export default AuthNav;
