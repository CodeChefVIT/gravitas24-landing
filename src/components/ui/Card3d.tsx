"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#D9D9D9] overlay relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[1150px] h-auto rounded-3xl p-3 border">
        <div className="border-2 border-[#202020] rounded-2xl p-2">
          <CardItem translateZ={20}>
            <div className="flex flex-col-reverse items-center gap-8 space-x-0.5 md:flex-row md:items-center">
              <div className="flex-1 text-right">
                <CardItem
                  translateZ="20"
                  className="text-3xl font-bold text-neutral-600 dark:text-white text-right"
                >
                  Cook Off 9.0
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="20"
                  className="text-black leading-relaxed text-base max-w-sm mt-8 mukta-malar-regular text-right"
                >
                  <p>
                    We introduce the 9th iteration of ‘Cook-Off', the longest
                    running Competitive Coding event in graVITas. One of the
                    major weapons in any programmer’s arsenal is coding, and
                    what better way to test your mettle, than to participate in
                    the largest Competitive Coding contest in VIT’s tech-fest?
                  </p>
                </CardItem>
                <div className="relative inline-block group mt-10 justify-end">
                  <div className="absolute inset-0 bg-[#D9D9D9] border-4 border-black transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="relative bg-[#202020] text-white border-black border-2 font-bold py-2 px-8 cursor-pointer w-full text-[1.5vw] ibm-plex-mono-bold hover:bg-[#D9D9D9] hover:text-black hover:border-black hover:border-2"
                  >
                    GET COOKING
                  </CardItem>
                </div>
              </div>
              <div className="border-[#202020] md:border-l-2 pl-2 mr-auto">
                <div className="border-[#202020] border-8 p-0.5 ">
                  <CardItem
                  
                    
                    rotateX={-10}
                    rotateY={-15}
                    rotateZ={2}
                    translateZ="100"
                    className="flex-shrink-0"
                  >
                    <Image
                      src="/IMG_6012 copy 2.png"
                      height="1024"
                      width="1024"
                      className="h-auto w-[300px] sm:w-[350px] md:w-[400px] object-cover shadow-lg"
                      alt="thumbnail"
                    />
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
