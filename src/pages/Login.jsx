import { useDispatch } from 'react-redux';
import { login } from 'Redux/Auth/AuthOperations';
import { useState } from 'react';

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
    <form onSubmit={onSubmit}>
      <label>
        Enter your email
        <input onChange={onChange} name="email" />
      </label>

      <label>
        Enter your password
        <input onChange={onChange} name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
