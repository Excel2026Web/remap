'use client';

import useScrollReveal from '../hooks/useScrollReveal';

export default function Features() {
  useScrollReveal();
  return (
    <>
      {/* About Section */}
      <section id="about" className="max-w-[1160px] mx-auto px-[24px] md:px-[5vw] lg:px-[7vw] py-[80px] lg:py-[120px] border-t border-rule" aria-labelledby="about-heading">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(300px,420px)_1fr] gap-[32px] lg:gap-[64px] items-start">
          <div className="flex flex-col" data-animate="fade">
            <div className="text-teal font-mono font-medium text-[10px] leading-none tracking-[0.12em] uppercase pt-[4px] mb-[24px]" data-animate="tag">01 / THE SIGNAL</div>
            <div className="relative rounded-[4px] overflow-hidden border border-rule bg-surface shadow-[0_20px_40px_rgba(0,0,0,0.4)] group/card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/about.jpg"
                alt="Hardware workbench soldering macro"
                className="block w-full h-[240px] lg:h-[320px] object-cover filter saturate-[0.85] contrast-[1.05] brightness-90 transition-all duration-600 ease-out group-hover/card:scale-[1.03] group-hover/card:saturate-100 group-hover/card:contrast-[1.08] group-hover/card:brightness-[0.98]"
                loading="lazy"
              />
              <div className="absolute bottom-[12px] left-[12px] inline-flex items-center gap-[8px] p-[6px_12px] bg-[#07080a]/75 backdrop-blur-[8px] border border-[#f2f0ea]/10 rounded-[3px] font-mono font-medium text-[9px] leading-none tracking-[0.1em] text-teal">
                <span className="w-[5px] h-[5px] rounded-full bg-accent shadow-[0_0_6px_var(--accent)]"></span>
                <span>BENCH_LIVE // MEC LAB 04</span>
              </div>
            </div>
          </div>

          <div className="max-w-[640px]">
            <h2 id="about-heading" className="max-w-[640px] mb-[28px] text-[clamp(40px,4.8vw,70px)] font-medium leading-[0.88] tracking-[-0.07em] uppercase" data-animate="mask" data-delay="1">
              WHERE IDEAS GET<br /><span className="text-accent">THEIR HANDS DIRTY.</span>
            </h2>
            <p className="max-w-[520px] text-muted text-[16px] leading-[1.75] mb-[28px]" data-animate="fade" data-delay="2">
              REMAP is not a conference. It is a living workbench: one electric night of sensors,
              solder, half-formed ideas and the people who know how to make them real.
            </p>
            <a href="#register" className="inline-flex items-center gap-[10px] text-paper font-mono font-medium text-[11px] leading-none tracking-[0.04em] uppercase pb-[4px] border-b border-teal transition-colors duration-200 hover:text-teal group/link" data-animate="fade" data-delay="3">
              See what&apos;s on the bench <span className="inline-block text-teal transition-transform duration-200 ease-out group-hover/link:translate-x-[3px]" aria-hidden="true">→</span>
            </a>

            <div className="grid grid-cols-3 gap-[12px] lg:gap-[20px] mt-[36px] lg:mt-[48px] pt-[24px] lg:pt-[36px] border-t border-rule" data-animate="fade" data-delay="4">
              <div className="flex flex-col gap-[4px]">
                <span className="font-sans font-semibold text-[24px] leading-none text-paper tracking-[-0.03em]">24H</span>
                <span className="font-mono font-normal text-[11px] leading-[1.4] text-dim tracking-[0.02em]">Non-stop sprint</span>
              </div>
              <div className="flex flex-col gap-[4px]">
                <span className="font-sans font-semibold text-[24px] leading-none text-paper tracking-[-0.03em]">100+</span>
                <span className="font-mono font-normal text-[11px] leading-[1.4] text-dim tracking-[0.02em]">Hardware hackers</span>
              </div>
              <div className="flex flex-col gap-[4px]">
                <span className="font-sans font-semibold text-[24px] leading-none text-paper tracking-[-0.03em]">₹50K</span>
                <span className="font-mono font-normal text-[11px] leading-[1.4] text-dim tracking-[0.02em]">Prize pool</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="max-w-[1160px] mx-auto px-[24px] md:px-[5vw] lg:px-[7vw] py-[80px] lg:py-[120px] border-t border-rule" aria-labelledby="tracks-heading">
        <div className="mb-[52px]">
          <div className="text-teal font-mono font-medium text-[10px] leading-none tracking-[0.12em] uppercase mb-[18px]" data-animate="tag">02 / PICK A TRACK</div>
          <h2 id="tracks-heading" className="max-w-[680px] text-[clamp(40px,4.8vw,70px)] font-medium leading-[0.88] tracking-[-0.07em] uppercase" data-animate="mask" data-delay="1">
            MAKE NOISE.<br /><span className="text-accent">LEAVE A MARK.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr_1fr] gap-[1px] bg-rule border border-rule" role="list">
          <article className="relative bg-ink p-[28px_28px_36px] flex flex-col border-t-2 border-transparent lg:border-l lg:border-l-transparent transition-all duration-350 ease-out hover:bg-surface hover:-translate-y-[4px] hover:border-t-teal lg:hover:translate-y-[-4px] group/card1" role="listitem" data-animate="card" data-delay="0">
            <span className="absolute top-[28px] right-[28px] text-dim font-mono font-normal text-[10px] leading-none tracking-[0.06em]" aria-hidden="true">01</span>
            <div className="mt-[52px]">
              <p className="mb-[16px] text-dim font-mono font-medium text-[10px] leading-none tracking-[0.12em] uppercase">HARDWARE LAB</p>
              <h3 className="text-[26px] font-medium tracking-[-0.05em] leading-[1.1] mb-[14px] transition-colors duration-200 group-hover/card1:text-paper">Touch the metal.</h3>
              <p className="text-muted text-[14px] leading-[1.65] mb-[24px] lg:min-h-[64px]">Prototype with sensors, microcontrollers and plenty of sharp opinions.</p>
              <a href="#register" className="inline-flex items-center gap-[8px] text-paper font-mono font-medium text-[11px] leading-none tracking-[0.04em] uppercase pb-[4px] border-b border-rule transition-colors duration-200 hover:text-teal hover:border-teal group/link">Claim a station <span className="inline-block text-teal transition-transform duration-200 ease-out group-hover/link:translate-x-[3px]" aria-hidden="true">→</span></a>
            </div>
          </article>

          <article className="relative bg-ink p-[28px_28px_36px] flex flex-col border-t-2 border-transparent lg:border-l lg:border-l-transparent transition-all duration-350 ease-out hover:bg-surface hover:-translate-y-[4px] hover:border-t-accent lg:hover:translate-y-[-4px] group/card2" role="listitem" data-animate="card" data-delay="1">
            <span className="absolute top-[28px] right-[28px] text-dim font-mono font-normal text-[10px] leading-none tracking-[0.06em]" aria-hidden="true">02</span>
            <div className="mt-[52px]">
              <p className="mb-[16px] text-dim font-mono font-medium text-[10px] leading-none tracking-[0.12em] uppercase">BUILD SPRINT</p>
              <h3 className="text-[26px] font-medium tracking-[-0.05em] leading-[1.1] mb-[14px] transition-colors duration-200 group-hover/card2:text-paper">Make it move.</h3>
              <p className="text-muted text-[14px] leading-[1.65] mb-[24px] lg:min-h-[64px]">Turn a messy first thought into a real, testable thing before sunrise.</p>
              <a href="#register" className="inline-flex items-center gap-[8px] text-paper font-mono font-medium text-[11px] leading-none tracking-[0.04em] uppercase pb-[4px] border-b border-rule transition-colors duration-200 hover:text-teal hover:border-teal group/link">Join the sprint <span className="inline-block text-teal transition-transform duration-200 ease-out group-hover/link:translate-x-[3px]" aria-hidden="true">→</span></a>
            </div>
          </article>

          <article className="relative bg-ink p-[28px_28px_36px] flex flex-col border-t-2 border-transparent lg:border-l lg:border-l-transparent transition-all duration-350 ease-out hover:bg-surface hover:-translate-y-[4px] hover:border-t-[#8a7fc8] lg:hover:translate-y-[-4px] group/card3" role="listitem" data-animate="card" data-delay="2">
            <span className="absolute top-[28px] right-[28px] text-dim font-mono font-normal text-[10px] leading-none tracking-[0.06em]" aria-hidden="true">03</span>
            <div className="mt-[52px]">
              <p className="mb-[16px] text-dim font-mono font-medium text-[10px] leading-none tracking-[0.12em] uppercase">OPEN SHOWCASE</p>
              <h3 className="text-[26px] font-medium tracking-[-0.05em] leading-[1.1] mb-[14px] transition-colors duration-200 group-hover/card3:text-paper">Break the silence.</h3>
              <p className="text-muted text-[14px] leading-[1.65] mb-[24px] lg:min-h-[64px]">Put your wildest creation under the lights and show what it can do.</p>
              <a href="#register" className="inline-flex items-center gap-[8px] text-paper font-mono font-medium text-[11px] leading-none tracking-[0.04em] uppercase pb-[4px] border-b border-rule transition-colors duration-200 hover:text-teal hover:border-teal group/link">Bring your project <span className="inline-block text-teal transition-transform duration-200 ease-out group-hover/link:translate-x-[3px]" aria-hidden="true">→</span></a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
