import ComingSoon from 'components/ComingSoon';
import { motion, AnimatePresence } from 'framer-motion';

const Articles = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <div className=" text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-blue-400">
            Articles
          </h1>
          <p className="text-sm text-slate-400 dark:text-slate-400">
            Some articles, I found useful
          </p>
        </div>
        <ComingSoon />;
      </motion.div>
    </AnimatePresence>
  );
};

export default Articles;
