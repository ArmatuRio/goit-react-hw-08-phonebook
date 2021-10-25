import ProtoTypes from 'prop-types';
import styles from './ContactItem.module.css';
const ContactItem = ({ name, number, onDelete }) => {
  return (
    <>
      <span className={styles.contact}>
        {name}: {number}
      </span>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  name: ProtoTypes.string.isRequired,
  number: ProtoTypes.string.isRequired,
  onDelete: ProtoTypes.func.isRequired,
};
export default ContactItem;
