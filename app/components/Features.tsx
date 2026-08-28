'use client';

import useScrollReveal from '../hooks/useScrollReveal';

export default function Features() {
  useScrollReveal();
  return (
    <>
      {/* About Section */}
      <section id="about" className="section section-about" aria-labelledby="about-heading">
        <div className="about-inner">
          <div className="about-visual" data-animate="fade">
            <div className="section-tag" data-animate="tag">01 / THE SIGNAL</div>
            <div className="about-image-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/about.jpg"
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
    </>
  );
}
