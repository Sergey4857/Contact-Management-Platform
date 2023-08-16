import { nanoid } from 'nanoid';
import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/Operations';
import { selectContacts } from 'Redux/Selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const contacts = useSelector(selectContacts);
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const onSubmit = e => {
    e.preventDefault();
    const newContact = { name, phone, id: nanoid() };

    if (newContact.name.trim() === '') {
      return alert('Enter your name');
    }
    const repeatingPhone = contacts.find(
      value => value.phone === newContact.phone
    );

    const repeatingName = contacts.find(
      value =>
        value.name.toLowerCase().trim() === newContact.name.toLowerCase().trim()
    );

    if (repeatingPhone) {
      return toast.success(
        `Number: ${newContact.phone} is already in contacts`,
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
        name="phone"
        placeholder="Enter your number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={phone}
        required
      />
      <button className={css.contactButton} type="submit">
        Add contact
      </button>
    </form>
  );
}
