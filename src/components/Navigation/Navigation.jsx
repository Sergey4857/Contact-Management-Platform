import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogged } from 'Redux/Auth/AuthSelectors';
import { useDispatch } from 'react-redux';

import { logOut } from 'Redux/Auth/AuthOperations';

const Navigation = () => {
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();
  return (
    <>
      <Link to="/">Home</Link>
      {isLogged ? (
        <>
          <Link to="phonebook">PhonebookPage</Link>
          <button onClick={() => dispatch(logOut())}>logout</button>
        </>
      ) : (
        <>
          <Link to="login">Login</Link>
          <Link to="register">Register</Link>
        </>
      )}
    </>
  );
};
export default Navigation;
