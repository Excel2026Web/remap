export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between px-[24px] md:px-[5vw] lg:px-[7vw] py-[30px] border-t border-rule text-dim font-mono text-[10px] tracking-[0.04em] text-center md:text-left gap-[18px] md:gap-0 max-w-full" role="contentinfo">
      <a className="text-paper font-sans font-semibold text-[17px] tracking-tight shrink-0" href="#top" aria-label="REMAP 3.0 home">
        REMAP<span className="text-accent">_3.0</span>
      </a>
      <p className="text-dim">Made for the after-hours engineers.</p>
      <div className="flex gap-[20px]">
        <a href="#" className="text-dim transition-colors duration-200 hover:text-paper" aria-label="REMAP on Instagram">Instagram</a>
        <a href="#" className="text-dim transition-colors duration-200 hover:text-paper" aria-label="REMAP on LinkedIn">LinkedIn</a>
        <a href="#" className="text-dim transition-colors duration-200 hover:text-paper" aria-label="REMAP on X/Twitter">X / Twitter</a>
      </div>
    </footer>
  );
}
