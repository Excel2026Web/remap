export default function Register() {
  return (
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
  );
}
