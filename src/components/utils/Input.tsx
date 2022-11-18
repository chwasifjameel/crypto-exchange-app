import { FaSearch } from 'react-icons/fa';

import { ISearchInput } from '../../interfaces';
const Input = ({ placeholder, search = true }: ISearchInput) =>
  search ? (
    <div className="w-full flex items-center relative">
      <FaSearch className="absolute left-2 text-slate-200" />
      <input
        placeholder={placeholder}
        className="border-slate-200 border-2 rounded-full h-10 pl-9"
      />
    </div>
  ) : (
    <input
      className="border-slate-200 border-2 rounded-full h-10 w-4/6 md:w-10/12 px-5 py-4 my-3 sm:ml-6"
      placeholder={placeholder}
    />
  );

export default Input;
