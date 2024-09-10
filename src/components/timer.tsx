"use client";

import { useEffect, useState } from "react";

interface TimeCount {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const getTimeLeft = (expiry: string): TimeCount => {
  let days = "00";
  let hours = "00";
  let minutes = "00";
  let seconds = "00";

  const difference = new Date(expiry).getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const dys = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const mnt = Math.floor((difference / (1000 * 60)) % 60);
  const snd = Math.floor((difference / 1000) % 60);

  days = dys < 10 ? `0${dys}` : dys.toString();
  hours = hrs < 10 ? `0${hrs}` : hrs.toString();
  minutes = mnt < 10 ? `0${mnt}` : mnt.toString();
  seconds = snd < 10 ? `0${snd}` : snd.toString();

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const Timer = ({ launchDate }: { launchDate: string }) => {
    const [timeLeft, setTimeLeft] = useState<TimeCount>(getTimeLeft(launchDate));
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTimeLeft(getTimeLeft(launchDate));
      }, 1000);
      return () => clearInterval(interval);
    }, [launchDate]);
  
    return (
      <div className="flex flex-col justify-center items-center text-white bg-black sm:min-h-screen h-auto px-4 sm:px-0  sm:mx-0">
        <h1 className="text-3xl sm:text-6xl font-bold mt-5 mb-10 mx-4 audiowide">
          The wait ends in
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-0 sm:gap-0">
          {/* Days */}
          <span className="flex flex-col justify-center items-center navinedemo bg-black text-red-500 text-4xl sm:text-9xl w-28 sm:w-64 py-6 sm:py-10 shadow-lg border-4 border-red-500 row-start-1 col-start-1">
            {timeLeft.days.toString().padStart(2, '0')}:
            <small className="text-xl sm:text-3xl navinedemo font-semibold text-red-500 mt-2 sm:mt-3">
              Days
            </small>
          </span>
  
          {/* Hours */}
          <span className="flex flex-col justify-center items-center navinedemo bg-black text-white text-4xl sm:text-9xl w-28 sm:w-64 py-6 sm:py-10 shadow-lg border-4 border-white row-start-1 col-start-3">
            {timeLeft.hours.toString().padStart(2, '0')}:
            <small className="text-xl sm:text-3xl navinedemo font-semibold text-white mt-2 sm:mt-3">
              Hours
            </small>
          </span>
  
          {/* Minutes */}
          <span className="flex flex-col justify-center items-center navinedemo bg-black text-white text-4xl sm:text-9xl w-28 sm:w-64 py-6 sm:py-10 shadow-lg border-4 border-white row-start-2 col-start-2">
            {timeLeft.minutes.toString().padStart(2, '0')}:
            <small className="text-xl sm:text-3xl navinedemo font-semibold text-white mt-2 sm:mt-3">
              Minutes
            </small>
          </span>
  
          {/* Seconds */}
          <span className="flex flex-col justify-center items-center mb-8 sm:mb-16 navinedemo bg-black text-white text-4xl sm:text-9xl w-28 sm:w-64 py-6 sm:py-10 shadow-lg border-4 border-white row-start-3 col-start-1">
            {timeLeft.seconds.toString().padStart(2, '0')}
            <small className="text-xl sm:text-3xl navinedemo font-semibold text-white mt-2 sm:mt-3">
              Seconds
            </small>
          </span>
        </div>
      </div>
    );
  };
  
  export default Timer;
  
  

  
