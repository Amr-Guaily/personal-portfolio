import Link from 'next/link';

const Navbar = ({ setShowSidebar }) => {
  return (
    <div className=" bg-white shadow-lg py-1 px-4 flex items-center sticky top-0 lg:hidden z-20">
      {/* Menu Icon */}
      <div
        className=" lg:hidden cursor-pointer"
        onClick={() => setShowSidebar(true)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
            fill="currentColor"
          />
          <path
            d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
            fill="currentColor"
          />
          <path
            d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Logo */}
      <Link href="/">
        <div className="flex justify-center items-center gap-1 flex-1 lg:hidden cursor-pointer">
          <span className="text-gray-500 text-2xl mb-2">&lt;</span>
          <h1 className=" text-slate-900 text-[25px] font-cursive">
            Amr Guaily{' '}
          </h1>
          <span className="text-gray-500 text-xl mb-2">/&gt;</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
