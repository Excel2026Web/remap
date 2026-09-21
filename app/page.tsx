import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Register from './components/Register';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main aria-label="REMAP 3.0 — All Kerala Hardware Convention">
        <Hero />
        <Features />
        <Register />
        <Schedule />
        <FAQ />
        <Contact />
      </main>

      <footer
        aria-label="Site footer"
        itemScope
        itemType="https://schema.org/Event"
        style={{ borderTop: '1px solid var(--rule)', padding: '28px 5vw', display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <p style={{ fontSize: '11px', fontFamily: 'var(--font-jetbrains-mono)', color: 'var(--dim)', letterSpacing: '0.08em', textTransform: 'uppercase', margin: 0 }}>
          <span itemProp="name">REMAP 3.0</span>
          {' · '}
          <span itemProp="startDate" content="2026-09-19">19–20 Sept 2026</span>
          {' · '}
          <span itemProp="location" itemScope itemType="https://schema.org/Place">
            <span itemProp="name">Model Engineering College, Thrikkakara</span>
          </span>
        </p>
        <p style={{ fontSize: '11px', fontFamily: 'var(--font-jetbrains-mono)', color: 'var(--dim)', letterSpacing: '0.08em', textTransform: 'uppercase', margin: 0 }}>
          Part of{' '}
          <a
            href="https://excelmec.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--teal)', textDecoration: 'none' }}
            itemProp="organizer"
          >
            Excel 2026
          </a>
          {' '}· © {new Date().getFullYear()} Excel MEC
        </p>
      </footer>
    </>
  );
}
