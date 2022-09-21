import { useRef, useState } from 'react';
import Image from 'next/image';
import { socialLinks } from 'utils/links';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const form = useRef();

  // Use EmailJS library  to send emails using client-side technologies only. No server is required.
  const submitHandler = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_g3rp4du',
        'template_0clo6yh',
        form.current,
        'SIfthkeAwORTMEdam'
      )
      .then(
        () => {
          // Reset Input fields
          form.current[0].value = '';
          form.current[1].value = '';
          form.current[2].value = '';
          setTimeout(() => setMessage(false), 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        className="flex justify-center items-center gap-8 h-full"
      >
        <div className="max-w-[600px] flex-1 flex flex-col gap-4 p-4">
          {/* Form */}
          <form
            ref={form}
            onSubmit={submitHandler}
            className="p-4 rounded-md shadow-xl bg-gray-100 dark:bg-secondary-dark"
          >
            <h1 className="text-4xl text-gray-800 font-bold dark:text-blue-400 ">
              Let's get in touch
            </h1>
            <p className="text-gray-500 mt-2 mb-8 dark:text-slate-400">
              Feel free to contact me
            </p>
            <div className="ml-2.5">
              <label className="uppercase font-semibold text-gray-700 dark:text-slate-400">
                Your Name
              </label>
              <input
                type="text"
                required
                maxLength={30}
                name="name"
                placeholder="e.g Amr Guaily"
                className="input-field dark:text-slate-300"
              />
            </div>
            <div className="ml-2.5 my-8">
              <label className="uppercase font-semibold text-gray-700 dark:text-slate-400">
                Email
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="e.g amrguaily@example.com"
                className="input-field dark:text-slate-300"
              />
            </div>
            <div className="ml-2.5">
              <label className="uppercase font-semibold text-gray-700 dark:text-slate-400">
                Message
              </label>
              <textarea
                type="text"
                required
                name="message"
                placeholder="Write your message here"
                className="input-field dark:text-slate-300"
              />
            </div>
            <div className="flex items-center gap-4 mt-6 ">
              <button className="ml-2.5 px-8 bg-blue-500 font-semibold text-white rounded-md py-1.5 transition duration-300 hover:brightness-90">
                Send
              </button>
              <p
                className={`font-semibold text-green-600 transition duration-300 ${
                  message ? 'opacity-1' : 'opacity-0'
                }`}
              >
                Thanks, I will reply as soon as possiple..
              </p>
            </div>
          </form>
          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon, link }) => (
              <div
                key={link}
                className=" text-gray-600 hover:text-black transition duration-300 dark:text-slate-400 dark:hover:text-slate-100"
              >
                <Link href={link} passHref>
                  <a target="_blank">{icon}</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Image */}
        <div className="w-[500px] h-[300px] hidden xl:flex items-center">
          <Image
            width="480"
            height="380"
            objectFit="cover"
            src="/imgs/Contact-us.png"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Contact;
