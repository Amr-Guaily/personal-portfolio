import { AiFillGithub } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsTwitter } from 'react-icons/bs';

export const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'My Works', path: '/projects' },
  { title: 'Blog', path: '/blog' },
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
    link: 'https://twitter.com/amr_guaily',
  },
  {
    icon: <RiWhatsappFill size={16} />,
    link: 'http://wa.me/+201212526626',
  },
];
