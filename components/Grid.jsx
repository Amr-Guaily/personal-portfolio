import { AiFillGithub, AiFillEye } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Grid = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {projects?.map((project) => (
        <motion.div
          layout
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          key={project._id}
          className="p-4 bg-slate-100 rounded-md flex flex-col dark:bg-secondary-dark"
        >
          {/* Project Image */}
          <div className="relative min-h-[160px] rounded-md overflow-hidden cursor-pointer group">
            <Image
              layout="fill"
              priority
              src={project.img}
              className="object-cover sm:object-fill"
              alt="project-img"
            />
            {/* backdrop */}
            <div className="backdrop">
              <div className="backdrop-btn">
                <Link href={project.repo} passHref>
                  <a target="_balnk">
                    <AiFillGithub size={24} />
                  </a>
                </Link>
              </div>
              {/* <div className="backdrop-btn">
                <Link href={project.demo} passHref>
                  <a target="_balnk">
                    <AiFillEye size={24} />
                  </a>
                </Link>
              </div> */}
            </div>
          </div>

          {/* Project Info */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-center text-lg font-semibold text-gray-700 capitalize my-3 whitespace-nowrap overflow-hidden text-ellipsis dark:text-slate-300">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-slate-400">
              {project.desc}
            </p>
            <div className="flex-1 flex items-end gap-3 flex-wrap mt-6">
              {project.techs.map((teq, idx) => (
                <div
                  key={idx}
                  className="bg-slate-200 px-2 rounded-md text-slate-600 font-semibold text-xs lowercase"
                >
                  {teq}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Grid;
