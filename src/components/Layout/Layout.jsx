import { Outlet } from 'react-router';
import Navigation from 'components/Navigation/Navigation';

import { Suspense } from 'react';
import Spinner from 'components/Spinner/Spinner';
import css from './Layout.module.css';

const Layout = () => (
  <>
    <div className={css.container}>
      <header className={css.header}>
        <Navigation className={css.navigation} />
      </header>
    </div>
    <Suspense fallback={<Spinner />}>
      <Outlet />
    </Suspense>
  </>
);
export default Layout;
