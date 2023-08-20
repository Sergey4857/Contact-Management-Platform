import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/Auth/AuthOperations';
import { useSelector } from 'react-redux';
import { selectUserName } from 'Redux/Auth/AuthSelectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const user = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <>
      <Link className={css.Link} to="phonebook">
        PhonebookPage
      </Link>
      <p>User:{user}</p>
      <button className={css.button} onClick={() => dispatch(logOut())}>
        logout
      </button>
    </>
  );
};
export default UserMenu;
