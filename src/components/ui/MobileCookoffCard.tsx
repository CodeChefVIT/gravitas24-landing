"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function CookoffCardMobile() {
  return (
    <div className="inter-var mb-20">
      <div className="bg-[#D9D9D9] mx-auto relative w-full max-w-[350px] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1150px] h-auto rounded-3xl p-1 md:p-3 border dark:bg-black dark:border-white/[0.2] border-black/[0.1]">
        <div className="relative">
          <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
            <Image
              src="/noisy-background.jpg"
              layout="fill"
              objectFit="cover"
              alt="Overlay Image"
              className="opacity-45 rounded-2xl"
            />
          </div>

          <div className="relative z-10 border-2 border-[#202020] rounded-2xl p-5">
            <div className="flex flex-col-reverse items-center gap-4 md:flex-row md:items-start">
              <div className="flex-1 text-center md:text-right">
                <div className="mx-auto md:mx-0 md:ml-auto">
                  <Image
                    src="/Group 71.svg"
                    height={144}
                    width={144}
                    className="h-[100px] w-[240px] mx-auto md:mx-0"
                    alt="Logo"
                  />
                </div>

                <div className="text-black leading-relaxed text-lg max-w-sm mt-3 mukta-malar-regular text-center md:text-right">
                  <p className="shadow-text">
                    Cook-Off returns for its 9th edition at graVITas, where
                    logic shines in Competitive Coding. Beyond algorithms, true
                    skill lies in applying pure logic. Cook-Off challenges you
                    to unleash creativity, test your limits, and face fellow
                    coders. Enter the Colosseum of Creativity—where each line of
                    code paves the way to triumph and legacy.
                  </p>
                </div>

                <Link
                  href="https://gravitas.vit.ac.in/events/a1175a7a-750f-4c66-8e08-429c9e4768d7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block group mt-8 mb-5"
                >
                  <div className="absolute inset-0 bg-[#D9D9D9] border-4 border-black"></div>
                  <button className="relative bg-[#202020] text-white border-black border-2 font-bold py-3 md:py-1 md:px-6 px-3 cursor-pointer md:text-xl text-base anton-regular hover:bg-[#D9D9D9] hover:text-black hover:border-black hover:border-2 whitespace-nowrap">
                    Get{" "}
                    <span
                      style={{
                        textDecoration: "line-through",
                        textDecorationColor: "black",
                      }}
                    >
                      Cooking
                    </span>
                  </button>
                </Link>
              </div>

              <div className="border-[#202020] md:border-l-2 md:pl-2">
                <div className="border-[#202020] border-8 p-0.5 overflow-hidden">
                  <div className="w-full">
                    <Image
                      src="/Cookoff_card_img.jpg"
                      height={1024}
                      width={1024}
                      className="h-auto w-full sm:w-[300px] md:w-[350px] lg:w-[400px] object-cover shadow-lg"
                      alt="thumbnail"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
