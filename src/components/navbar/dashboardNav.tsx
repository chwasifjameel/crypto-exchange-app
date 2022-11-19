import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FaBell, FaBars, FaAngleDown } from 'react-icons/fa';

import { Input } from '../utils';
import { INavbar } from '../../interfaces';
import { Link } from 'react-router-dom';

const userNavigation = [
  {
    name: 'Your Profile',
    href: '#',
  },
  {
    name: 'Settings',
    href: '#',
  },
  {
    name: 'Sign out',
    href: '/login',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ setSidebarOpen }: INavbar) {
  return (
    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
      <button
        type="button"
        className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        onClick={() => setSidebarOpen(true)}>
        <span className="sr-only">Open sidebar</span>
        <FaBars className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex flex-1 justify-between px-1 md:px-4">
        <div className="flex justify-start md:justify-center items-center">
          <p className="md:font-medium hidden sm:block mr-4">Dashboard</p>
          <Input placeholder="Search..." search />
        </div>
        <div className="ml-1 flex items-center md:ml-6">
          <button
            type="button"
            className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span className="sr-only">View notifications</span>
            <FaBell className="h-6 w-6 mr-2" aria-hidden="true" />
          </button>

          {/* Profile dropdown */}
          <Menu>
            <div>
              <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <p className="mx-2 hidden sm:block">Betty Copper</p>
                <FaAngleDown className="text-gray-400 hidden sm:block" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="absolute right-0 top-[50px] z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {userNavigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <Link to={item.href} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                        {item.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}
