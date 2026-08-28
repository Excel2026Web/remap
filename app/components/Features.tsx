'use client';

import { featuresData } from '../data/content';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Features() {
  useScrollReveal();

  const features = featuresData;

  const hoverColors = ['hover:border-t-teal', 'hover:border-t-accent', 'hover:border-t-[#8a7fc8]'];

  return (
    <section id="features" className="min-h-[100dvh] flex flex-col justify-center max-w-[1160px] mx-auto px-[24px] md:px-[5vw] lg:px-[7vw] py-[80px] lg:py-[120px] border-t border-rule" aria-labelledby="features-heading">
      <div className="mb-[52px]">
        <div className="text-teal font-mono font-medium text-[10px] leading-none tracking-[0.12em] uppercase mb-[18px]" data-animate="tag">01 / WHY ATTEND</div>
        <h2 id="features-heading" className="max-w-[680px] text-[clamp(40px,4.8vw,70px)] font-medium leading-[0.88] tracking-[-0.07em] uppercase" data-animate="mask" data-delay="1">
          EVERYTHING YOU NEED.<br /><span className="text-accent">ALL IN ONE PLACE.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-rule border border-rule" role="list">
        {features.map((feature, idx) => (
          <article 
            key={idx} 
            className={`relative bg-ink p-[28px_28px_36px] flex flex-col transition-all duration-350 ease-out hover:bg-surface hover:-translate-y-[4px] border-t-2 border-transparent ${hoverColors[idx % 3]} group/card`}
            role="listitem" 
            data-animate="card" 
            data-delay={idx % 3}
          >
            <span className="absolute top-[28px] right-[28px] text-dim font-mono font-normal text-[10px] leading-none tracking-[0.06em]" aria-hidden="true">{feature.num}</span>
            <div className="mt-[52px]">
              <h3 className="text-[22px] font-medium tracking-[-0.05em] leading-[1.2] mb-[14px] transition-colors duration-200 group-hover/card:text-paper">{feature.title}</h3>
              <p className="text-muted text-[14px] leading-[1.65] lg:min-h-[64px]">{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
