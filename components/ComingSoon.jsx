import Image from 'next/image';
import { useEffect, useState } from 'react';

const ComingSoon = () => {
  const [days, setDays] = useState(0);
  const [houres, setHours] = useState(0);
  const [minuts, setMinuts] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const launchDate = new Date('Oct 1, 2022 00:00:00').getTime();
  const currentDate = new Date().getTime();
  // Getting remain time in milliseconds
  const remainTime = launchDate - currentDate;

  useEffect(() => {
    const timeFunction = setInterval(() => {
      // Covert milliseconds to [days, hours, mintus, seconds]
      setDays(Math.floor(remainTime / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinuts(Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((remainTime % (1000 * 60)) / 1000));

      if (remainTime <= 0) {
        clearInterval(timeFunction);
        setDays(0);
        setHours(0);
        setMinuts(0);
        setSeconds(0);
      }
    }, 1000);

    return () => {
      clearInterval(timeFunction);
    };
  }, [remainTime]);

  return (
    <div className="h-full overflow-hidden flex flex-col items-center text-white relative">
      <Image
        src="/imgs/coming-soon.jpg"
        alt="comming-soon page"
        layout="fill"
        objectFit="cover"
        className="z-[-1]"
      />
      <div className="flex flex-col items-center text-white relative top-28">
        <h1 className="text-[45px] md:text-[65px] font-bold">
          We're <span className="text-red-400">Launching</span> Soon
        </h1>
        <p className=" text-sm md:text-lg max-w-[550px] text-center px-6">
          Our website is under Maintenance. We're working to improve our website
          and we'll ready to lunch after.
        </p>
        <div className="flex items-center gap-8 mt-6 font-semibold">
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-2">
              {days < 10 ? `0${days}` : days}
            </span>
            <span>Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-2">
              {houres < 10 ? `0${houres}` : houres}
            </span>
            <span>Houres</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-2">
              {minuts < 10 ? `0${minuts}` : minuts}
            </span>
            <span>Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-2">
              {seconds < 10 ? `0${seconds}` : seconds}
            </span>
            <span>Secons</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;