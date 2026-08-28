export default function Hero() {
  return (
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
  );
}
