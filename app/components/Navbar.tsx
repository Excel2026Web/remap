export default function Navbar() {
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
    </>
  );
}
