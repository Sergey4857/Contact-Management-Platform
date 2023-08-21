import { useDispatch } from 'react-redux';
import { login } from 'Redux/Auth/AuthOperations';
import { useState } from 'react';
import css from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(login(personalData));
    reset();
  };
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
