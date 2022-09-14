import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiOutlineCloseCircle,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsSunFill, BsDot, BsMoonFill } from 'react-icons/bs';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'My Works', path: '/projects' },
  { title: 'Blog', path: '/blog' },
  { title: 'Contact Us', path: '/contact' },
];
const socialLinks = [
  {
    icon: <AiFillGithub size={22} />,
    link: 'https://github.com/Amr-Guaily',
    classes: 'social-link text-black bg-white/80',
  },
  {
    icon: <FaLinkedinIn size={19} />,
    link: 'https://www.linkedin.com/in/amr-guaily-7a9679204/',
    classes: 'social-link bg-sky-800',
  },
  {
    icon: <SiGmail size={19} />,
    link: 'mailto:amrguaily@gmail.com',
    classes: 'social-link bg-red-600',
  },
  // {
  //   icon: <BsTwitter size={19} />,
  //   link: '#',
  //   classes: 'social-link bg-sky-500',
  // },
  {
    icon: <AiOutlineWhatsApp size={19} />,
    link: 'http://wa.me/+201212526626',
    classes: 'social-link bg-green-600',
  },
];
const Sidebar = ({ setShowSidebar }) => {
  const router = useRouter();
  const activeLink =
    'text-sky-500 font-semibold text-lg ml-5 border-r-4 border-sky-400 text-sky-500';
  const normalLink = 'text-gray-200 font-semibold text-lg ml-5';

  function handleClick() {
    if (window.innerWidth <= 1024) setShowSidebar(false);
    return;
  }

  return (
    <div className="flex flex-col h-full gradiant-bg">
      {/* Close Icon */}
      <div
        className="lg:hidden cursor-pointer flex justify-end p-4 text-gray-200"
        onClick={() => setShowSidebar(false)}
      >
        {' '}
        <AiOutlineCloseCircle size={22} />
      </div>

      {/* Avatar */}
      <div className="flex justify-center mt-2 lg:mt-10 lg:mx-3">
        <div className="border-2 border-gray-300 w-[85px] h-[85px] rounded-full cursor-pointer overflow-hidden select-none">
          <img
            src="/imgs/avater-img.jpg"
            className="hover:scale-110 rounded-full transition duration-500 "
          />
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center mt-3 gap-1">
          <span className="text-gray-500 text-2xl mb-2">&lt;</span>
          <h1 className="text-white text-[34px] font-cursive">Amr Guaily </h1>
          <span className="text-gray-500 text-2xl mb-2">/&gt;</span>
        </div>
        <p className="text-center text-gray-500 font-semibold mt-[-12px] hover:text-white transition duration-700">
          Frontend Developer
        </p>
      </div>

      {/* Download Resume */}
      <div className="flex justify-center items-center mt-4">
        <a className="rounded-md bg-sky-400 text-gray-200 text-sm font-bold px-3 py-1 cursor-pointer hover:brightness-95 transition duration-300">
          <span className="text-sm">💼</span> My Resume
        </a>
      </div>

      {/* Nav Links */}
      <div className="flex flex-col gap-6 mt-14">
        {navLinks.map((link) => (
          <div
            key={link.path}
            onClick={handleClick}
            className={
              router.pathname === link.path ? `${activeLink}` : `${normalLink}`
            }
          >
            <Link href={link.path} passHref>
              <a>{link.title}</a>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex-1 flex items-end justify-center gap-3 mb-10">
        <div className="flex items-center mb-1 mr-[-10px]">
          <BsSunFill size={22} className="text-yellow-500 cursor-pointer" />
          <BsDot size={20} className="text-gray-300" />
        </div>
        {/* Social Links */}
        {socialLinks.map(({ icon, link, classes }) => (
          <div className={classes}>
            <Link href={link} passHref>
              <a target="_blank">{icon}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;