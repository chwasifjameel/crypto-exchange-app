import { FaEthereum } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { StaticNavbar } from '../components';

import FeaturedImage from '../assets/login-featured.png';
import Circle1 from '../assets/login-circle-1.png';
import Circle2 from '../assets/login-circle-2.png';

function Login() {
  return (
    <div className="h-screen">
      <StaticNavbar />
      <section className="flex h-full">
        <img
          className="w-1/2 h-100 hidden md:block"
          src={FeaturedImage}
          width="auto"
          height="auto"
          alt="featured"
        />
        <div className="bg-[#F7FBFF] w-full md:w-1/2 flex justify-center items-center relative">
          <div className="overflow-hidden rounded-lg shadow-lg bg-white mx-3 md:mx-0 w-full sm:w-5/6 pb-32 pt-16 flex flex-col items-center z-10">
            <h1 className="text-3xl">Welcome to Immuna!</h1>
            <p className="text-xl">Connect your wallet</p>
            <div className="pt-12 w-5/6">
              <p className="flex items-center">
                <FaEthereum />
                Ethereum
              </p>
              <input
                className="bg-gray-100 rounded-full w-full px-5 py-4 my-3"
                placeholder="Enter wallet address"
              />
              <Link to={'/dashboard'}>
                <button
                  className="bg-[#1D7DEA] hover:bg-blue-600 text-white rounded-full w-full px-5 py-4 mt-3"
                  title="Connect to Wallet">
                  Connect to Wallet
                </button>
              </Link>
            </div>
          </div>
          <img
            className="absolute right-0 top-[100px] z-0"
            src={Circle1}
            width="auto"
            height="auto"
            alt="Circle 1"
          />
          <img
            className="absolute left-0 bottom-[150px] z-0"
            src={Circle2}
            width="auto"
            height="auto"
            alt="Circle 2"
          />
        </div>
      </section>
    </div>
  );
}

export default Login;
