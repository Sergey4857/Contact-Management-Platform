import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { filterContact } from '../../Redux/FilterSlice';
import { selectFilter } from '../../Redux/Selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const onFilterChange = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <input
      className={css.filterInput}
      type="text"
      name="filter"
      onChange={onFilterChange}
      value={filter}
    />
  );
};

export default Filter;
