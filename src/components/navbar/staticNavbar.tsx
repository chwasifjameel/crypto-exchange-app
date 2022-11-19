import Logo from '../../assets/logo.svg';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function StaticNavbar() {
  return (
    <header className="bg-white absolute w-full z-20">
      <nav className="mx-auto max-w-7xl border-b-2 border-gray-100 px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <Link to="/">
              <span className="sr-only">Your Company</span>
              <img className="h-10 w-auto" src={Logo} alt="" />
            </Link>
            <div className="ml-10 hidden space-x-8 lg:block"></div>
          </div>
          <div className="flex items-center">
            <div className="rounded-full p-5 bg-[#D1D1D1]" /> <p className="px-2">N/A</p>
            <FaAngleDown color="#3D3D3D" />
          </div>
        </div>
      </nav>
    </header>
  );
}
