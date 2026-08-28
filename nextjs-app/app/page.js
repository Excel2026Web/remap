import Scripts from './Scripts';

export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav" id="main-nav" role="navigation" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="REMAP 3.0 home">
          REMAP<span>_3.0</span>
        </a>

        <div className="nav-links" role="list">
          <a href="#about" role="listitem">Features</a>
          <a href="#schedule" role="listitem">Schedule</a>
          <a href="#faq" role="listitem">FAQ</a>
          <a href="#contact" role="listitem">Contact</a>
        </div>

        <a href="#register" className="nav-cta">
          Register Now <span aria-hidden="true">↗</span>
        </a>

        <button
          className="nav-menu-btn"
          id="nav-menu-btn"
          aria-label="Open navigation menu"
          aria-expanded="false"
          aria-controls="nav-drawer"
        >
          <span className="hamburger" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div className="nav-overlay" id="nav-overlay" aria-hidden="true"></div>
      <div
        className="nav-drawer"
        id="nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        hidden
      >
        <div className="nav-drawer-header">
          <a className="brand" href="#top">
            REMAP<span>_3.0</span>
          </a>
          <button className="nav-drawer-close" id="nav-drawer-close" aria-label="Close navigation menu">
            <span aria-hidden="true">✕</span>
          </button>
        </div>
        <nav className="nav-drawer-links" aria-label="Mobile navigation">
          <a href="#about">Features</a>
          <a href="#schedule">Schedule</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
          <a href="#register">Register Now</a>
        </nav>
        <div className="nav-drawer-footer">
          <p>27–28 SEPT 2026 · Model Engineering College, Thrikkakara</p>
        </div>
      </div>

      <main id="top">

        {/* Hero Section */}
        <section className="hero" aria-label="Hero">
          <div className="hero-bg" aria-hidden="true"></div>

          <div className="hero-content">
            <h1 className="hero-h1" aria-label="REMAP 3.0">
              <span className="hero-h1-line" data-hero="1">REMAP</span>
              <em className="hero-h1-line" data-hero="2">3.0</em>
            </h1>

            <p className="hero-statement" data-hero="3">An overnight hardware experience for B.Tech students.</p>

            <div className="hero-actions" data-hero="4">
              <a href="#register" className="btn btn-primary">
                Get Started <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
              <a href="#schedule" className="btn btn-ghost">
                See the schedule <span className="btn-arrow" aria-hidden="true">↓</span>
              </a>
            </div>

            <p className="hero-note" data-hero="5">No prior hardware experience needed.</p>
          </div>

          <div className="hero-footer" data-hero="6">
            <div className="hero-footer-left">
              <span>REMAP</span>
              <span className="hero-footer-sep">/</span>
              <span>AN OVERNIGHT HARDWARE EXPERIENCE</span>
            </div>
            <div className="hero-footer-right">
              <span>SEPTEMBER 27–28, 2026</span>
              <span className="hero-footer-pipe">|</span>
              <span>24 HOURS</span>
              <span className="hero-footer-pipe">|</span>
              <span>MODEL ENGINEERING COLLEGE</span>
            </div>
          </div>

          <a href="#about" className="hero-scroll-indicator" aria-label="Scroll to content" data-hero="6">
            <span className="scroll-label">SCROLL</span>
            <svg
              className="scroll-arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="section section-about" aria-labelledby="about-heading">
          <div className="about-inner">
            <div className="about-visual" data-animate="fade">
              <div className="section-tag" data-animate="tag">01 / THE SIGNAL</div>
              <div className="about-image-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/remap-about-workbench.jpg"
                  alt="Hardware workbench soldering macro"
                  className="about-img"
                  loading="lazy"
                />
                <div className="about-img-badge">
                  <span className="badge-dot"></span>
                  <span>BENCH_LIVE // MEC LAB 04</span>
                </div>
              </div>
            </div>

            <div className="about-body">
              <h2 id="about-heading" data-animate="mask" data-delay="1">
                WHERE IDEAS GET<br />THEIR <span>HANDS DIRTY.</span>
              </h2>
              <p data-animate="fade" data-delay="2">
                REMAP is not a conference. It is a living workbench: one electric night of sensors,
                solder, half-formed ideas and the people who know how to make them real.
              </p>
              <a href="#register" className="text-link" data-animate="fade" data-delay="3">
                See what&apos;s on the bench <span aria-hidden="true">→</span>
              </a>

              <div className="about-stats" data-animate="fade" data-delay="4">
                <div className="stat-box">
                  <span className="stat-number">24H</span>
                  <span className="stat-label">Non-stop sprint</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Hardware hackers</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">₹50K</span>
                  <span className="stat-label">Prize pool</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tracks Section */}
        <section className="section section-tracks" aria-labelledby="tracks-heading">
          <div className="section-heading">
            <div className="section-tag" data-animate="tag">02 / PICK A TRACK</div>
            <h2 id="tracks-heading" data-animate="mask" data-delay="1">
              MAKE NOISE.<br />LEAVE A <span>MARK.</span>
            </h2>
          </div>

          <div className="cards" role="list">

            <article className="track-card" role="listitem" data-animate="card" data-delay="0">
              <span className="card-number" aria-hidden="true">01</span>
              <div className="card-body">
                <p className="eyebrow card-eyebrow">HARDWARE LAB</p>
                <h3>Touch the metal.</h3>
                <p className="card-desc">Prototype with sensors, microcontrollers and plenty of sharp opinions.</p>
                <a href="#register" className="card-link">Claim a station <span aria-hidden="true">→</span></a>
              </div>
            </article>

            <article className="track-card" role="listitem" data-animate="card" data-delay="1">
              <span className="card-number" aria-hidden="true">02</span>
              <div className="card-body">
                <p className="eyebrow card-eyebrow">BUILD SPRINT</p>
                <h3>Make it move.</h3>
                <p className="card-desc">Turn a messy first thought into a real, testable thing before sunrise.</p>
                <a href="#register" className="card-link">Join the sprint <span aria-hidden="true">→</span></a>
              </div>
            </article>

            <article className="track-card" role="listitem" data-animate="card" data-delay="2">
              <span className="card-number" aria-hidden="true">03</span>
              <div className="card-body">
                <p className="eyebrow card-eyebrow">OPEN SHOWCASE</p>
                <h3>Break the silence.</h3>
                <p className="card-desc">Put your wildest creation under the lights and show what it can do.</p>
                <a href="#register" className="card-link">Bring your project <span aria-hidden="true">→</span></a>
              </div>
            </article>

          </div>
        </section>

        {/* Registration Section */}
        <section id="register" className="section section-register" aria-labelledby="register-heading">
          <div className="register-copy">
            <div className="section-tag" data-animate="tag">03 / ENTRY PASS</div>
            <h2 id="register-heading" data-animate="mask" data-delay="1">
              ONE NIGHT.<br />NO <span>UNDO.</span>
            </h2>
            <p data-animate="fade" data-delay="2">
              Your pass gets you a place at the bench, a full night of hardware, food, fuel and people worth meeting.
            </p>
            <div className="availability" data-animate="fade" data-delay="3" aria-label="31 of 80 seats remaining">
              <span className="availability-dot" aria-hidden="true"></span>
              31 of 80 seats remaining
            </div>
          </div>

          <div className="price-card" data-animate="fade" data-delay="2">
            <p className="eyebrow">REMAP 3.0 / ALL ACCESS</p>
            <div className="price" aria-label="999 rupees per person">
              ₹999 <small>/ person</small>
            </div>
            <a href="#contact" className="btn btn-primary btn-wide">
              Register now <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
            <ul className="pass-includes" aria-label="What's included">
              <li>Full event access</li>
              <li>Build materials &amp; workshop kits</li>
              <li>Dinner, midnight fuel &amp; breakfast</li>
              <li>REMAP 3.0 field kit</li>
            </ul>
          </div>
        </section>

        {/* Schedule Section */}
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

        {/* FAQ Section */}
        <section id="faq" className="section section-faq" aria-labelledby="faq-heading">
          <div className="faq-left">
            <div className="section-tag" data-animate="tag">05 / GOOD QUESTIONS</div>
            <h2 id="faq-heading" data-animate="mask" data-delay="1">
              BEFORE YOU<br /><span>PLUG IN.</span>
            </h2>
          </div>

          <div className="faq-list" role="list">

            <div className="faq-item" role="listitem" data-animate="fade" data-delay="0">
              <button
                className="faq-question"
                aria-expanded="false"
                aria-controls="faq-answer-1"
                id="faq-btn-1"
              >
                <span>Do I need prior hardware experience?</span>
                <span className="faq-icon" aria-hidden="true">
                  <span className="faq-icon-bar"></span>
                  <span className="faq-icon-bar faq-icon-bar--v"></span>
                </span>
              </button>
              <div
                className="faq-answer"
                id="faq-answer-1"
                role="region"
                aria-labelledby="faq-btn-1"
              >
                <p>Not at all. Bring your curiosity; our mentors and track leads will help you find a useful starting point.</p>
              </div>
            </div>

            <div className="faq-item" role="listitem" data-animate="fade" data-delay="1">
              <button
                className="faq-question"
                aria-expanded="false"
                aria-controls="faq-answer-2"
                id="faq-btn-2"
              >
                <span>What should I bring?</span>
                <span className="faq-icon" aria-hidden="true">
                  <span className="faq-icon-bar"></span>
                  <span className="faq-icon-bar faq-icon-bar--v"></span>
                </span>
              </button>
              <div
                className="faq-answer"
                id="faq-answer-2"
                role="region"
                aria-labelledby="faq-btn-2"
              >
                <p>A laptop if you have one, a charger, and any small project you want to work on. Core build tools are provided.</p>
              </div>
            </div>

            <div className="faq-item" role="listitem" data-animate="fade" data-delay="2">
              <button
                className="faq-question"
                aria-expanded="false"
                aria-controls="faq-answer-3"
                id="faq-btn-3"
              >
                <span>Can I come alone?</span>
                <span className="faq-icon" aria-hidden="true">
                  <span className="faq-icon-bar"></span>
                  <span className="faq-icon-bar faq-icon-bar--v"></span>
                </span>
              </button>
              <div
                className="faq-answer"
                id="faq-answer-3"
                role="region"
                aria-labelledby="faq-btn-3"
              >
                <p>Absolutely. Many of the best builds start with a stranger at the next workbench.</p>
              </div>
            </div>

            <div className="faq-item" role="listitem" data-animate="fade" data-delay="3">
              <button
                className="faq-question"
                aria-expanded="false"
                aria-controls="faq-answer-4"
                id="faq-btn-4"
              >
                <span>Is the venue accessible overnight?</span>
                <span className="faq-icon" aria-hidden="true">
                  <span className="faq-icon-bar"></span>
                  <span className="faq-icon-bar faq-icon-bar--v"></span>
                </span>
              </button>
              <div
                className="faq-answer"
                id="faq-answer-4"
                role="region"
                aria-labelledby="faq-btn-4"
              >
                <p>Yes. The venue is staffed throughout the event and has quiet zones, food, first aid and secure bag storage.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Final CTA Section */}
        <section id="contact" className="section-final" aria-labelledby="final-heading">
          <div className="final-inner">
            <p className="eyebrow" data-animate="tag">THE BENCH IS WAITING</p>
            <h2 id="final-heading" data-animate="mask" data-delay="1">
              LET&apos;S BUILD<br /><span>SOMETHING LOUD.</span>
            </h2>
            <a href="#register" className="btn btn-primary" data-animate="fade" data-delay="2">
              Get your pass <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
            <p className="contact-line" data-animate="fade" data-delay="3">
              Questions? <a href="mailto:hello@remap.org">hello@remap.org</a>
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="site-footer" role="contentinfo">
        <a className="brand" href="#top" aria-label="REMAP 3.0 home">
          REMAP<span>_3.0</span>
        </a>
        <p>Made for the after-hours engineers.</p>
        <div className="footer-links">
          <a href="#" aria-label="REMAP on Instagram">Instagram</a>
          <a href="#" aria-label="REMAP on LinkedIn">LinkedIn</a>
          <a href="#" aria-label="REMAP on X/Twitter">X / Twitter</a>
        </div>
      </footer>

      {/* Client-side scripts */}
      <Scripts />
    </>
  );
}
