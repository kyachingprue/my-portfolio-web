'use client';
import React, { useEffect, useState } from 'react';
import Logo from '../Helper/Logo';
import { NavLinks } from '../../../Constant/Constant';
import Link from 'next/link';
import { Download, MenuIcon } from 'lucide-react';
import ThemeToggler from '../Helper/ThemeToggler';

type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div
      className={`fixed w-full h-[12vh] z-50 transition-all duration-200 ${
        navBg ? 'bg-white dark:bg-gray-800 shadow-lg' : ''
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        <Logo />

        <div className="hidden lg:flex items-center space-x-8">
          {NavLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="dark:text-white text-black hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link
            className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 font-bold text-white bg-indigo-600 rounded-md transition-all duration-300 ring-1 ring-indigo-300 hover:ring-offset-2"
            href="#"
          >
            <span className="flex items-center space-x-2 text-sm">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </span>
          </Link>

          <ThemeToggler />

          <MenuIcon
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
