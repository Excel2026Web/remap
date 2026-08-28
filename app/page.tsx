import Scripts from './Scripts';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Register from './components/Register';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="top">
        <Hero />
        <Features />
        <Register />
        <Schedule />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {/* Client-side scripts */}
      <Scripts />
    </>
  );
}
