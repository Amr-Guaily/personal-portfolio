import Project from 'model/Project';
import mongoose from 'mongoose';
import Link from 'next/link';
import { ProjectModal } from 'components/index';
import { useState } from 'react';

const Dashboard = ({ projects }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="px-8 py-6">
      <div className=" text-slate-700 hover:underline mb-6 inline-block">
        <Link href="/" passHref>
          Back to home
        </Link>
      </div>

      <button
        onClick={() => setShowModal(true)}
        className=" block px-4 py-1 text-white font-semibold bg-green-500 rounded-md"
      >
        Add New Project
      </button>

      {showModal && <ProjectModal setModal={setShowModal} />}

      <div className="mt-8">
        <h1 className="text-3xl font-semibold text-slate-800 underline">
          Projects
        </h1>
        <div className="ml-4">
          <table className="mt-4">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {projects?.map((project) => (
                <tr key={project._id}>
                  <td>{project._id.slice(0, 7)}...</td>
                  <td>{project.title}</td>
                  <td>{project.category}</td>
                  <td className="flex items-center gap-2">
                    <button className="bg-green-500 px-2 rounded-sm text-white">
                      Edit
                    </button>
                    <button className="bg-red-500 px-2 rounded-sm text-white">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function pageLayout(page) {
  return <>{page}</>;
};

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

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
