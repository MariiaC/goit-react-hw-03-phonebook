import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi'; //іконки
import s from './Contacts.module.css';

export const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li key={id} className={s.contactItem}>
    <div>
      <span>
        {name}: {number}
      </span>
      <button className={s.button} onClick={onDeleteContact}>
        <FiTrash2 style={{ color: 'red', paddingRight: 10, fontSize:16 }} />
        Delete
      </button>
    </div>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};