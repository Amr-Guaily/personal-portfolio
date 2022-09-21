import { AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsTwitter } from 'react-icons/bs';

// Social Links in Sidebar
export const socialLinksSidebar = [
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
  {
    icon: <AiOutlineWhatsApp size={19} />,
    link: 'http://wa.me/+201212526626',
    classes: 'social-link bg-green-600',
  },
];

export const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'My Works', path: '/projects' },
  { title: 'Blog', path: '/blog' },
  { title: 'Atricles', path: '/articles' },
  { title: 'Contact Me', path: '/contact' },
];

// Social Links in contact page
export const socialLinks = [
  {
    icon: <AiFillGithub size={18} />,
    link: 'https://github.com/Amr-Guaily',
  },
  {
    icon: <FaLinkedinIn size={16} />,
    link: 'https://www.linkedin.com/in/amr-guaily-7a9679204/',
  },
  {
    icon: <SiGmail size={16} />,
    link: 'mailto:amrguaily@gmail.com',
  },
  {
    icon: <BsTwitter size={16} />,
    link: '#',
  },
  {
    icon: <RiWhatsappFill size={16} />,
    link: 'http://wa.me/+201212526626',
  },
];
