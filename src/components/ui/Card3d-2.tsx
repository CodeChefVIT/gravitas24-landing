"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ThreeDCardDemo2() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#D9D9D9] mx-5 overlay relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[1150px] h-auto rounded-3xl p-1 md:p-3 border">
        <div className="absolute inset-0">
          <Image
            src="/noisy-background.jpg"
            layout="fill"
            objectFit="cover"
            className="opacity-45 rounded-3xl"
            alt="Overlay"
          />
        </div>

        <div className="border-2 border-[#202020] rounded-2xl md:p-2 relative z-10">
          <CardItem>
            <div className="flex flex-col items-center md:items-start gap-4 mt-2 md:mt-auto space-x-0.5 md:flex-row md:space-x-2">
              <div className="border-[#202020] md:border-r-2 md:pr-2 ">
                <div className="border-[#202020] border-8 p-0.5">
                  <CardItem
                    rotateX={3}
                    rotateY={3}
                    rotateZ={-2}
                    translateZ="100"
                    className="flex-shrink-0"
                  >
                    <Image
                      src="/Clueminati_card_image.jpg"
                      height="1024"
                      width="1024"
                      className="h-auto w-[300px] sm:w-[350px] md:w-[400px] object-cover shadow-lg "
                      alt="thumbnail"
                    />
                  </CardItem>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-0 md:mt-3">
                  <div className="w-16 h-20 flex items-center justify-center">
                    <img
                      src="/Clueminatilogo.png"
                      alt="C Logo"
                      className="h-full object-contain md:mr-2"
                    />
                  </div>
                  <div className="text-4xl font-bold tracking-wide text-black Altera-6">
                    lueminati
                  </div>
                </div>

                <CardItem
                  as="div"
                  translateZ="20"
                  className="text-black leading-relaxed text-lg max-w-sm uber-move text-center md:text-left shadow-text"
                >
                  <p>
                    New ver-A treasure hunt event where teams will have to
                    collect points across campus and solve simple questions to
                    climb the ladder, and prove themselves as master problem
                    solvers .All the while searching for the secret stories
                    happening behind the scenes, amidst the forces that conspire
                    to bring this event to fruition .
                  </p>
                </CardItem>
                <div className="relative inline-block group mt-5 mb-5 md:mb-0 md:mx-0 mx-[132px]">
                  <div className="absolute inset-0 bg-[#D9D9D9] border-4 border-black transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="relative Altera-6 bg-[#202020] text-white border-black border-2 font-bold py-3 md:py-1 px-4 cursor-pointer md:text-2xl text-base hover:bg-[#D9D9D9] hover:text-black hover:border-black hover:border-2 whitespace-nowrap"
                  >
                    Join Now
                  </CardItem>
                </div>
              </div>
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
