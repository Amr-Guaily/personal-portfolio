import Image from 'next/image';
import Link from 'next/link';
import { dummyData, filters } from 'utils/utils';
import { AiFillGithub, AiFillEye } from 'react-icons/ai';
import { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  return (
    <div className="mt-6">
      {/* Header */}
      <div className=" text-center">
        <h1 className="text-4xl font-bold text-gray-800">My Works</h1>
        <p className="text-sm text-gray-400">Review some of my works</p>
      </div>
      {/* Filter */}
      <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-10 my-8">
        {filters.map(({ type }) => (
          <div
            onClick={() => setFilter(type)}
            className={`filter-btn ${
              filter === type ? 'text-blue-500 border-b-blue-500' : ''
            }`}
          >
            {type}
          </div>
        ))}
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {dummyData.map((project) => (
          <div
            key={project.id}
            className="p-4 bg-slate-100 rounded-md flex flex-col h-[350px]"
          >
            {/* Project Image */}
            <div className="relative basis-3/4 rounded-md overflow-hidden cursor-pointer group">
              <Image layout="fill" objectFit="cover" src={project.img} />
              {/* backdrop */}
              <div className="backdrop">
                <div className="backdrop-btn">
                  <Link href={project.demo} passHref>
                    <a target="_balnk">
                      <AiFillGithub size={24} />
                    </a>
                  </Link>
                </div>
                <div className="backdrop-btn">
                  <Link href={project.repo} passHref>
                    <a target="_balnk">
                      <AiFillEye size={24} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className=" basis-1/4">
              <h3 className="text-center text-lg font-semibold text-gray-700 capitalize my-3 whitespace-nowrap overflow-hidden text-ellipsis">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 overflow-hidden">
                {project.desc}
              </p>
              <div className="flex items-center gap-3 mt-6">
                {project.teqnologies.map((teq, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-200 px-2 rounded-md text-slate-600 font-semibold text-sm uppercase"
                  >
                    {teq}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
