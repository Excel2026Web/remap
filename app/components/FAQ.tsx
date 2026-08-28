export default function FAQ() {
  return (
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
  );
}
