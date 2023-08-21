import { useDispatch } from 'react-redux';
import { register } from 'Redux/Auth/AuthOperations';

import { useState } from 'react';
import css from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const personalData = {
    name,
    email,
    password,
  };

  const onChange = e => {
    const input = e.currentTarget;

    switch (input.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
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
    dispatch(register(personalData));
  };

  return (
    <div className={css.registerWrapper}>
      <form className={css.registerForm} onSubmit={onSubmit}>
        <label className={css.lblName}>
          Enter your nickname
          <input
            className={css.InputName}
            onChange={onChange}
            type="text"
            name="name"
            value={name}
            required
          />
        </label>

        <label className={css.lblEmail}>
          Enter your email
          <input className={css.InputEmail} onChange={onChange} name="email" />
        </label>
        <label className={css.lblPassword}>
          Enter your password
          <input
            className={css.InputPassword}
            onChange={onChange}
            name="password"
          />
        </label>

        <button className={css.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
