'use client';

import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact() {
  useScrollReveal();
  return (
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
  );
}
