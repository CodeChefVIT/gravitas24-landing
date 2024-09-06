import React from 'react';
import { ThreeDCardDemo } from '@/components/ui/Card3d';
import { ThreeDCardDemo2 } from '@/components/ui/Card3d-2';
const EventPage: React.FC = () => {
  return (
    <div className="bg-black text-white py-12 text-center font-['IBM_Plex_Mono'] min-h-screen flex flex-col justify-center items-center">
      
      <h2 className="text-[8vw] mt-8 sm:text-[4vw] mb-[8vw] sm:mb-[3vw] font-bold ibm-plex-mono-bold">OUR EVENTS</h2>
      
      
      <p className="max-w-7xl mx-auto text-[4vw] sm:text-xl sm:mx-14 mb-[10vw] sm:mb-[5vw] leading-relaxed ibm-plex-mono-regular">
        Lorem ipsum dolor sit amet consectetur. Enim quis <strong className="text-[#B7AB98]">COOKOFF</strong> sed magna est. Elit tellus tempor amet accumsan sit pellentesque <strong className="text-[#B7AB98]">CLUEMINATI</strong>. Velit lectus amet nunc at ultrices volutpat. Pellentesque arcu malesuada ac egestas justo blandit. Elit tellus tempor amet accumsan sit pellentesque feugiat. Velit lectus amet nunc at ultrices volutpat. Pellentesque arcu malesuada ac egestas justo blandit.
      </p>
      
      <ThreeDCardDemo />
      <ThreeDCardDemo2 />
    </div>
  );
};

export default EventPage;
