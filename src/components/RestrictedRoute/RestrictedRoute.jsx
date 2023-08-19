import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogged } from 'Redux/Auth/AuthSelectors';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogged = useSelector(selectIsLogged);

  return isLogged ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
