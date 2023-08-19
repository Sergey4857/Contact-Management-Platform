import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogged, selectRefreshed } from 'Redux/Auth/AuthSelectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isRefreshed = useSelector(selectRefreshed);
  const isLogged = useSelector(selectIsLogged);
  const redirect = !isLogged && !isRefreshed;
  return redirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
