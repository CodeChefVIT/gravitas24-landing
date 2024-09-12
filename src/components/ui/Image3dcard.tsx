"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";


export function Imagecard({mainimage}: {mainimage: string}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#D9D9D9] md:block hidden mx-5 border-black border-2 p-2 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  w-xl sm:w-[880px] h-auto rounded-3xl md:p-3">
        
        <div className="absolute inset-0 z-0">
          <Image
            src="/noisy-background.jpg"
            layout="fill"
            objectFit="cover"
            alt="Overlay Image"
            className="opacity-45 rounded-3xl"
          />
        </div>

        <div className="relative border-black border-2 p-2 rounded-xl z-10">
          <CardItem translateZ="100" className="w-full h-full border-8 border-black p-0.5">
            <Image
              src={`/${mainimage}`}
              height="1024"
              width="1024"
              className="h-96 w-full object-cover group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </div>
        
      </CardBody>
    </CardContainer>
  );
}
