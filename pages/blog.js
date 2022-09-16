import ComingSoon from 'components/ComingSoon';

const Blog = () => {
  return <ComingSoon />;
};

export default Blog;

Blog.getLayout = function (page) {
  return <>{page}</>;
};
