import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogged } from 'Redux/Auth/AuthSelectors';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import css from './Navigation.module.css';
import { Sound } from 'components/PlaySound/PlaySound';

const Navigation = () => {
  const isLogged = useSelector(selectIsLogged);

  return (
    <>
      {isLogged ? (
        <UserMenu />
      ) : (
        <>
          <Link className={css.home} to="/">
            Home
          </Link>
          <AuthNav />
        </>
      )}
      <Sound />
    </>
  );
};
export default Navigation;
