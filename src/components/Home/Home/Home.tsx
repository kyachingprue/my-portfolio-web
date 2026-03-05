'use client';
import React, { useEffect } from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Project from '../Project/Project';
import Experience from '../Experience/Experience';
import ClientReview from '../ClientReview/ClientReview';
import Contact from '../Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <ClientReview />
      <Contact />
    </div>
  );
};

export default Home;
