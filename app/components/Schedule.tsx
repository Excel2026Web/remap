'use client';

import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

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

  const day1Schedule = [
    { time: '1:00 PM - 2:00 PM', activity: 'Registration', venue: 'Front Desk' },
    { time: '2:00 PM - 2:30 PM', activity: 'Inauguration', venue: 'Internal Auditorium' },
    { time: '2:30 PM - 3:30 PM', activity: 'Icebreaking Session', venue: 'Elga' },
    { time: '3:30 PM - 4:00 PM', activity: 'Tea Break', venue: 'CASA' },
    { time: '4:00 PM - 6:00 PM', activity: 'Hardware Session 1', venue: 'SDPK & Media Hall' },
    { time: '6:00 PM - 6:10 PM', activity: 'Break', venue: '' },
    { time: '6:10 PM - 7:30 PM', activity: 'CAD Session 1', venue: 'SDPK & Media Hall' },
    { time: '7:30 PM - 7:30 PM', activity: 'Break', venue: '' },
    { time: '7:30 PM - 9:30 PM', activity: 'Hardware Session 2', venue: 'SDPK & Media Hall' },
    { time: '9:30 PM - 11:30 PM', activity: 'Bharatham / Cultural Activities & Dinner', venue: 'Amphitheatre, Rooms 210 & 209' },
    { time: '11:30 PM - 12:00 AM', activity: 'CAD Session 2', venue: 'SDPK & Media Hall' },
  ];

  const day2Schedule = [
    { time: '12:00 AM - 1:00 AM', activity: 'CAD Session 3', venue: 'SDPK & Media Hall' },
    { time: '1:00 AM - 1:10 AM', activity: 'Break', venue: '' },
    { time: '1:10 AM - 3:00 AM', activity: 'Hardware Session 3', venue: 'SDPK & Media Hall' },
    { time: '3:00 AM - 5:00 AM', activity: 'Break, Jamming & Fun Games', venue: 'Amphitheatre' },
    { time: '5:00 AM - 7:30 AM', activity: 'Project Building Session', venue: 'SDPK & Media Hall' },
    { time: '7:30 AM - 8:30 AM', activity: 'Breakfast', venue: 'Rooms 210 & 209' },
    { time: '8:30 AM - 10:00 AM', activity: 'Project Building Session', venue: 'SDPK & Media Hall' },
    { time: '10:00 AM - 12:00 PM', activity: 'Batch 1 - Industrial Visit (KSUM)\nBatch 2 - Project Building', venue: 'KSUM\nMedia Hall' },
    { time: '12:00 PM - 1:30 PM', activity: 'Lunch Break', venue: 'Rooms 210 & 209' },
    { time: '1:30 PM - 2:50 PM', activity: 'Batch 2 - Industrial Visit (KSUM)\nBatch 1 - Project Building', venue: 'KSUM\nSDPK' },
    { time: '2:50 PM - 3:00 PM', activity: 'Wrap Up', venue: 'Front Desk' },
  ];

  const renderSchedule = (schedule: typeof day1Schedule) => (
    <div className="w-full flex flex-col">
      <div className="hidden md:grid grid-cols-[1fr_2fr_1fr] gap-[24px] py-[16px] border-b border-rule text-dim font-mono text-[10px] uppercase tracking-[0.1em]">
        <div>Time</div>
        <div>Activity</div>
        <div>Venue</div>
      </div>
      {schedule.map((item, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-[8px] md:gap-[24px] py-[24px] border-b border-rule transition-colors duration-200 hover:bg-surface/30" data-animate="timeline" data-delay={Math.min(i, 5)}>
          <div className="text-muted font-mono font-normal text-[12px] md:text-[13px] leading-snug whitespace-nowrap">
            {item.time}
          </div>
          <div className="text-paper text-[15px] md:text-[16px] leading-[1.6] whitespace-pre-line font-medium">
            {item.activity}
          </div>
          <div className="text-dim text-[13px] md:text-[14px] whitespace-pre-line mt-[4px] md:mt-0 font-mono">
            {item.venue}
          </div>
        </div>
      ))}
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
