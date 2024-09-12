"use client";

import React, { useState } from "react";
import { faqs } from "@/lib/faqdata";

const FAQComponent: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const audiowide = {
    fontFamily: "AudioWide-Regular, sans-serif",
  };

  return (
    <section id="faq">
      <div className="bg-black p-6 px-10 lg:px-20 py-20 lg:py-40">
        <div style={audiowide}>
          <h1 className="mb-4 lg:mb-8 text-left text-3xl lg:text-6xl text-white font-audiowide">
            FAQs
          </h1>
        </div>

    {faqs.map((faq, index) => (
        <div style={audiowide} key={index} className="mb-4 border-b border-white pb-4" >
        <button
            className={`flex w-full items-center justify-between p-2 lg:p-4 text-left font-audiowide transition-colors duration-300 ${
            openIndex === index? "bg-white text-black" : "bg-black text-white" }`}onClick={() => toggleAnswer(index)}>

            <span className="flex items-center space-x-2">
            
            <span className={`text-xl lg:text-4xl font-audiowide transition-colors duration-300 ${openIndex === index ? "text-black" : "text-white"}`}>
                  Q.
            </span>
            <span className={`font-audiowide text-base lg:text-xl pl-4 lg:pl-8 transition-colors duration-300 ${openIndex === index ? "text-black" : "text-white" }`}>
                  {faq.question}
            </span>
            </span>
            <span className={`transform text-2xl lg:text-4xl transition-transform duration-300 ${ openIndex === index ? "rotate-180" : ""}`}>
                {openIndex === index ? "x" : "+"} 
            </span>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-screen" : "max-h-0"}`}>
        <div className="p-4 pl-32 text-black bg-white"> 
                {faq.answer}
        </div>
        </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default FAQComponent;