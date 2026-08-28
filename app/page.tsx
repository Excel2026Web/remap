import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Register from './components/Register';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';
import Contact from './components/Contact';;

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Register />
        <Schedule />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
