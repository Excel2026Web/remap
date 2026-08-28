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
    <section id="schedule" className="section section-schedule" aria-labelledby="schedule-heading">
      <div className="section-heading">
        <div className="section-tag" data-animate="tag">04 / RUN OF SHOW</div>
        <h2 id="schedule-heading" data-animate="mask" data-delay="1">
          KEEP THE<br /><span>CURRENT</span> FLOWING.
        </h2>
      </div>

      <div
        className="schedule-tabs"
        role="tablist"
        aria-label="Event schedule by day"
        data-animate="fade"
        data-delay="2"
      >
        <button
          className={`tab-btn ${activeTab === 'oct18' ? 'active' : ''}`}
          role="tab"
          id="tab-oct18"
          aria-selected={activeTab === 'oct18'}
          aria-controls="panel-oct18"
          onClick={() => handleTabChange('oct18')}
          tabIndex={activeTab === 'oct18' ? 0 : -1}
        >SAT / 18 OCT</button>
        
        <button
          className={`tab-btn ${activeTab === 'oct19' ? 'active' : ''}`}
          role="tab"
          id="tab-oct19"
          aria-selected={activeTab === 'oct19'}
          aria-controls="panel-oct19"
          onClick={() => handleTabChange('oct19')}
          tabIndex={activeTab === 'oct19' ? 0 : -1}
        >SUN / 19 OCT</button>
      </div>

      <div className="schedule-panels">
        {/* OCT 18 PANEL */}
        <div
          className={`timeline ${activeTab !== 'oct18' ? 'hidden' : ''}`}
          id="panel-oct18"
          role="tabpanel"
          aria-labelledby="tab-oct18"
          hidden={activeTab !== 'oct18'}
        >
          <div className="timeline-entry" data-animate="timeline" data-delay="0">
            <time dateTime="2026-10-18T18:00">18:00</time>
            <span className="timeline-dot" aria-hidden="true"></span>
            <div className="timeline-info">
              <h3>Doors open / warm-up</h3>
              <p>Hangar A</p>
            </div>
          </div>
          <div className="timeline-entry" data-animate="timeline" data-delay="1">
            <time dateTime="2026-10-18T19:00">19:00</time>
            <span className="timeline-dot" aria-hidden="true"></span>
            <div className="timeline-info">
              <h3>Opening transmission</h3>
              <p>Main floor</p>
            </div>
          </div>
          <div className="timeline-entry" data-animate="timeline" data-delay="2">
            <time dateTime="2026-10-18T20:00">20:00</time>
            <span className="timeline-dot" aria-hidden="true"></span>
            <div className="timeline-info">
              <h3>Build sprint begins</h3>
              <p>All workbenches</p>
            </div>
          </div>
          <div className="timeline-entry" data-animate="timeline" data-delay="3">
            <time dateTime="2026-10-18T23:30">23:30</time>
            <span className="timeline-dot timeline-dot--accent" aria-hidden="true"></span>
            <div className="timeline-info">
              <h3>Midnight check-in</h3>
              <p>Fuel station</p>
            </div>
          </div>
        </div>

        {/* OCT 19 PANEL */}
        <div
          className={`timeline ${activeTab !== 'oct19' ? 'hidden' : ''}`}
          id="panel-oct19"
          role="tabpanel"
          aria-labelledby="tab-oct19"
          hidden={activeTab !== 'oct19'}
        >
          <div className="timeline-entry" data-animate="timeline" data-delay="0">
            <time dateTime="2026-10-19T01:00">01:00</time>
            <span className="timeline-dot" aria-hidden="true"></span>
            <div className="timeline-info">
              <h3>Debugging hours</h3>
              <p>All workbenches</p>
            </div>
          </div>
          <div className="timeline-entry" data-animate="timeline" data-delay="1">
            <time dateTime="2026-10-19T06:00">06:00</time>
            <span className="timeline-dot" aria-hidden="true"></span>
            <div className="timeline-info">
              <h3>Tools down</h3>
              <p>Main floor</p>
            </div>
          </div>
          <div className="timeline-entry" data-animate="timeline" data-delay="2">
            <time dateTime="2026-10-19T07:00">07:00</time>
            <span className="timeline-dot timeline-dot--accent" aria-hidden="true"></span>
            <div className="timeline-info">
              <h3>Show &amp; tell</h3>
              <p>Demo stage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
