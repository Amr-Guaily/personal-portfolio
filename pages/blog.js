import { motion, AnimatePresence } from 'framer-motion';
import { Header, Article } from 'components/index';

const Blog = ({ articles }) => {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Blog;

export async function getServerSideProps() {
  const devRes = await fetch('https://dev.to/api/articles?username=amrguaily');
  const result = await devRes.json();

  return {
    props: {
      articles: result,
    },
  };
}
