'use client';
import Link from 'next/link';
import React from 'react';
import { footerSociallinks } from '../../../../data';
import logoImage from '../../../../public/logo.png';
import Image from 'next/image';
import { Heart } from 'lucide-react';

const Footer = () => {

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault(); // prevent default jump

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // align top
      });
    }
  };

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-8 relative">
      <div className="w-[85%] mx-auto">
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Logo */}
          <div>
            <Link
              href="#home"
              onClick={handleScrollToTop}
              className="flex items-center gap-2 w-10 h-10 pb-5"
            >
              <Image
                src={logoImage}
                alt="Footer website logo Image"
                className="w-8 h-8 object-cover rounded-full"
              />
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-yellow-400">
                WebDev
              </h3>
            </Link>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Building modern, scalable and beautiful web applications using
              modern technologies.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Quick Links
            </h3>

            {[
              { name: 'About', href: '#about' },
              { name: 'Skills', href: '#skills' },
              { name: 'Projects', href: '#projects' },
              { name: 'Contact', href: '#contact' },
            ].map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={e => handleSmoothScroll(e, link.href)}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Connect
            </h3>

            <div className="flex items-center gap-4">
              {footerSociallinks.map(link => (
                <Link
                  href={link.href}
                  key={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all duration-300"
                >
                  <link.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-5 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
            Made with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            by Kyachingprue Marma
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
