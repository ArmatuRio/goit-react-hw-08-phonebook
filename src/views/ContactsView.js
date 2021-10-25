import '../styles.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import { contactsOperations, contactsSelectors } from '../redux/contacts';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  return (
    <div className="Wrapper">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoadingContacts && (
        <Loader
          type="Circles"
          color="slateblue"
          height={50}
          width={50}
          timeout={3000}
          className="Loader"
        />
      )}
      <ContactList />
    </div>
  );
}
