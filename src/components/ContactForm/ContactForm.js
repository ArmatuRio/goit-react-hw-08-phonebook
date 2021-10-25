import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ContactForm.module.css';
import { contactsOperations } from '../../redux/contacts';

export default function ContactForm() {
  const dispatch = useDispatch();

  const [contact, setContact] = useState({ name: '', number: '' });

  const handleChange = event => {
    const typeOfInput = event.currentTarget.name;
    const input = event.currentTarget.value;
    setContact(prevState => ({ ...prevState, [typeOfInput]: input }));
  };

  const onSubmit = (name, number) => {
    dispatch(contactsOperations.addContact(name, number));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(contact.name, contact.number);
    setContact({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={styles.form__label}>
        Name
        <input
          className={styles.form__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={contact.name}
          onChange={handleChange}
        />
      </label>
      <label className={styles.form__label}>
        Number
        <input
          className={styles.form__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={contact.number}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}
