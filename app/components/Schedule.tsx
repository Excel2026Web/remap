'use client';

import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Schedule() {
  useScrollReveal();
  const [activeTab, setActiveTab] = useState<'oct18' | 'oct19'>('oct18');

  // Trigger scroll reveal animations specifically inside the newly shown tab
  const handleTabChange = (tab: 'oct18' | 'oct19') => {
    setActiveTab(tab);
    
    // Slight delay to allow React to render the panel before re-triggering animations
    setTimeout(() => {
      const panel = document.getElementById(`panel-${tab}`);
      if (panel) {
        const entries = panel.querySelectorAll('[data-animate="timeline"]');
        entries.forEach((entry) => {
          entry.classList.remove('is-visible');
          // Force reflow
          void (entry as HTMLElement).offsetWidth; 
          entry.classList.add('is-visible');
        });
      }
    }, 20);
  };

  return (
    <section id="schedule" className="max-w-[1160px] mx-auto px-[24px] md:px-[5vw] lg:px-[7vw] py-[80px] lg:py-[120px] border-t border-rule" aria-labelledby="schedule-heading">
      <div className="mb-[52px]">
        <div className="text-teal font-mono font-medium text-[10px] leading-none tracking-[0.12em] uppercase mb-[18px]" data-animate="tag">04 / RUN OF SHOW</div>
        <h2 id="schedule-heading" className="max-w-[680px] text-[clamp(40px,4.8vw,70px)] font-medium leading-[0.88] tracking-[-0.07em] uppercase" data-animate="mask" data-delay="1">
          KEEP THE<br /><span className="text-accent">CURRENT FLOWING.</span>
        </h2>
      </div>

      <div
        className="flex gap-[4px] mb-[4px]"
        role="tablist"
        aria-label="Event schedule by day"
        data-animate="fade"
        data-delay="2"
      >
        <button
          className={`px-[16px] py-[10px] border font-mono font-medium text-[10px] leading-none tracking-[0.08em] uppercase transition-colors duration-200 ${
            activeTab === 'oct18' 
              ? 'bg-paper text-ink border-paper' 
              : 'bg-transparent text-muted border-transparent hover:text-paper hover:border-rule'
          }`}
          role="tab"
          id="tab-oct18"
          aria-selected={activeTab === 'oct18'}
          aria-controls="panel-oct18"
          onClick={() => handleTabChange('oct18')}
          tabIndex={activeTab === 'oct18' ? 0 : -1}
        >SAT / 18 OCT</button>
        
        <button
          className={`px-[16px] py-[10px] border font-mono font-medium text-[10px] leading-none tracking-[0.08em] uppercase transition-colors duration-200 ${
            activeTab === 'oct19' 
              ? 'bg-paper text-ink border-paper' 
              : 'bg-transparent text-muted border-transparent hover:text-paper hover:border-rule'
          }`}
          role="tab"
          id="tab-oct19"
          aria-selected={activeTab === 'oct19'}
          aria-controls="panel-oct19"
          onClick={() => handleTabChange('oct19')}
          tabIndex={activeTab === 'oct19' ? 0 : -1}
        >SUN / 19 OCT</button>
      </div>

      <div className="relative">
        {/* OCT 18 PANEL */}
        <div
          className={`border-t border-rule ${activeTab !== 'oct18' ? 'hidden' : ''}`}
          id="panel-oct18"
          role="tabpanel"
          aria-labelledby="tab-oct18"
          hidden={activeTab !== 'oct18'}
        >
          <div className="grid grid-cols-[110px_24px_1fr] items-center py-[26px] border-b border-rule gap-0 transition-colors duration-200" data-animate="timeline" data-delay="0">
            <time dateTime="2026-10-18T18:00" className="text-muted font-mono font-normal text-[11px] leading-none tracking-[0.04em]">18:00</time>
            <span className="w-[6px] h-[6px] rounded-full bg-teal justify-self-center" aria-hidden="true"></span>
            <div>
              <h3 className="text-[16px] font-normal tracking-[-0.025em] text-paper">Doors open / warm-up</h3>
              <p className="mt-[3px] text-dim font-mono font-normal text-[11px] leading-none">Hangar A</p>
            </div>
          </div>
          <div className="grid grid-cols-[110px_24px_1fr] items-center py-[26px] border-b border-rule gap-0 transition-colors duration-200" data-animate="timeline" data-delay="1">
            <time dateTime="2026-10-18T19:00" className="text-muted font-mono font-normal text-[11px] leading-none tracking-[0.04em]">19:00</time>
            <span className="w-[6px] h-[6px] rounded-full bg-teal justify-self-center" aria-hidden="true"></span>
            <div>
              <h3 className="text-[16px] font-normal tracking-[-0.025em] text-paper">Opening transmission</h3>
              <p className="mt-[3px] text-dim font-mono font-normal text-[11px] leading-none">Main floor</p>
            </div>
          </div>
          <div className="grid grid-cols-[110px_24px_1fr] items-center py-[26px] border-b border-rule gap-0 transition-colors duration-200" data-animate="timeline" data-delay="2">
            <time dateTime="2026-10-18T20:00" className="text-muted font-mono font-normal text-[11px] leading-none tracking-[0.04em]">20:00</time>
            <span className="w-[6px] h-[6px] rounded-full bg-teal justify-self-center" aria-hidden="true"></span>
            <div>
              <h3 className="text-[16px] font-normal tracking-[-0.025em] text-paper">Build sprint begins</h3>
              <p className="mt-[3px] text-dim font-mono font-normal text-[11px] leading-none">All workbenches</p>
            </div>
          </div>
          <div className="grid grid-cols-[110px_24px_1fr] items-center py-[26px] border-b border-rule gap-0 transition-colors duration-200" data-animate="timeline" data-delay="3">
            <time dateTime="2026-10-18T23:30" className="text-muted font-mono font-normal text-[11px] leading-none tracking-[0.04em]">23:30</time>
            <span className="w-[6px] h-[6px] rounded-full bg-accent justify-self-center" aria-hidden="true"></span>
            <div>
              <h3 className="text-[16px] font-normal tracking-[-0.025em] text-paper">Midnight check-in</h3>
              <p className="mt-[3px] text-dim font-mono font-normal text-[11px] leading-none">Fuel station</p>
            </div>
          </div>
        </div>

        {/* OCT 19 PANEL */}
        <div
          className={`border-t border-rule ${activeTab !== 'oct19' ? 'hidden' : ''}`}
          id="panel-oct19"
          role="tabpanel"
          aria-labelledby="tab-oct19"
          hidden={activeTab !== 'oct19'}
        >
          <div className="grid grid-cols-[110px_24px_1fr] items-center py-[26px] border-b border-rule gap-0 transition-colors duration-200" data-animate="timeline" data-delay="0">
            <time dateTime="2026-10-19T01:00" className="text-muted font-mono font-normal text-[11px] leading-none tracking-[0.04em]">01:00</time>
            <span className="w-[6px] h-[6px] rounded-full bg-teal justify-self-center" aria-hidden="true"></span>
            <div>
              <h3 className="text-[16px] font-normal tracking-[-0.025em] text-paper">Debugging hours</h3>
              <p className="mt-[3px] text-dim font-mono font-normal text-[11px] leading-none">All workbenches</p>
            </div>
          </div>
          <div className="grid grid-cols-[110px_24px_1fr] items-center py-[26px] border-b border-rule gap-0 transition-colors duration-200" data-animate="timeline" data-delay="1">
            <time dateTime="2026-10-19T06:00" className="text-muted font-mono font-normal text-[11px] leading-none tracking-[0.04em]">06:00</time>
            <span className="w-[6px] h-[6px] rounded-full bg-teal justify-self-center" aria-hidden="true"></span>
            <div>
              <h3 className="text-[16px] font-normal tracking-[-0.025em] text-paper">Tools down</h3>
              <p className="mt-[3px] text-dim font-mono font-normal text-[11px] leading-none">Main floor</p>
            </div>
          </div>
          <div className="grid grid-cols-[110px_24px_1fr] items-center py-[26px] border-b border-rule gap-0 transition-colors duration-200" data-animate="timeline" data-delay="2">
            <time dateTime="2026-10-19T07:00" className="text-muted font-mono font-normal text-[11px] leading-none tracking-[0.04em]">07:00</time>
            <span className="w-[6px] h-[6px] rounded-full bg-accent justify-self-center" aria-hidden="true"></span>
            <div>
              <h3 className="text-[16px] font-normal tracking-[-0.025em] text-paper">Show &amp; tell</h3>
              <p className="mt-[3px] text-dim font-mono font-normal text-[11px] leading-none">Demo stage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
