import { useDispatch, useSelector } from 'react-redux';
import { contactsActions } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';
import ProtoTypes from 'prop-types';
import styles from './Filter.module.css';
export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);
  const onChange = event =>
    dispatch(contactsActions.changeFilter(event.target.value));

  return (
    <label className={styles.filter__label}>
      Find contacts by name
      <input
        className={styles.filter__input}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
}
Filter.propTypes = {
  value: ProtoTypes.string,
};
