// import { nanoid } from 'nanoid';
import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  // addContact,
  closeModal,
  updateContact,
} from 'Redux/Contacts/Operations';
import {
  selectdataUpdatedContact,
  selectUpdateContactId,
} from 'Redux/Contacts/Selectors';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function EditingModal() {
  const dispatch = useDispatch();

  const id = useSelector(selectUpdateContactId);

  const data = useSelector(selectdataUpdatedContact);

  const [name, setName] = useState(data.name);
  const [number, setNumber] = useState(data.number);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onSubmit = e => {
    e.preventDefault();
    const newContact = { name, number, id };

    console.log(newContact);
    if (newContact.name.trim() === '') {
      return alert('Enter your name');
    }

    dispatch(updateContact(newContact));
    reset();
  };

  return (
    <form onSubmit={onSubmit} className={css.modalForm}>
      <h2>Edit your contact:</h2>
      <input
        className={css.modalInput}
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Enter changed name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        required
      />
      <input
        className={css.modalInput}
        onChange={handleChange}
        type="tel"
        name="number"
        placeholder="Enter changed phone"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        required
      />
      <div className={css.buttons}>
        <button className={css.modalButtonEdit} type="submit">
          Edit contact
        </button>
        <button
          onClick={() => {
            dispatch(closeModal());
          }}
          className={css.modalButtonClose}
          type="button"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
