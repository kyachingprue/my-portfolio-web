import SectionHeading from '@/components/Helper/SectionHeading';
import { nextProjects, projects } from '../../../../data';
import ProjectCard from './ProjectCard';
import NextProjectCard from './NextProjectCard';
import { Brain } from 'lucide-react';

const Project = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
      <SectionHeading
        title_1="Featured"
        title_2="Projects"
        description="A selection of my recent work and side projects"
      />
      <div className="py-5">
        <div
          data-aos="fade-up"
          className="flex items-center w-full px-2 md:w-10/12 mx-auto gap-2 mb-7"
        >
          <Brain size={20} className="w-12 h-12 text-blue-700 pb-4" />
          <h3 className="text-xl md:text-2xl pb-4 font-bold text-gray-800 dark:text-gray-200">
            <span className="text-blue-800">MERN Stack</span>{" "}
            <span className="text-pink-700">Projects</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
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
      </div>
      <div className="py-12">
        <div
          data-aos="fade-up"
          className="flex items-center w-full px-2 md:w-10/12 mx-auto gap-2 mb-7"
        >
          <Brain size={20} className="w-12 h-12 text-blue-700 pb-4" />
          <h3 className="text-xl md:text-2xl pb-4 font-bold text-gray-800 dark:text-gray-200">
            <span className="text-blue-800">Next.js</span> &{' '}
            <span className="text-pink-700">TypeScript Projects</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
          {nextProjects.map((project, index) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 50}
                data-aos-anchor-placement="top-center"
                key={index}
              >
                <NextProjectCard {...project} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;