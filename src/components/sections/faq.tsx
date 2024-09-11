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
      <div className="bg-black p-6 md:px-20 py-40">
        <div style={audiowide}>
          <h1 className="mb-2 text-left text-5xl md:text-7xl text-white font-audiowide">
            FAQs
          </h1>
        </div>

        {faqs.map((faq, index) => (
          <div
            style={audiowide}
            key={index}
            className="mb-4 border-b border-white pb-4"
          >
            <button
              className={`flex w-full items-center justify-between p-4 text-left font-audiowide transition-colors duration-300 ${
                openIndex === index ? "bg-white text-black" : "bg-black text-white"
              }`}
              onClick={() => toggleAnswer(index)}
            >
              <span className="flex items-center space-x-2">
                <span
                  className={`text-4xl md:text-6xl font-audiowide transition-colors duration-300 ${
                    openIndex === index ? "text-black" : "text-white"
                  }`}
                >
                  Q.
                </span>
                <span
                  className={`font-audiowide text-lg md:text-2xl pl-4 md:pl-8 transition-colors duration-300 ${
                    openIndex === index ? "text-black" : "text-white"
                  }`}
                >
                  {faq.question}
                </span>
              </span>
              <span
                className={`transform text-3xl md:text-5xl transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                {openIndex === index ? "x" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="p-4 pl-12 md:pl-32 text-black bg-white">
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
