import { FaSortDown, FaSortUp, FaSort } from 'react-icons/fa';

import { ISortDirection } from '../../interfaces';

const SortOptions = ({ sortDirection }: ISortDirection) =>
  sortDirection === 'up' ? (
    <FaSortUp />
  ) : sortDirection === 'down' ? (
    <FaSortDown />
  ) : (
    <FaSort />
  );

export default SortOptions;
