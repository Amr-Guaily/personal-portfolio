const Filter = ({ filter, filterHandler }) => {
  const FILTERS = [
    { type: 'All' },
    { type: 'vanillajs' },
    { type: 'ReactJS' },
    { type: 'NextJS' },
    { type: 'Featured' },
  ];

  return (
    <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-10 my-8">
      {FILTERS.map(({ type }) => (
        <div
          key={type}
          onClick={() => filterHandler(type)}
          className={`filter-btn ${
            filter === type ? 'text-blue-500 border-b-blue-500' : ''
          }`}
        >
          {type}
        </div>
      ))}
    </div>
  );
};

export default Filter;
