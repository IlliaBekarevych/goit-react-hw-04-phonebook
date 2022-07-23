import PropTypes from 'prop-types';
import s from './index.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Find contact by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
