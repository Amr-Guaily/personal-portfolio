import Image from 'next/image';
import { skills } from 'utils/utils';
import { motion, AnimatePresence } from 'framer-motion';

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
        <div className="flex items-center gap-3">
          <h1 className="text-[30px] text-gray-800 dark:text-blue-400">
            Hi, I'm Amr{' '}
          </h1>
          <Image
            height="30"
            width="30px"
            className="animate-wave-emoji transfor origin-[70%_70%]"
            src="/imgs/wave.png"
            alt="wave-icon"
          />
        </div>
        <p className="text-gray-500 leading-5 my-2 max-w-[800px] break-words dark:text-slate-400">
          A frontend developer with <strong>2+ years of experience</strong>{' '}
          using <strong>React.js</strong>.
        </p>
        <p className="text-gray-500 leading-5 mt-2 max-w-[800px] break-words dark:text-slate-400">
          I am currently looking for an opportunity to utilize my technical
          skills in a challenging working environment and become a valuable
          asset to the organization that I work for.
        </p>

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
                  What I Do{' '}
                </h1>
                <span className="font-bold block text-gray-800 text-4xl group-hover:animate-go-away dark:text-blue-400">
                  ?
                </span>
              </div>
              <ul className="text ml-8 mt-2 text-gray-800 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <Image
                    width="15"
                    height="15"
                    src="/imgs/marker.png"
                    alt="marker"
                  />
                  <p className="mb-1.5">
                    Clean code, in a composable and efficient way
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    width="15"
                    height="15"
                    src="/imgs/marker.png"
                    alt="marker"
                  />
                  <p className="mb-1.5">
                    I understand the client's business domain and needs
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    width="15"
                    height="15"
                    src="/imgs/marker.png"
                    alt="marker"
                  />
                  <p className="mb-1.5">I deliver fast programs, fast</p>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    width="15"
                    height="15"
                    src="/imgs/marker.png"
                    alt="marker"
                  />
                  <p className="mb-1.5">Good performance & Good SEO</p>
                </li>
              </ul>
            </div>

            <p className="text-gray-500 leading-5 mt-12 max-w-[650px] break-words">
              Feel free to message me about anything related to tech, I’m always
              open to a conversation!
            </p>
          </div>

          {/* Skills */}
          <div className="hidden xl:block max-w-[450px] bg-white shadow-xl rounded-md px-8 py-6 dark:bg-secondary-dark">
            <h1 className="text-[30px] text-gray-800 dark:text-blue-400">
              Skills
            </h1>
            <div className="grid grid-cols-4 gap-4 mt-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="group hover:scale-110 transition duration-300 w-[85px] h-[90px] rounded-md bg-gray-200 flex flex-col gap-1 justify-center items-center capitalize group"
                >
                  <Image width="40" height="40" src={skill} alt="skill" />
                  <span className="font-semibold text-gray-800 ">
                    {skill.split('/')[2].split('.')[0]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
