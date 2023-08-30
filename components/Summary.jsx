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
        A frontend developer with <strong>2+ years of experience</strong> using{' '}
        <strong>React.js</strong> & <strong>Next.js</strong>.
      </p>
      <p className="text-gray-500 leading-5 mt-2 max-w-[800px] break-words dark:text-slate-400">
        I am currently a Frontend Developer at{' '}
        <a
          className="underline text-blue-600 font-semibold text-lg"
          href="https://valinteca.com/"
        >
          Valinteca
        </a>
        .
      </p>
    </>
  );
};

export default Summary;
