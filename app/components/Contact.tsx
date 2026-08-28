'use client';

import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact() {
  useScrollReveal();
  return (
    <section id="contact" className="border-t border-rule bg-surface" aria-labelledby="final-heading">
      <div className="max-w-[1160px] mx-auto px-[24px] md:px-[5vw] lg:px-[7vw] py-[130px] flex flex-col items-center text-center">
        <p className="text-teal font-mono font-medium text-[10px] leading-none tracking-[0.12em] uppercase mb-[20px]" data-animate="tag">THE BENCH IS WAITING</p>
        <h2 id="final-heading" className="max-w-[520px] mb-[36px] text-[clamp(40px,4.8vw,70px)] font-medium leading-[0.88] tracking-[-0.07em] uppercase" data-animate="mask" data-delay="1">
          LET&apos;S BUILD<br /><span className="text-accent">SOMETHING LOUD.</span>
        </h2>
        <a href="#register" className="inline-flex items-center gap-[20px] px-[20px] py-[13px] font-mono font-medium text-[11px] leading-none tracking-[0.04em] uppercase whitespace-nowrap bg-[length:200%_100%] bg-[100%_0] text-[#1a0810] border border-accent transition-all duration-350 ease-out hover:bg-[0_0] hover:border-[#dc3f59] active:bg-[#b02a40] active:border-[#b02a40] group/btn" data-animate="fade" data-delay="2" style={{ backgroundImage: 'linear-gradient(90deg, #dc3f59 50%, var(--accent) 50%)' }}>
          Get your pass <span className="inline-block transition-transform duration-200 ease-out group-hover/btn:translate-x-[4px]" aria-hidden="true">→</span>
        </a>
        <p className="mt-[22px] text-dim font-mono font-normal text-[11px] leading-none" data-animate="fade" data-delay="3">
          Questions? <a href="mailto:hello@remap.org" className="text-teal transition-colors duration-200 hover:text-paper">hello@remap.org</a>
        </p>
      </div>
    </section>
  );
}
