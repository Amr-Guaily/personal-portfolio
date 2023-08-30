import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Summary, Skills } from 'components/index';

// Data
const WHAT_I_DO = [
  ' Clean code, in a composable and efficient way',
  "I understand the client's business domain and needs",
  'I deliver fast programs, fast',
  'Good performance & Good SEO',
];

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        {/* Who i am */}
        <Summary />

        <div className="flex gap-10 my-8">
          <div className="flex-1 ">
            {/* Interested in */}
            <div>
              <h1 className="text-[27px] md:text-[30px] text-gray-800 dark:text-blue-400">
                I am really interested in:
              </h1>
              <ul className="text list-disc ml-12 mt-2 text-gray-800 dark:text-slate-400">
                <li>System Design</li>
                <li>Algorithms & Data Structures</li>
                <li>JavaScript and its frameworks</li>
              </ul>
            </div>

            {/* What i do */}
            <div className="my-5">
              <div className="flex items-center gap-3 group">
                <h1 className="text-[27px] md:text-[30px] text-gray-800 dark:text-blue-400">
                  What I Do
                </h1>
                <span className="font-bold block text-gray-800 text-4xl group-hover:animate-go-away dark:text-blue-400">
                  ?
                </span>
              </div>
              <ul className="text ml-8 mt-2 text-gray-800 dark:text-slate-400">
                {WHAT_I_DO.map(itm => (
                  <li key={itm} className="flex items-center gap-2">
                    <Image
                      width={15}
                      height={15}
                      src="/imgs/marker.png"
                      alt="marker"
                      className='shrink-0'
                    />
                    <p className="mb-1.5 text-sm sm:text-base">{itm}</p>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-500 leading-5 mt-12 max-w-[650px] break-words">
              Feel free to message me about anything related to tech, I’m always
              open to a conversation!
            </p>
          </div>

          {/* Skills */}
          <Skills />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
