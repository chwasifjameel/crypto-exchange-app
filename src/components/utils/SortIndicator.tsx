import { FaSortDown, FaSortUp, FaSort } from 'react-icons/fa';

interface ISortDirection {
  sortDirection: 'up' | 'down' | 'none';
}
const SortOptions = ({ sortDirection }: ISortDirection) =>
  sortDirection === 'up' ? (
    <FaSortUp />
  ) : sortDirection === 'down' ? (
    <FaSortDown />
  ) : (
    <FaSort />
  );

export default SortOptions;
