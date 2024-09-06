'use client';

import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#D9D9D9] mx-5 overlay relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[1150px] h-auto rounded-3xl p-3 border">
        
        <div className="relative">
          
          <div className="absolute inset-0 z-0">
            <Image
              src="/noisy-background.jpg"
              layout="fill"
              objectFit="cover"
              alt="Overlay Image"
              className="opacity-45 rounded-2xl" 
            />
          </div>
          
          <div className="relative z-10 border-2 border-[#202020] rounded-2xl p-2">
            <CardItem translateZ={20}>
              <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-start">
                <div className="flex-1 text-center md:text-right iteams-right">
                  <CardItem
                    translateZ="20"
                    className="mx-auto md:mx-0 md:ml-auto"
                  >
                    <Image
                      src="/Group 71.svg"
                      height="144"
                      width="144"
                      className="h-[100px] w-[240px] mx-auto md:mx-0"
                      alt="Logo"
                    />
                  </CardItem>
                  
                  <CardItem
                    as="div"
                    translateZ="20"
                    className="text-black leading-relaxed text-lg max-w-sm mt-3 mukta-malar-regular text-center md:text-right"
                  >
                    <p className="shadow-text"> 
                    Cook-Off returns for its 9th edition at graVITas, where logic shines in Competitive Coding. 
                    Beyond algorithms, true skill lies in applying pure logic. 
                    Cook-Off challenges you to unleash creativity, test your limits, 
                    and face fellow coders. Enter the Colosseum of Creativity—where each 
                    line of code paves the way to triumph and legacy.
                    </p>
                  </CardItem>
                  
                  <div className="relative inline-block group mt-8 mb-5 md:mx-0 mx-[132px]">
                    <div className="absolute inset-0 bg-[#D9D9D9] border-4 border-black transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="relative bg-[#202020] text-white border-black border-2 font-bold py-1 md:px-6 px-2 cursor-pointer md:text-xl text-sm anton-regular hover:bg-[#D9D9D9] hover:text-black hover:border-black hover:border-2 whitespace-nowrap"
                    >
                      Get <span style={{ textDecoration: 'line-through', textDecorationColor: 'black' }}>Cooking</span>
                    </CardItem>
                  </div>
                </div>
                <CardItem translateZ={20} >
                <div className="border-[#202020] md:border-l-2 md:pl-2">
                  <div className="border-[#202020] border-8 p-0.5">
                    <CardItem
                      rotateX={-3}
                      rotateY={-3}
                      rotateZ={2}
                      translateZ="100"
                      className=" w-full "
                    >
                      <Image
                        src="/Cookoff_card_img.jpg"
                        height="1024"
                        width="1024"
                        className="h-auto w-[300px] sm:w-[350px] md:w-[400px] object-cover shadow-lg"
                        alt="thumbnail"
                      />
                    </CardItem>
                  </div>
                </div>
                </CardItem>
              </div>
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
