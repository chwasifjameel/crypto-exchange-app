import { Listbox } from '@headlessui/react';
import { FaAngleDown } from 'react-icons/fa';

import { IDropdown } from '../../interfaces';

const Dropdown = ({ dropdownData, selected, onChange }: IDropdown) => (
  <div className="relative mx-2">
    <Listbox value={selected} onChange={onChange}>
      <Listbox.Button className="bg-white px-2 flex items-center border-2 rounded-lg">
        {selected} <FaAngleDown className="ml-1" />
      </Listbox.Button>
      <Listbox.Options className="absolute cursor-pointer top-7 bg-white left-0 right-0 mx-auto border-2 rounded-lg text-center">
        {dropdownData.map((item: number) => (
          <Listbox.Option className={`hover:bg-gray-100 ${selected === item && 'bg-gray-200'}`} key={item} value={item}>
            {item}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  </div>
);

export default Dropdown;
