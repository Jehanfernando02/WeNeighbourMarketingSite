import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Features from './sections/Features';
import Team from './sections/Team';
import Contact from './sections/Contact';
import Gallery from './sections/Gallery';

// Import global styles
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';

// Import AOS for animations
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero id="hero" />
        <About id="about" />
        <Features id="features" />
        <Gallery id="gallery" />
        <Team id="team" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
