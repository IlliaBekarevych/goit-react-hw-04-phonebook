import PropTypes from 'prop-types';
import s from './index.module.css';

const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <li id={id} className={s.item}>
      {name}: {number}
      <button type="button" className={s.btn} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
ContactItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ContactItem;
