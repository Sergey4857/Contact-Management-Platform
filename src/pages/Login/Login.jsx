import { useDispatch } from 'react-redux';
import { login } from 'Redux/Auth/AuthOperations';
import { useState } from 'react';
import css from './Login.module.css';

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
  const onSubmit = e => {
    e.preventDefault();
    dispatch(login(personalData));
  };
  return (
    <form className={css.formLogin} onSubmit={onSubmit}>
      <label className={css.lblEmail}>
        Enter your email
        <input className={css.inputEmail} onChange={onChange} name="email" />
      </label>

      <label className={css.lblPassword}>
        Enter your password
        <input
          className={css.inputPassword}
          onChange={onChange}
          name="password"
        />
      </label>
      <button className={css.button} type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
