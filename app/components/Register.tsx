'use client';

import useScrollReveal from '../hooks/useScrollReveal';
import { registerData } from '../data/content';

export default function Register() {
  useScrollReveal();
  return (
    <section id="register" className="min-h-[100dvh] content-center max-w-[1160px] mx-auto px-[24px] md:px-[5vw] lg:px-[7vw] py-[80px] lg:py-[120px] grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-[52px] lg:gap-[80px] items-start border-t border-rule" aria-labelledby="register-heading">
      <div className="flex flex-col">
        <div className="text-teal font-mono font-medium text-[10px] leading-none tracking-[0.12em] uppercase mb-[20px]" data-animate="tag">02 / ENTRY PASS</div>
        <h2 id="register-heading" className="text-[clamp(40px,4.8vw,70px)] font-medium leading-[0.88] tracking-[-0.07em] uppercase mb-[24px]" data-animate="mask" data-delay="1">
          ONE NIGHT.<br /><span className="text-accent">NO UNDO.</span>
        </h2>
        <p className="max-w-[440px] text-muted text-[16px] leading-[1.75] mb-[28px]" data-animate="fade" data-delay="2">
          Your pass gets you a place at the bench, a full night of hardware, food, fuel and people worth meeting.
        </p>
      </div>

      <div className="border-t-2 border-paper pt-[24px]" data-animate="fade" data-delay="2">
        <p className="text-muted font-mono font-medium text-[10px] leading-none tracking-[0.12em] uppercase mb-[16px]">REMAP 3.0 / ALL ACCESS</p>
        <div className="my-[20px] mb-[28px] text-[52px] font-medium tracking-[-0.07em] leading-none" aria-label={`${registerData.price} per person`}>
          {registerData.price} <small className="text-muted font-mono font-normal text-[10px] leading-none tracking-normal">/ person</small>
        </div>
        <a href={registerData.registerLink} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-between px-[20px] py-[13px] font-mono font-medium text-[11px] leading-none tracking-[0.04em] uppercase whitespace-nowrap bg-[length:200%_100%] bg-[100%_0] text-[#1a0810] border border-accent transition-all duration-350 ease-out hover:bg-[0_0] hover:border-[#dc3f59] active:bg-[#b02a40] active:border-[#b02a40] group/btn" style={{ backgroundImage: 'linear-gradient(90deg, #dc3f59 50%, var(--accent) 50%)' }}>
          Register now <span className="inline-block transition-transform duration-200 ease-out group-hover/btn:translate-x-[4px]" aria-hidden="true">→</span>
        </a>
        <ul className="mt-[28px] pt-[22px] border-t border-rule flex flex-col gap-0" aria-label="What's included">
          {registerData.includes.map((item, i) => (
            <li key={i} className="flex gap-[10px] py-[8px] text-muted font-mono font-normal text-[11px] leading-[1.6] tracking-[0.01em] before:content-['✓'] before:text-teal before:shrink-0">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
