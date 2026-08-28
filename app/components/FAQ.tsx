'use client';

import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const faqs = [
  {
    question: "What is REMAP 3.0 and who is it for?",
    answer: "REMAP 3.0 is an All-Kerala Hardware Convention conducted as part of Excel 2026 at Model Engineering College, Thrikkakara. The programme is intended for 2nd, 3rd and 4th year B.Tech students across Kerala who are interested in hardware, CAD, prototyping and hands-on engineering. It provides participants with opportunities to learn, build, collaborate and interact with fellow hardware enthusiasts."
  },
  {
    question: "What can I expect from the overnight programme?",
    answer: "REMAP 3.0 is designed as an extended hands-on experience from 19th September to 20th September. The programme includes multiple hardware and CAD sessions, along with cultural activities and dinner. The late-night schedule features jamming and fun games, followed by a project-building session in the morning. The event also includes breakfast and an industrial visit to Kerala Startup Mission (KSUM) before concluding with the final project-building session and wrap-up."
  },
  {
    question: "What is covered in the ₹999 registration fee?",
    answer: "The registration fee of ₹999 covers the complete REMAP 3.0 experience, including the scheduled hardware and CAD sessions, project-building activities, KSUM industrial visit, overnight workspace, jamming and cultural activities, as well as lunch, dinner and breakfast. Participants will also receive guidance throughout the programme and a certificate of participation."
  },
  {
    question: "What are the hardware and CAD sessions about?",
    answer: "The convention features dedicated hardware and CAD sessions spread throughout the event. These sessions are designed to provide practical exposure to hardware development and computer-aided design, helping participants strengthen their understanding through guided, hands-on learning. The knowledge gained during these sessions can then be applied during the subsequent project-building sessions."
  },
  {
    question: "What happens during the KSUM industrial visit?",
    answer: "As part of REMAP 3.0, participants will get an opportunity to visit Kerala Startup Mission (KSUM). The visit is intended to introduce students to Kerala's startup ecosystem and give them a glimpse of how innovative ideas and technology can progress beyond the academic environment. It adds an industry and entrepreneurship perspective to the hands-on learning experience at the convention."
  },
  {
    question: "What should I bring with me for REMAP 3.0?",
    answer: "Since REMAP 3.0 includes an overnight programme and project-building activities, participants are advised to carry comfortable clothing, personal toiletries, a laptop, a notebook and any other personal essentials they may require. A laptop will be particularly useful for the CAD and project-building sessions. Participants should also come prepared for a full day-and-night of learning, collaboration and hands-on activities."
  }
];

export default function FAQ() {
  useScrollReveal();
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-[1160px] mx-auto px-[24px] md:px-[5vw] lg:px-[7vw] py-[80px] lg:py-[120px] grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-[40px] lg:gap-[60px] items-start border-t border-rule" aria-labelledby="faq-heading">
      <div className="flex flex-col">
        <div className="text-teal font-mono font-medium text-[10px] leading-none tracking-[0.12em] uppercase mb-[20px]" data-animate="tag">05 / GOOD QUESTIONS</div>
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
                className="w-full flex items-center justify-between gap-[20px] py-[22px] bg-transparent border-none text-paper font-sans font-normal text-[17px] leading-[1.35] tracking-[-0.02em] text-left transition-colors duration-200 hover:text-teal group/btn"
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
                className={`overflow-hidden transition-all duration-550 ease-out ${isOpen ? 'max-h-[300px]' : 'max-h-0'}`}
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
