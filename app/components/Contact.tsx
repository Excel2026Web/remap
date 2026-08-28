'use client';

import useScrollReveal from '../hooks/useScrollReveal';
import { contactData } from '../data/content';

export default function Contact() {
  useScrollReveal();
  return (
    <section id="contact" className="min-h-[100dvh] flex flex-col justify-center border-t border-rule bg-surface" aria-labelledby="contact-heading">
      <div className="max-w-[1160px] w-full mx-auto px-[24px] md:px-[5vw] lg:px-[7vw] py-[80px] lg:py-[120px] flex flex-col items-center text-center">
        <p className="text-teal font-mono font-medium text-[10px] leading-none tracking-[0.12em] uppercase mb-[20px]" data-animate="tag">06 / GET IN TOUCH</p>
        <h2 id="contact-heading" className="max-w-[720px] mb-[24px] text-[clamp(32px,4vw,60px)] font-medium leading-[1] tracking-[-0.07em] uppercase" data-animate="mask" data-delay="1">
          HAVE QUESTIONS ABOUT <br className="hidden md:block"/><span className="text-accent">REMAP 3.0?</span>
        </h2>
        <p className="max-w-[560px] text-muted text-[15px] leading-[1.6] mb-[64px]" data-animate="fade" data-delay="2">
          Get in touch with our event coordinators for registration assistance, technical queries or any other information.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] md:gap-[40px] lg:gap-[64px] w-full max-w-[800px]">
          {contactData.map((person, index) => (
            <div key={index} className={`flex flex-col items-center p-[24px] md:p-[40px] bg-ink border border-rule transition-all duration-350 ease-out hover:border-accent hover:-translate-y-[4px] group/card${index + 1}`} data-animate="fade" data-delay={3 + index}>
              <div className={`w-[140px] h-[140px] rounded-full overflow-hidden mb-[24px] border-2 border-rule transition-colors duration-350 group-hover/card${index + 1}:border-accent`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={person.image} alt={person.name} className={`w-full h-full object-cover filter saturate-0 contrast-[1.1] transition-all duration-500 group-hover/card${index + 1}:saturate-100`} />
              </div>
              <h3 className="text-[22px] font-medium tracking-[-0.02em] text-paper mb-[4px]">{person.name}</h3>
              <p className="text-dim font-mono text-[11px] uppercase tracking-[0.08em] mb-[24px]">{person.role}</p>
              <div className="flex flex-col gap-[12px] text-[13px] text-muted font-mono w-full">
                <a href={`tel:${person.phone.replace(/\s+/g, '')}`} className="hover:text-accent transition-colors">📞 Call</a>
                <a href={`mailto:${person.email}`} className="hover:text-accent transition-colors">✉️ Mail</a>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline underline-offset-4 decoration-rule hover:decoration-accent">LinkedIn</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
