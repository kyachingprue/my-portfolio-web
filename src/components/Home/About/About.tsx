import SectionHeading from '@/components/Helper/SectionHeading';
import Image from 'next/image';
import React from 'react';
import { highlights, stats } from '../../../../data';

const About = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      {/* Section Heading */}
      <SectionHeading
        title_1="About"
        title_2="Me"
        description="Get to know the developer behind the code"
      />
      <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div
          data-aos="fade-right"
          data-aos-delay="0"
          data-aos-anchor-placement="top-center"
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden p-2">
            <Image
              src="https://i.ibb.co/gb0nk9pW/man-standing-against-wall-black-jacket-white-shirt-1213951-53648.avif"
              alt="Profile image"
              width={600}
              height={700}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
        {/* Content */}
        <div
          data-aos="fade-left"
          data-aos-delay="0"
          data-aos-anchor-placement="top-center"
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold">
            A passionate developer who love to create
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            I am currently deepening my knowledge in Data Structures &
            Algorithms, System Design, and Machine Learning. My long-term goal
            is to become a Computer Scientist and build intelligent, large-scale
            systems.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I enjoy solving complex problems and building scalable web
            applications using modern technologies like React, Node.js, and
            MongoDB.
          </p>
          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {highlights.map(item => {
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Stats */}
      <div
        data-aos="zoom-in"
        className="mt-16 w-[80%] mx-auto"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(stat => {
            return (
              <div
                key={stat.label}
                className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;