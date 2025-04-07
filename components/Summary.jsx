import Image from 'next/image';

const Summary = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <h1 className="text-[30px] text-gray-800 dark:text-blue-400">
          Hi, I'm Amr{' '}
        </h1>
        <Image
          height="30"
          width="30px"
          className="animate-wave-emoji transfor origin-[70%_70%]"
          src="/imgs/wave.png"
          alt="wave-icon"
        />
      </div>
      <p className="text-gray-500 leading-5 my-2 max-w-[800px] break-words dark:text-slate-400">
        A frontend developer with{' '}
        <strong>2+ years of experience specializing in JavaScript,</strong>{' '}
        using <strong>React.js</strong> & <strong>Next.js</strong>.
      </p>
      <p className="text-gray-500 leading-5 mt-2 max-w-[800px] break-words dark:text-slate-400">
        Proven track record in debugging, performance optimization and team
        collaboration. Leveraging problem-solving abilities, algorithm and data
        structures foundation to enhance functionality and user experience.
      </p>
    </>
  );
};

export default Summary;
