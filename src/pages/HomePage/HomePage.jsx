import css from './HomePage.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'Redux/Contacts/Selectors';
import Spinner from 'components/Spinner/Spinner';

const HomePage = () => {
  const loading = useSelector(selectIsLoading);

  return (
    <>
      {loading && <Spinner />}

      <div className={css.wrap}>
        <div className={css.content}>
          <section>
            <h1 className={css.title}>
              Welcome to Our Contact Management Platform
            </h1>
            <p>Store, edit, and filter your contacts with ease.</p>
          </section>

          <section>
            <Link to="/register" className={css.start}>
              Getting Started
            </Link>
            <p>
              To begin,{' '}
              <Link className={css.links} to="/register">
                register
              </Link>{' '}
              or{' '}
              <Link className={css.links} to="/login">
                log in
              </Link>{' '}
              to your account. Once authenticated, you can access the
              'Phonebook' page to manage your contacts.
            </p>
          </section>

          <section>
            <h2>Benefits of Using Our Platform</h2>
            <ul>
              <li>Effortlessly store and organize your contacts.</li>
              <li>Quickly filter and find specific contacts.</li>
              <li>Access your contacts from any device.</li>
            </ul>
          </section>

          <section>
            <p>
              &copy; 2023 Your Contact Management Platform. All rights reserved.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
