import ComingSoon from 'components/ComingSoon';
import { motion, AnimatePresence } from 'framer-motion';

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className="mt-6"
    >
      <div className=" text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-blue-400">
          My Blog
        </h1>
        <p className="text-sm text-slate-400 mt-2 dark:text-slate-400">
          Study notes, programming tutorials, or simply food for thoughts.
        </p>
      </div>
      <ComingSoon />;
    </motion.div>
  );
};

export default Blog;
