"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-row items-center w-full">
        <div className="bg-gray-300 w-1/2 h-2"></div>
        <div className="bg-gray-300 w-1/2 h-2"></div>
      </div>
      <div className="flex flex-row items-center w-full">
        <div className="bg-black w-1/2 h-2"></div>
        <div className="bg-black w-1/2 h-2"></div>
      </div>
      <Marquee
        speed={80}
        gradient={false}
        className="bg-gray-300 border border-gray-300 p-4 md:p-10"
      >
        <div className="flex flex-col items-center w-full">
          <div
            className="w-full text-center p-7.5 space-x-5 font-bold text-4xl md:text-6xl font-mono"
            style={{
              fontFamily: "Anton Regular",
              fontStyle: "normal",
              fontWeight: 50,
            }}
          >
            REGISTER FOR COOKOFF & CLUEMINATI. REGISTER FOR COOKOFF &
            CLUEMINATI. REGISTER FOR COOKOFF & CLUEMINATI. REGISTER FOR COOKOFF
            & CLUEMINATI. REGISTER FOR COOKOFF & CLUEMINATI. REGISTER FOR
            COOKOFF & CLUEMINATI.
          </div>
        </div>
      </Marquee>
      <div className="flex flex-row items-center w-full">
        <div className="bg-black w-1/2 h-2"></div>
        <div className="bg-black w-1/2 h-2"></div>
      </div>
      <div className="flex flex-row items-center w-full">
        <div className="bg-white w-1/2 h-2"></div>
        <div className="bg-white w-1/2 h-2"></div>
      </div>
      <div className="flex flex-row items-center w-full">
        <div className="bg-black w-1/2 h-10"></div>
        <div className="bg-black w-1/2 h-10"></div>
      </div>
    </div>
  );
};

export default MarqueeComponent;
