import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogged } from 'Redux/Auth/AuthSelectors';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLogged = useSelector(selectIsLogged);

  return (
    <>
      <Link className={css.home} to="/">
        Home
      </Link>
      {isLogged ? <UserMenu /> : <AuthNav />}
    </>
  );
};
export default Navigation;
