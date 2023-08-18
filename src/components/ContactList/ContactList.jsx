import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import getRandomColor from 'helpers/randomColor';
import { useState } from 'react';
import { selectVisibleContacts } from 'Redux/Contacts/Selectors';
import { ImSortAlphaAsc, ImSortAlphaDesc } from 'react-icons/im';
import { FaRandom } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import {
  deleteContact,
  sortContactAscend,
  sortContactDescend,
  fetchContacts,
} from 'Redux/Contacts/Operations';

const ContactList = () => {
  const [sortAscending, setSortAscending] = useState(true);
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);

  const toggleSort = () => {
    if (sortAscending) {
      dispatch(sortContactAscend());
      setSortAscending(false);
    } else {
      dispatch(sortContactDescend());
      setSortAscending(true);
    }
  };

  return (
    <>
      <button onClick={toggleSort} type="button" className={css.sortButton}>
        {sortAscending ? (
          <ImSortAlphaAsc className={css.sortIcon} />
        ) : (
          <ImSortAlphaDesc className={css.sortIcon} />
        )}
      </button>

      <button
        onClick={() => {
          dispatch(fetchContacts());
        }}
        type="button"
        className={css.randomButton}
      >
        <FaRandom className={css.randomIcon} />
      </button>
      <ul className={css.contactList}>
        {visibleContacts.map(({ id, name, phone }) => (
          <li className={css.contactItem} key={id}>
            <div
              style={{ backgroundColor: getRandomColor() }}
              className={css.contactFirstLetter}
            >
              {name.slice(0, 1).toUpperCase()}
            </div>
            {name} : {phone}
            <div className={css.contactWrapp}>
              <a className={css.contactLink} href={`tel:${phone}`}>
                <FiPhoneCall className={css.phoneIcon} />
              </a>
              <button
                className={css.contactLButton}
                type="button"
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactList;
