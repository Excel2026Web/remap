export default function Footer() {
  return (
    <footer className="site-footer flex flex-col md:flex-row items-center justify-between px-[var(--gutter)] py-[30px] border-t border-[var(--color-rule)] text-[var(--color-dim)] font-mono text-[10px] tracking-[0.04em] text-center md:text-left gap-[18px] md:gap-0" role="contentinfo">
      <a className="brand text-[var(--color-paper)] font-sans font-semibold text-[17px] tracking-tight" href="#top" aria-label="REMAP 3.0 home">
        REMAP<span className="text-[var(--color-accent)]">_3.0</span>
      </a>
      <p className="text-[var(--color-dim)]">Made for the after-hours engineers.</p>
      <div className="footer-links flex gap-[20px]">
        <a href="#" className="hover:text-[var(--color-paper)] transition-colors duration-200" aria-label="REMAP on Instagram">Instagram</a>
        <a href="#" className="hover:text-[var(--color-paper)] transition-colors duration-200" aria-label="REMAP on LinkedIn">LinkedIn</a>
        <a href="#" className="hover:text-[var(--color-paper)] transition-colors duration-200" aria-label="REMAP on X/Twitter">X / Twitter</a>
      </div>
    </footer>
  );
}
