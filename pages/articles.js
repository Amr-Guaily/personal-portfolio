import { Header } from 'components/index';
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
        <Header h1="Articles" p="Some articles, I found useful" />
        <ComingSoon />;
      </motion.div>
    </AnimatePresence>
  );
};

export default Articles;
