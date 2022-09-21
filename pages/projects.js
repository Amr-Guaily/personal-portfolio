import Image from 'next/image';
import Link from 'next/link';
import { filters } from 'utils/utils';
import { AiFillGithub, AiFillEye } from 'react-icons/ai';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mongoose from 'mongoose';
import Project from 'model/Project';

const Portfolio = ({ projectsList }) => {
  const [filter, setFilter] = useState('All');
  const [projects, setProjects] = useState(projectsList);

  const filterHandler = (filterType) => {
    setFilter(filterType);
    setProjects(
      filterType === 'All'
        ? projectsList
        : projectsList.filter((project) =>
            filterType === 'Featured'
              ? project.featured === true
              : project.category === filterType
          )
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        className="mt-6"
      >
        {/* Header */}
        <div className=" text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-blue-400">
            My Works
          </h1>
          <p className="text-sm text-slate-400 dark:text-slate-400">
            Review some of my works
          </p>
        </div>
        {/* Filter */}
        <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-10 my-8">
          {filters.map(({ type }) => (
            <div
              key={type}
              onClick={() => filterHandler(type)}
              className={`filter-btn ${
                filter === type ? 'text-blue-500 border-b-blue-500' : ''
              }`}
            >
              {type}
            </div>
          ))}
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, scale: 0 }}
              key={project._id}
              className="p-4 bg-slate-100 rounded-md flex flex-col dark:bg-secondary-dark"
            >
              {/* Project Image */}
              <div className="relative min-h-[160px] rounded-md overflow-hidden cursor-pointer group">
                <Image
                  layout="fill"
                  priority
                  src={project.img}
                  className="object-fill"
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
                  <div className="backdrop-btn">
                    <Link href={project.demo} passHref>
                      <a target="_balnk">
                        <AiFillEye size={24} />
                      </a>
                    </Link>
                  </div>
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
      </motion.div>
    </AnimatePresence>
  );
};

export default Portfolio;

export async function getServerSideProps() {
  mongoose.connect(process.env.NEXT_PUPLIC_MONGO_URL, () => {
    console.log('connected...');
  });
  const docs = await Project.find({}, { __v: 0 });

  return {
    props: {
      projectsList: docs.map((doc) => JSON.parse(JSON.stringify(doc))),
    },
  };
}
