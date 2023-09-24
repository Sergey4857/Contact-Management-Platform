import { useDispatch, useSelector } from 'react-redux';
import { clearLoginError, login } from 'Redux/Auth/AuthOperations';
import { useEffect, useState } from 'react';
import css from './Login.module.css';
import { Link } from 'react-router-dom';
import { selectError } from 'Redux/Auth/AuthSelectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errorLogin = useSelector(selectError);

  const personalData = {
    email,
    password,
  };

  const onChange = e => {
    const input = e.currentTarget;

    switch (input.name) {
      case 'email':
        setEmail(e.currentTarget.value);
        break;
      case 'password':
        setPassword(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    dispatch(login(personalData));

    e.currentTarget.reset();
  };

  useEffect(() => {
    if (errorLogin) {
      toast.error(errorLogin, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      dispatch(clearLoginError());
    }
  }, [dispatch, errorLogin]);

  return (
    <div className={css.wrapper}>
      <form className={css.formLogin} onSubmit={onSubmit}>
        <label className={css.lblEmail}>
          Enter your email
          <input
            className={css.inputEmail}
            type="text"
            name="email"
            onChange={onChange}
            required
          />
        </label>

        <label className={css.lblPassword}>
          Enter your password
          <input
            className={css.inputPassword}
            type="password"
            onChange={onChange}
            name="password"
          />
        </label>
        <p className={css.account}>
          Don't have an account yet?{' '}
          <Link className={css.register} to="/register">
            Register
          </Link>
        </p>
        <button className={css.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
