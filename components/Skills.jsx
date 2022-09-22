import Image from 'next/image';

const SKILLS = [
  '/imgs/html.png',
  '/imgs/css.png',
  '/imgs/JavaScript.png',
  '/imgs/git.png',
  '/imgs/github.png',
  '/imgs/sass.png',
  '/imgs/tailwind.png',
  '/imgs/reactJs.png',
  '/imgs/nextJs.png',
  '/imgs/nodeJS.png',
  '/imgs/mongoDB.png',
  '/imgs/firebase.png',
];

const Skills = () => {
  return (
    <div className="hidden xl:block max-w-[450px] bg-white shadow-xl rounded-md px-8 py-6 dark:bg-secondary-dark">
      <h1 className="text-[30px] text-gray-800 dark:text-blue-400">Skills</h1>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {SKILLS.map((skill) => (
          <div
            key={skill}
            className="group hover:scale-110 transition duration-300 w-[85px] h-[90px] rounded-md bg-gray-200 flex flex-col gap-1 justify-center items-center capitalize group"
          >
            <Image width="40" height="40" src={skill} alt="skill" />
            <span className="font-semibold text-gray-800 ">
              {skill.split('/')[2].split('.')[0]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
