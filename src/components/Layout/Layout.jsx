import { Outlet } from 'react-router';
import Navigation from 'components/Navigation/Navigation';
const Layout = () => (
  <>
    <header>
      <Navigation />
    </header>
    <Outlet />
  </>
);
export default Layout;
