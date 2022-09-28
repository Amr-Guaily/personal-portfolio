import Project from 'model/Project';
import mongoose from 'mongoose';

const Dashboard = ({ projects }) => {
  console.log(projects);
  return <div>index</div>;
};

export default Dashboard;

export async function getServerSideProps({ req }) {
  const { cookies } = req;

  if (cookies?.personalSiteToken !== process.env.NEXT_PUPLIC_TOKEN) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    };
  }

  mongoose.connect(process.env.NEXT_PUPLIC_MONGO_URL);

  const projectsDocs = await Project.find({}, { __v: 0 });
  const projects = projectsDocs.map((project) =>
    JSON.parse(JSON.stringify(project))
  );

  return {
    props: {
      projects,
    },
  };
}
