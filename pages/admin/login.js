import { useRouter } from 'next/router';
import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });
  const [error, setError] = useState(false);
  const router = useRouter();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      router.push('/admin');
    } else {
      setError(true);
    }
  };
  return (
    <div className="flex flex-col items-center mt-[7rem]">
      <h1 className="font-semibold text-2xl text-slate-700 dark:text-blue-400">
        Admin Dashboard
      </h1>
      <form onSubmit={submitHandler}>
        <input
          className="block outline-none my-4 border-2 px-3 py-1 border-slate-500 rounded-md"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={changeHandler}
        />
        <input
          className="block outline-none my-4 border-2 px-3 py-1 border-slate-500 rounded-md"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={changeHandler}
        />

        <button className="bg-green-400 px-4 mx-auto block rounded-md text-white py-1 font-semibold">
          Login
        </button>
      </form>
      {error && (
        <p className=" mt-3 text-red-500 font-semibold">Unvalid Creditional</p>
      )}
    </div>
  );
};

export default Login;
