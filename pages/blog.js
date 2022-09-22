import ComingSoon from 'components/ComingSoon';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from 'components/index';

const Blog = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        className="mt-6"
      >
        <Header
          h1="My Blog"
          p="Study notes, programming tutorials, or simply food for thoughts."
        />
        <ComingSoon />;
      </motion.div>
    </AnimatePresence>
  );
};

export default Blog;
