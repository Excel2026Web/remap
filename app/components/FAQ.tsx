'use client';

import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

import { faqData as faqs } from '../data/content';

export default function FAQ() {
  useScrollReveal();
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="min-h-[100dvh] content-center max-w-[1160px] mx-auto px-[24px] md:px-[5vw] lg:px-[7vw] py-[80px] lg:py-[120px] grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-[32px] lg:gap-[60px] items-start border-t border-rule" aria-labelledby="faq-heading">
      <div className="flex flex-col">
        <div className="text-teal font-mono font-medium text-[10px] leading-none tracking-[0.12em] uppercase mb-[20px]" data-animate="tag">04 / GOOD QUESTIONS</div>
        <h2 id="faq-heading" className="text-[clamp(40px,4.8vw,70px)] font-medium leading-[0.88] tracking-[-0.07em] uppercase" data-animate="mask" data-delay="1">
          BEFORE YOU<br /><span className="text-accent">PLUG IN.</span>
        </h2>
      </div>

      <div className="border-t border-rule" role="list">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div 
              key={index} 
              className="border-b border-rule" 
              role="listitem" 
              data-animate="fade" 
              data-delay={index % 4}
            >
              <button
                className="w-full flex items-center justify-between gap-[16px] py-[20px] md:py-[22px] bg-transparent border-none text-paper font-sans font-normal text-[15px] md:text-[17px] leading-[1.35] tracking-[-0.02em] text-left transition-colors duration-200 hover:text-teal group/btn"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-btn-${index}`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <span className="relative w-[16px] h-[16px] shrink-0" aria-hidden="true">
                  <span className="absolute top-1/2 left-1/2 block w-[14px] h-[1px] bg-current -translate-x-1/2 -translate-y-1/2 transition-all duration-350 ease-out"></span>
                  <span className={`absolute top-1/2 left-1/2 block w-[14px] h-[1px] bg-current -translate-x-1/2 -translate-y-1/2 rotate-90 transition-all duration-350 ease-out ${isOpen ? 'rotate-0 opacity-0' : ''}`}></span>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-550 ease-out ${isOpen ? 'max-h-[400px]' : 'max-h-0'}`}
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-btn-${index}`}
              >
                <p className="pb-[22px] text-muted text-[14px] leading-[1.7] max-w-[520px]">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
