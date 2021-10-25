import axios from 'axios';
import contactsActions from './contacts-actions';

const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error.message));
  }
};

const addContact = (name, number) => (dispatch, getState) => {
  const state = getState();
  const contacts = state.contacts.items;
  console.log(contacts);
  const isExistContact = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase(),
  );
  if (isExistContact) {
    alert(`${name} is already in contacts`);
    return;
  }
  const contact = { name, number };
  dispatch(contactsActions.addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactError(error.message)));
};

const deleteContact = contactId => dispatch => {
  dispatch(contactsActions.deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(contactsActions.deleteContactSuccess(contactId)))
    .catch(error =>
      dispatch(contactsActions.deleteContactError(error.message)),
    );
};

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default contactsOperations;
