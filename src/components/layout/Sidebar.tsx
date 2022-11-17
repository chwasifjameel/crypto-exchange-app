import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaAngleLeft } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';
import { RiAlertFill } from 'react-icons/ri';
import { BiShieldQuarter } from 'react-icons/bi';
import { BsShieldFillCheck } from 'react-icons/bs';

import Logo from '../../assets/logo.png';

const navigation = [
  { name: 'Dashboard', href: '#', icon: MdSpaceDashboard, current: true },
  {
    name: 'Alerts',
    href: '#',
    icon: RiAlertFill,
    current: false,
  },
  {
    name: 'Defend',
    href: '#',
    icon: BiShieldQuarter,
    current: false,
  },
  {
    name: 'Protect',
    href: '#',
    icon: BsShieldFillCheck,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col  pt-5 pb-4 bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0">
                  <div className="absolute top-2 right-0 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <FaAngleLeft size={20} />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-shrink-0 items-center justify-center px-4">
                  <img className="h-8 w-auto" src={Logo} alt="Your Company" />
                </div>
                <div className="mt-5 h-0 flex-1 overflow-y-auto">
                  <nav className="space-y-1 px-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-blue-600 text-white'
                            : 'text-[#4D4D4D] hover:bg-indigo-600',
                          'group flex items-center w-4/6 pl-5 py-2 text-base font-medium rounded-md'
                        )}>
                        <item.icon
                          className="mr-3 h-6 w-6 "
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-grow flex-col overflow-y-auto  pt-5">
          <div className="flex flex-shrink-0 items-center justify-center px-4">
            <img className="h-8 w-auto" src={Logo} alt="Your Company" />
          </div>
          <div className="mt-5 flex flex-1 flex-col">
            <nav className="flex items-center flex-col flex-1 space-y-1 px-2 pb-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-blue-600 text-white'
                      : 'text-[#4D4D4D] hover:bg-indigo-600',
                    'group w-48 flex items-center pl-5 py-2 text-sm font-medium rounded-md'
                  )}>
                  <item.icon className="mr-3 h-6 w-6 " aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
