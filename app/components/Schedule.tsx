'use client';

import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { scheduleData } from '../data/content';

export default function Schedule() {
  useScrollReveal();
  const [activeTab, setActiveTab] = useState<'day1' | 'day2'>('day1');

  const handleTabChange = (tab: 'day1' | 'day2') => {
    setActiveTab(tab);
    
    setTimeout(() => {
      const panel = document.getElementById(`panel-${tab}`);
      if (panel) {
        const entries = panel.querySelectorAll('[data-animate="timeline"]');
        entries.forEach((entry) => {
          entry.classList.remove('is-visible');
          void (entry as HTMLElement).offsetWidth; 
          entry.classList.add('is-visible');
        });
      }
    }, 20);
  };

  const day1Schedule = scheduleData.day1;
  const day2Schedule = scheduleData.day2;

  const renderSchedule = (schedule: typeof day1Schedule) => (
    <div className="w-full overflow-x-auto -mx-[0px]">
      <table className="w-full min-w-[520px] border-collapse">
        <thead>
          <tr className="border-b border-rule">
            <th className="text-dim font-mono text-[10px] uppercase tracking-[0.1em] text-left py-[14px] pr-[16px] w-[160px] font-normal">Time</th>
            <th className="text-dim font-mono text-[10px] uppercase tracking-[0.1em] text-left py-[14px] px-[16px] font-normal">Activity</th>
            <th className="text-dim font-mono text-[10px] uppercase tracking-[0.1em] text-left py-[14px] pl-[16px] w-[160px] font-normal">Venue</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, i) => (
            <tr
              key={i}
              className="border-b border-rule transition-colors duration-200 hover:bg-surface/30 group"
              data-animate="timeline"
              data-delay={Math.min(i, 5)}
            >
              <td className="text-muted font-mono font-normal text-[12px] leading-snug py-[20px] pr-[16px] align-top whitespace-nowrap">
                {item.time}
              </td>
              <td className="text-paper text-[14px] md:text-[15px] leading-[1.6] whitespace-pre-line font-medium py-[20px] px-[16px] align-top">
                {item.activity}
              </td>
              <td className="text-dim text-[12px] md:text-[13px] whitespace-pre-line font-mono py-[20px] pl-[16px] align-top">
                {item.venue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <section id="schedule" className="max-w-[1160px] mx-auto px-[24px] md:px-[5vw] lg:px-[7vw] py-[80px] lg:py-[120px] border-t border-rule" aria-labelledby="schedule-heading">
      <div className="mb-[52px]">
        <div className="text-teal font-mono font-medium text-[10px] leading-none tracking-[0.12em] uppercase mb-[18px]" data-animate="tag">04 / RUN OF SHOW</div>
        <h2 id="schedule-heading" className="max-w-[680px] text-[clamp(40px,4.8vw,70px)] font-medium leading-[0.88] tracking-[-0.07em] uppercase" data-animate="mask" data-delay="1">
          EVENT<br /><span className="text-accent">SCHEDULE.</span>
        </h2>
      </div>

      <div
        className="flex gap-[4px] mb-[32px]"
        role="tablist"
        aria-label="Event schedule by day"
        data-animate="fade"
        data-delay="2"
      >
        <button
          className={`px-[16px] py-[10px] border font-mono font-medium text-[10px] leading-none tracking-[0.08em] uppercase transition-colors duration-200 ${
            activeTab === 'day1' 
              ? 'bg-paper text-ink border-paper' 
              : 'bg-transparent text-muted border-transparent hover:text-paper hover:border-rule'
          }`}
          role="tab"
          id="tab-day1"
          aria-selected={activeTab === 'day1'}
          aria-controls="panel-day1"
          onClick={() => handleTabChange('day1')}
          tabIndex={activeTab === 'day1' ? 0 : -1}
        >DAY 1: 19th Sep</button>
        
        <button
          className={`px-[16px] py-[10px] border font-mono font-medium text-[10px] leading-none tracking-[0.08em] uppercase transition-colors duration-200 ${
            activeTab === 'day2' 
              ? 'bg-paper text-ink border-paper' 
              : 'bg-transparent text-muted border-transparent hover:text-paper hover:border-rule'
          }`}
          role="tab"
          id="tab-day2"
          aria-selected={activeTab === 'day2'}
          aria-controls="panel-day2"
          onClick={() => handleTabChange('day2')}
          tabIndex={activeTab === 'day2' ? 0 : -1}
        >DAY 2: 20th Sep</button>
      </div>

      <div className="relative border-t border-rule">
        <div
          className={activeTab !== 'day1' ? 'hidden' : ''}
          id="panel-day1"
          role="tabpanel"
          aria-labelledby="tab-day1"
          hidden={activeTab !== 'day1'}
        >
          {renderSchedule(day1Schedule)}
        </div>

        <div
          className={activeTab !== 'day2' ? 'hidden' : ''}
          id="panel-day2"
          role="tabpanel"
          aria-labelledby="tab-day2"
          hidden={activeTab !== 'day2'}
        >
          {renderSchedule(day2Schedule)}
        </div>
      </div>
    </section>
  );
}
