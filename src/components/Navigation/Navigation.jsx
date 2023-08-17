import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogged } from 'Redux/Auth/AuthSelectors';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';

const Navigation = () => {
  const isLogged = useSelector(selectIsLogged);

  return (
    <>
      <Link to="/">Home</Link>
      {isLogged ? <UserMenu /> : <AuthNav />}
    </>
  );
};
export default Navigation;
