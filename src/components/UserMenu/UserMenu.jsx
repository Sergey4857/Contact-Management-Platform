import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/Auth/AuthOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Link to="phonebook">PhonebookPage</Link>
      <button onClick={() => dispatch(logOut())}>logout</button>
    </>
  );
};
export default UserMenu;
