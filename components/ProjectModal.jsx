import { useState } from 'react';

const ProjectModal = ({ setModal }) => {
  const [loading, setLoading] = useState(false);
  const [tech, setTech] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    img: '',
    desc: '',
    repo: '',
    demo: '',
    techs: [],
    category: '',
    featured: false,
  });

  const changeHandler = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'radio' ? Boolean(value) : value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch('/api/projects', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      setLoading(false);
      setModal(false);
    });
  };

  return (
    <div className=" w-full h-full top-0 left-0 flex justify-center">
      {/* Backdrop */}
      <div
        onClick={() => setModal(false)}
        className="fixed top-0 left-0 w-screen h-screen bg-black/60"
      />
      {/* Modal */}
      <div className="bg-white rounded-xl fixed w-[25rem] md:w-[32rem] top-[7vh] shadow-md py-4 px-6">
        <form onSubmit={submitHandler}>
          <div>
            <label className="capitalize text-slate-700 font-semibold">
              Title
            </label>
            <input
              className="input-field"
              name="title"
              type="text"
              required
              placeholder="e.g Project Title"
              value={formData.title}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label className="capitalize text-slate-700 font-semibold">
              Project Img
            </label>
            <input
              className="input-field"
              type="text"
              name="img"
              required
              placeholder="e.g /imgs/project img.png"
              value={formData.img}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label className="capitalize text-slate-700 font-semibold">
              Description
            </label>
            <input
              className="input-field"
              type="text"
              name="desc"
              required
              placeholder="Project Description"
              value={formData.desc}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label className="capitalize text-slate-700 font-semibold">
              Repo
            </label>
            <input
              className="input-field"
              type="text"
              name="repo"
              required
              placeholder="Repo Link"
              value={formData.repo}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label className="capitalize text-slate-700 font-semibold">
              Demo
            </label>
            <input
              className="input-field"
              type="text"
              name="demo"
              required
              placeholder="Demo Link"
              value={formData.demo}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label className="capitalize text-slate-700 font-semibold">
              Category
            </label>
            <input
              className="input-field"
              type="text"
              name="category"
              required
              placeholder="Demo Link"
              value={formData.category}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label className="capitalize text-slate-700 font-semibold">
              Techs
            </label>
            <div className="flex gap-6">
              <input
                className="input-field"
                type="text"
                required
                placeholder="e.g html"
                value={tech}
                onChange={(e) => setTech(e.target.value)}
              />
              <button
                type="button"
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    techs: [...prev.techs, tech],
                  }));
                  setTech('');
                }}
                className="bg-blue-500 h-[35px] text-white rounded-md font-semibold basis-1/4"
              >
                Add
              </button>
            </div>
            <div className="flex items-center gap-3 ml-4 mb-4">
              {formData.techs?.map((tech) => (
                <div
                  className="px-3 bg-gray-300 rounded-md text-slate-700 text-sm"
                  key={tech}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <fieldset>
            <legend className="mb-3 capitalize text-slate-700 font-semibold">
              Is Featured?
            </legend>
            <input
              type="radio"
              name="featured"
              value="1"
              checked={formData.featured === true}
              onChange={changeHandler}
            />
            <label className="mr-4">True</label>
            <input
              type="radio"
              name="featured"
              // Empty string is Falsy value
              value=""
              checked={formData.featured === false}
              onChange={changeHandler}
            />
            <label>False</label>
          </fieldset>

          <button
            disabled={loading}
            className="bg-green-500 font-semibold rounded-md block ml-auto text-white px-4 py-1 hover:brightness-95 transition duration-150"
          >
            {loading ? '...processing' : 'Confirm'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectModal;
