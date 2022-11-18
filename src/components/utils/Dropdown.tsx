import { Listbox } from '@headlessui/react';
import { FaAngleDown } from 'react-icons/fa';

const Dropdown = ({ dropdownData, selected, onChange }) => (
  <div className="relative mx-2">
    <Listbox value={selected} onChange={onChange}>
      <Listbox.Button className="bg-white px-2 flex items-center border-2 rounded-lg">
        {selected.id} <FaAngleDown className="ml-1" />
      </Listbox.Button>
      <Listbox.Options className="absolute cursor-pointer top-7 bg-white left-0 right-0 mx-auto border-2 rounded-lg text-center">
        {dropdownData.map((item) => (
          <Listbox.Option key={item.id} value={item}>
            {item.id}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  </div>
);

export default Dropdown;
