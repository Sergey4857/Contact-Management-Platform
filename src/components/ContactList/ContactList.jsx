import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import getRandomColor from 'helpers/randomColor';
import { useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';

import {
  selectModalIsOpen,
  selectUpdateContactId,
  selectVisibleContacts,
} from 'Redux/Contacts/Selectors';
import { ImSortAlphaAsc, ImSortAlphaDesc } from 'react-icons/im';
import { FaRandom } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

import {
  deleteContact,
  sortContactAscend,
  sortContactDescend,
  openModal,
  sortContactRandom,
} from 'Redux/Contacts/Operations';
import { EditingModal } from 'components/EditingModal/EditingModal';

const ContactList = () => {
  const [sortAscending, setSortAscending] = useState(true);
  const openedModal = useSelector(selectModalIsOpen);
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);

  const modal = useSelector(selectModalIsOpen);

  const selectedContactId = useSelector(selectUpdateContactId);

  const toggleSort = () => {
    if (sortAscending) {
      dispatch(sortContactAscend());
      setSortAscending(false);
    } else {
      dispatch(sortContactDescend());
      setSortAscending(true);
    }
  };

  const backgroundColor = id => {
    if (id === selectedContactId && modal) {
      return {
        backgroundColor: 'red',
      };
    } else return { backgroundColor: 'transparent' };
  };

  return (
    <>
      {!openedModal && (
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
              dispatch(sortContactRandom());
            }}
            type="button"
            className={css.randomButton}
          >
            <FaRandom className={css.randomIcon} />
          </button>
        </>
      )}

      {modal && <EditingModal />}
      <ul className={css.contactList}>
        {visibleContacts.map(({ id, name, number }) => (
          <li style={backgroundColor(id)} className={css.contactItem} key={id}>
            <div
              style={{ backgroundColor: getRandomColor() }}
              className={css.contactFirstLetter}
            >
              {name.slice(0, 1).toUpperCase()}
            </div>
            {name} : {number}
            <div className={css.contactWrapp}>
              <div className={css.contactButtons}>
                <button
                  className={css.contactMdlBtn}
                  onClick={() => {
                    dispatch(openModal({ id, name, number }));
                  }}
                >
                  <FaUserEdit />
                </button>
                <a className={css.contactLink} href={`tel:${number}`}>
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
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactList;
