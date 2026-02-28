"use client";
import React, { useEffect, useState } from 'react';
import Logo from '../Helper/Logo';
import { NavLinks } from '../../../Constant/Constant';
import Link from 'next/link';
import { Download, MenuIcon } from 'lucide-react';
import ThemeToggler from '../Helper/ThemeToggler';

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    }  
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [])
  
  return (
    <div className={`transition-all ${navBg ?"dark:bg-gray-800 bg-white shadow-lg" :"fixed"} duration-200 h-[12vh] z-100 fixed w-full`}>
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[90%] mx-auto">
        {/* Logo */}
        <Logo />
        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-8">
          {NavLinks.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className="dark:text-white text-black hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold transition-all duration-200"
              >
                <p>{link.name}</p>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          <Link
            className="box-border relative z-20 inline-flex items-center justify-center w-auto px-6 sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
            href="#_"
          >
            <span className="relative z-20 flex items-center space-x-2 text-sm">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </span>
          </Link>
          {/* theme Toggler */}
          <ThemeToggler />
          {/* Burger Menu */}
          <MenuIcon className="w-8 h-8 cursor-pointerflex-black dark:text-white lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;