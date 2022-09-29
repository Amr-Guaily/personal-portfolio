import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Header, Grid } from 'components/index';
import { useState } from 'react';
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
        <Header h1="My Works" p="Review some of my works" />

        {/* Filter */}
        <Filter filter={filter} filterHandler={filterHandler} />

        {/* Projects Grid */}
        <Grid projects={projects} />
      </motion.div>
    </AnimatePresence>
  );
};

export default Portfolio;

export async function getStaticProps() {
  mongoose.connect(process.env.NEXT_PUPLIC_MONGO_URL);

  const docs = await Project.find({}, { __v: 0 });

  return {
    props: {
      projectsList: docs.map((doc) => JSON.parse(JSON.stringify(doc))),
    },
    revalidate: 60,
  };
}
