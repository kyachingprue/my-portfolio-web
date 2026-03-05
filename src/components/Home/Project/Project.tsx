import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';
import { projects } from '../../../../data';
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <section id="projects" className='py-16 bg-gray-100 dark:bg-gray-900'>
      <SectionHeading
        title_1='Featured'
        title_2='Projects'
        description='A selection of my recent work and side projects'
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto'>
        {projects.map((project, index) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 50}
              data-aos-anchor-placement="top-center"
              key={index}
            >
              <ProjectCard {...project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;