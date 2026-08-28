export default function Schedule() {
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
          className="tab-btn active"
          role="tab"
          id="tab-oct18"
          aria-selected="true"
          aria-controls="panel-oct18"
          data-day="oct18"
        >SAT / 18 OCT</button>
        <button
          className="tab-btn"
          role="tab"
          id="tab-oct19"
          aria-selected="false"
          aria-controls="panel-oct19"
          data-day="oct19"
        >SUN / 19 OCT</button>
      </div>

      <div className="schedule-panels">
        <div
          className="timeline"
          id="panel-oct18"
          role="tabpanel"
          aria-labelledby="tab-oct18"
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

        <div
          className="timeline hidden"
          id="panel-oct19"
          role="tabpanel"
          aria-labelledby="tab-oct19"
          hidden
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
