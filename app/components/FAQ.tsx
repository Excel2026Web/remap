'use client';

import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const faqs = [
  {
    question: "Do I need prior hardware experience?",
    answer: "Not at all. Bring your curiosity; our mentors and track leads will help you find a useful starting point."
  },
  {
    question: "What should I bring?",
    answer: "A laptop if you have one, a charger, and any small project you want to work on. Core build tools are provided."
  },
  {
    question: "Can I come alone?",
    answer: "Absolutely. Many of the best builds start with a stranger at the next workbench."
  },
  {
    question: "Is the venue accessible overnight?",
    answer: "Yes. The venue is staffed throughout the event and has quiet zones, food, first aid and secure bag storage."
  }
];

export default function FAQ() {
  useScrollReveal();
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section section-faq" aria-labelledby="faq-heading">
      <div className="faq-left">
        <div className="section-tag" data-animate="tag">05 / GOOD QUESTIONS</div>
        <h2 id="faq-heading" data-animate="mask" data-delay="1">
          BEFORE YOU<br /><span>PLUG IN.</span>
        </h2>
      </div>

      <div className="faq-list" role="list">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div 
              key={index} 
              className="faq-item" 
              role="listitem" 
              data-animate="fade" 
              data-delay={index % 4}
            >
              <button
                className="faq-question"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-btn-${index}`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  <span className="faq-icon-bar"></span>
                  <span className="faq-icon-bar faq-icon-bar--v"></span>
                </span>
              </button>
              <div
                className={`faq-answer ${isOpen ? 'open' : ''}`}
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-btn-${index}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
