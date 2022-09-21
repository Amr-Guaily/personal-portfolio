import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';

const Navbar = ({ setShowSidebar }) => {
  return (
    <div className=" bg-white shadow-lg py-1 px-4 flex items-center sticky top-0 lg:hidden z-20 dark:bg-main-dark">
      {/* Menu Icon */}
      <div
        className=" lg:hidden cursor-pointer dark:text-slate-400"
        onClick={() => setShowSidebar(true)}
      >
        <FiMenu size={22} />
      </div>

      {/* Logo */}
      <Link href="/">
        <div className="flex justify-center items-center gap-1 flex-1 lg:hidden cursor-pointer">
          <span className="text-gray-500 text-2xl mb-2">&lt;</span>
          <h1 className=" text-slate-900 font-semibold text-[25px] font-cursive dark:text-slate-400">
            Amr Guaily{' '}
          </h1>
          <span className="text-gray-500 text-xl mb-2">/&gt;</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
