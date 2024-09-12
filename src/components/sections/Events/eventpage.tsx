import { ThreeDCardDemo } from "@/components/ui/Card3d";
import { ThreeDCardDemo2 } from "@/components/ui/Card3d-2";
import { Imagecard } from "@/components/ui/Image3dcard";
import { CookoffCardMobile } from "@/components/ui/MobileCookoffCard";
import { ClueminatiMobileCard } from "@/components/ui/MobileClueminatiCard";
import React from "react";
const EventPage: React.FC = () => {
  return (
    <div className="bg-black text-white py-12 text-center font-['IBM_Plex_Mono'] min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-[8vw]  sm:text-[4vw] mb-[8vw] sm:mb-[3vw] font-bold ibm-plex-mono-bold">
        OUR EVENTS
      </h2>

      <p className="max-w-7xl px-4 mx-auto text-[4vw] sm:text-xl sm:mx-14 mb-[10vw] sm:mb-[5vw] leading-relaxed ibm-plex-mono-regular">
        Join us at graVITas for two of the most exhilarating events of the
        year!&nbsp;<strong className="text-[#B7AB98]">CLUEMINATI 2.0 </strong>
        will push your limits with intricate puzzles and a high-stakes treasure
        hunt, while the 9th edition of
        <strong className="text-[#B7AB98]"> COOK-OFF </strong> celebrates
        creativity and problem-solving in competitive coding. Whether you're a
        puzzle enthusiast or a coding whiz, these events offer the ultimate
        platform to challenge your skills, compete with the best, and make your
        mark. Don't miss out on the adventure! Be a part of something
        extraordinary!
      </p>

      <div className="hidden md:block">
        <ThreeDCardDemo />
        <Imagecard mainimage="IMG_1938.jpg" />
        <ThreeDCardDemo2 />
        <Imagecard mainimage="clueminatiimg.jpg" />
      </div>
      <div className="block md:hidden">
        <CookoffCardMobile />
        <ClueminatiMobileCard />
      </div>
    </div>
  );
};

export default EventPage;
