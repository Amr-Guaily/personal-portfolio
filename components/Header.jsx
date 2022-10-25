const Header = ({ h1, p }) => {
  return (
    <div className=" text-center">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-blue-400">
        {h1}
      </h1>
      <p className="text-sm text-slate-400 dark:text-slate-400 mt-2">{p}</p>
    </div>
  );
};

export default Header;
