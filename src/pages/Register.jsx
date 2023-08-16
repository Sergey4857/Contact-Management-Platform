import { useDispatch } from 'react-redux';
import { register } from 'Redux/Auth/AuthOperations';
import { useState } from 'react';
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
    console.log(input.name);

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
    <>
      <h1>Registration</h1>
      <form onSubmit={onSubmit}>
        <label>
          Enter your nickname
          <input onChange={onChange} name="name" />
        </label>

        <label>
          Enter your email
          <input onChange={onChange} name="email" />
        </label>
        <label>
          Enter your password
          <input onChange={onChange} name="password" />
        </label>

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
