"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function ClueminatiMobileCard() {
  return (
    <div className="inter-var">
      {/* Responsive Card Body */}
      <div className="bg-[#D9D9D9] mx-auto relative w-full max-w-[350px] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1150px] h-auto rounded-3xl p-1 md:p-3 border dark:bg-black dark:border-white/[0.2] border-black/[0.1]">
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <Image
            src="/noisy-background.jpg"
            layout="fill"
            objectFit="cover"
            className="opacity-45"
            alt="Overlay"
          />
        </div>

        <div className="border-2 border-[#202020] rounded-2xl p-5 relative z-10">
          <div className="flex flex-col items-center md:items-start gap-4 mt-2 md:mt-auto md:flex-row md:space-x-2">
            <div className="border-[#202020] md:border-r-2 md:pr-2">
              <div className="border-[#202020] border-8 p-0.5 overflow-hidden">
                <div className="flex-shrink-0">
                  <Image
                    src="/Clueminati_card_image.jpg"
                    height={1024}
                    width={1024}
                    className="h-auto w-full sm:w-[300px] md:w-[350px] lg:w-[400px] object-cover shadow-lg"
                    alt="thumbnail"
                  />
                </div>
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

              <div className="text-black leading-relaxed text-lg max-w-sm uber-move text-center md:text-left">
                <p>
                  New ver-A treasure hunt event where teams will have to collect
                  points across campus and solve simple questions to climb the
                  ladder, and prove themselves as master problem solvers. All
                  the while searching for the secret stories happening behind
                  the scenes, amidst the forces that conspire to bring this
                  event to fruition.
                </p>
              </div>

              <Link
                href="https://gravitas.vit.ac.in/events/25adae11-f820-421a-9a82-222945de9010"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block group mt-5 mb-5 md:mb-0"
              >
                <div className="absolute inset-0 bg-[#D9D9D9] border-4 border-black"></div>
                <button className="relative Altera-6 bg-[#202020] text-white border-black border-2 font-bold py-3 md:py-1 px-4 cursor-pointer md:text-2xl text-base hover:bg-[#D9D9D9] hover:text-black hover:border-black hover:border-2 whitespace-nowrap">
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
