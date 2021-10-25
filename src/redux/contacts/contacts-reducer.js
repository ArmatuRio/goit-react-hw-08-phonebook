import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import contactsActions from './contacts-actions';

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, { payload }) => payload,
  [contactsActions.addContactSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [contactsActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const error = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, { payload }) => {
    alert(payload);
    return payload;
  },
  [contactsActions.addContactError]: (_, { payload }) => {
    alert(payload);
    return payload;
  },
  [contactsActions.deleteContactError]: (_, { payload }) => {
    alert(payload);
    return payload;
  },
  [contactsActions.fetchContactsSuccess]: () => null,
  [contactsActions.addContactSuccess]: () => null,
  [contactsActions.deleteContactSuccess]: () => null,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
  [contactsActions.deleteContactRequest]: () => true,
});

export default combineReducers({ items, error, filter, loading });
