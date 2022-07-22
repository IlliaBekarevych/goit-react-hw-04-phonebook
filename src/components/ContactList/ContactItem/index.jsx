import PropTypes from 'prop-types';
import i from './index.module.css';

const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <li id={id} className={i.item}>
      {name}: {number}
      <button type="button" className={i.btn} onClick={() => deleteContact(id)}>
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
