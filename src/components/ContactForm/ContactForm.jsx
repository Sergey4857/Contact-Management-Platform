import { nanoid } from 'nanoid';
import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/Contacts/Operations';
import { selectContacts } from 'Redux/Contacts/Selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const contacts = useSelector(selectContacts);
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

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
    const newContact = { name, number, id: nanoid() };

    if (newContact.name.trim() === '') {
      return alert('Enter your name');
    }
    const repeatingNumber = contacts.find(
      value => value.number === newContact.number
    );

    const repeatingName = contacts.find(
      value =>
        value.name.toLowerCase().trim() === newContact.name.toLowerCase().trim()
    );

    if (repeatingNumber) {
      return toast.success(
        `Number: ${newContact.number} is already in contacts`,
        {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        }
      );
    }
    if (repeatingName) {
      return toast.success(`${newContact.name} is already in contacts`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
    dispatch(addContact(newContact));
    reset();
  };

  return (
    <form onSubmit={onSubmit} className={css.contactForm}>
      <input
        className={css.contactInput}
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Enter contact name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        required
      />
      <input
        className={css.contactInput}
        onChange={handleChange}
        type="tel"
        name="number"
        placeholder="Enter your number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        required
      />
      <button className={css.contactButton} type="submit">
        Add contact
      </button>
    </form>
  );
}
