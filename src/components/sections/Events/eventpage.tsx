import { ThreeDCardDemo } from "@/components/ui/Card3d";
import { ThreeDCardDemo2 } from "@/components/ui/Card3d-2";
import React from "react";
const EventPage: React.FC = () => {
  return (
    <div className="bg-black text-white py-12 text-center font-['IBM_Plex_Mono'] min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-[8vw]  sm:text-[4vw] mb-[8vw] sm:mb-[3vw] font-bold ibm-plex-mono-bold">
        OUR EVENTS
      </h2>

      <p className="max-w-7xl px-4 mx-auto text-[4vw] sm:text-xl sm:mx-14 mb-[10vw] sm:mb-[5vw] leading-relaxed ibm-plex-mono-regular">
        Join us at graVITas for two of the most exhilarating events of the
        year!&nbsp;
        <br />
        <br /> <strong className="text-[#B7AB98]">CLUEMINATI 2.0 </strong>will
        push your limits with intricate puzzles and a high-stakes treasure hunt,
        while
        <strong className="text-[#B7AB98]"> COOK-OFF 9.0 </strong> celebrates
        creativity and problem-solving in competitive coding. <br />
        <br />
        Whether you're a puzzle enthusiast or a coding whiz, these events offer
        the ultimate platform to challenge your skills, compete with the best,
        and make your mark.
        <br />
        <br />
        Don't miss out on the adventure! <br />
        Be a part of something extraordinary!
      </p>

      <ThreeDCardDemo />
      <ThreeDCardDemo2 />
    </div>
  );
};

export default EventPage;
