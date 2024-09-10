"use client";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import React, { useState } from "react";
import { faqs } from "@/lib/faqdata";


const FAQComponent: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const audiowide = {
    fontFamily: 'AudioWide-Regular, sans-serif',
  };

  return (
    <section id="faq">
      <div className="bg-black rounded-lg p-6 px-20 py-40">
        <div style={audiowide}>
          <h1 className="mb-2 text-left text-7xl text-white font-audiowide">
            FAQs
          </h1>
        </div>

        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className={`flex w-full items-center justify-between rounded-lg p-4 text-left font-audiowide transition-colors duration-300 ${
                openIndex === index ? "text-gray-600" : "text-violet-600"
              }`}
              onClick={() => toggleAnswer(index)}>
              <span
                className={`font-bold transition-colors duration-300 ${
                  openIndex === index ? "text-[#9e7fdf]" : "text-gray-500"
                }`}>
                {faq.question}
              </span>
              <span
                className={`transform text-2xl transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}>
                {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-screen" : "max-h-0"
              }`}>
              <div className="p-4 text-black">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQComponent;
