import { useState } from 'react';
import { Listbox } from '@headlessui/react';

import {
  FaEthereum,
  FaRegCopy,
  FaSortDown,
  FaSortUp,
  FaSort,
  FaExternalLinkAlt,
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa';

const peopleDropdown = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    email: 'lindsay.walton@example.com',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    email: 'lindsay.walton@example.com',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    email: 'lindsay.walton@example.com',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    email: 'lindsay.walton@example.com',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    email: 'lindsay.walton@example.com',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function Table() {
  const [selectedPerson, setSelectedPerson] = useState(peopleDropdown[0]);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-3">
        <h1 className="text-xl font-semibold text-gray-900">
          Immuna Monitor Portal
        </h1>
        <div className="flex flex-col md:flex-row items-start lg:items-center justify-between">
          <input
            className="bg-white rounded-full w-56 lg:w-72 px-4 py-2 mr-3 mt-2"
            placeholder="Search"
          />
          <div className="flex mt-3">
            <div className="bg-blue-100 rounded-full">
              <div className="flex items-center mx-1">
                <FaEthereum className="bg-blue-100" color="#6C6C6C" />{' '}
                <p>ETH</p>
                <div className="bg-blue-200 rounded-full ml-2 -mr-1 px-4 py-2">
                  0xBAD7...E116
                </div>
              </div>
            </div>
            <div className="bg-blue-200 hover:bg-blue-100 rounded-full p-2.5 ml-2 cursor-pointer">
              <FaRegCopy color="#6C6C6C" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-blue-100">
                  <tr>
                    <th
                      scope="col"
                      className="flex items-center py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Protocol
                      <FaSort />
                    </th>
                    <th
                      scope="col"
                      className=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      <div className="flex items-center">
                        Pool
                        <FaSortUp />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      <div className="flex items-center">
                        Balance
                        <FaSortDown />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      <div className="flex items-center">
                        Risk
                        <FaSort />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person, index) => (
                    <tr
                      key={person.email}
                      className={index % 2 === 0 ? undefined : 'bg-[#F4F9FF]'}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center font-medium text-gray-900">
                          Uniswap{' '}
                          <FaExternalLinkAlt className="ml-2" size={10} />
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="flex items-center text-gray-900">
                          0x75f5...1666{' '}
                          <FaExternalLinkAlt className="ml-2" size={10} />
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        1.104008 WETH / 2,888.28 USDC
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="mt-16 flex items-center mb-4 ">
            Show{' '}
            <Dropdown
              selectedPerson={selectedPerson}
              setSelectedPerson={setSelectedPerson}
            />{' '}
            results of 50 entries
          </div>
          <div className=" flex items-center mb-4 ">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

const Dropdown = ({ selectedPerson, setSelectedPerson }) => (
  <div className="relative mx-2">
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button className="bg-white px-2 flex items-center border-2 rounded-lg">
        {selectedPerson.id} <FaAngleDown className="ml-1" />
      </Listbox.Button>
      <Listbox.Options className="absolute cursor-pointer top-7 bg-white left-0 right-0 mx-auto border-2 rounded-lg text-center">
        {peopleDropdown.map((person) => (
          <Listbox.Option key={person.id} value={person}>
            {person.id}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  </div>
);

const Pagination = () => (
  <div className="flex mx-2 bg-white px-4 py-2 rounded-lg">
    <PageButton>
      <FaAngleLeft />
    </PageButton>
    {[...new Array(5)].map((_, item) => (
      <PageButton>{++item}</PageButton>
    ))}
    <PageButton>
      <FaAngleRight />
    </PageButton>
  </div>
);

const PageButton = ({ children }) => (
  <div className="bg-gray-100 px-3 rounded-md py-2 mx-1 flex items-center">
    {children}
  </div>
);
