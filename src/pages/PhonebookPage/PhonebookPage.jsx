import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsLoading,
  selectVisibleContacts,
} from '../../Redux/Contacts/Selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from '../PhonebookPage/PhoneBook.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { fetchContacts } from '../../Redux/Contacts/Operations';
import { useEffect } from 'react';

import Spinner from '../../components/Spinner/Spinner';

export default function PhonebookPage() {
  const visibleContacts = useSelector(selectVisibleContacts);
  const loading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <div className={css.content}>
        <div className={css.wrap}>
          {loading && <Spinner />}
          <div className={css.container}>
            <ContactForm />
            <h2 className={css.ContactTitle}>Contacts</h2>
            <Filter />

            {visibleContacts.length > 0 ? (
              <ContactList />
            ) : (
              <p>You don't have contacts, add them above👆 </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
