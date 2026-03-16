import { Button } from '@/components/ui/button';
import { Download, FolderOpen } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const handleScrollToProject = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const element = document.querySelector('#projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(113,42,92,1)_0%,rgba(40,25,46,1)_90%)] pt-16 md:pt-0"
    >
      {/* content */}
      <div className="relative z-10 mx-auto text-center">
        {/* sub title */}
        <div data-aos="fade-up" className="sm:mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Available for opportunities
          </span>
        </div>
        {/* title */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-3xl sm:text-5xl font-bold px-3 mb-6"
        >
          Hi, I&lsquo;m{' '}
          <span className="text-purple-800 dark:text-yellow-300">
            Kyachingprue Marma
          </span>
        </h1>
        {/* Typewrite effects */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-12"
        >
          <TypeAnimation
            sequence={[
              "I'm Full Stack Developer",
              2000,
              "I'm Software Developer",
              2000,
              "I'm Programmer",
              2000,
              "I'm Coder",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-mono"
          />
        </div>
        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-lg text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto mb-10 px-2 md:px-0"
        >
          I am currently deepening my knowledge in Data Structures & Algorithms,
          System Design, and Machine Learning. My long-term goal is to become a
          Computer Scientist and build intelligent, large-scale systems.
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size={'lg'} asChild className="w-fit mx-auto sm:mx-0">
            <Link href="#projects" onClick={handleScrollToProject}>
              <FolderOpen className="w-5 h-5 mr-2" />
              View Projects
            </Link>
          </Button>
          <Button size={'lg'} asChild className="w-fit mx-auto sm:mx-0">
            <a href="/kyachingprueCV.pdf" download>
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
