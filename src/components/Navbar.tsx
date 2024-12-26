"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/Image/logo.svg";
import dropdown from "@/Image/dropdown.svg";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        } z-10`}
      ></div>
      <nav className="bg-[#F6F7FB] z-10">
        <div className=" mx-auto flex items-center justify-between p-2  lg:px-8">
          {/* Logo */}
          <div className="flex justify-between items-center py-2 px-4 md:px-4">
            <Image src={logo} width={0} height={0} alt="logo" />
          </div>

          {/* Hamburger Menu Button (Only visible on mobile) */}
          <button
            className="flex items-center px-3 py-2 border rounded border-slate-950 hover:text-[#C4EDD7] text-slate-950 md:hidden"
            onClick={toggleMenu}
          >
            <Bars3Icon className="h-5 w-5" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex lg:space-x-6 md:space-x-4 items-center">
            <a href="#" className="text-[#E6A371] uppercase text-xs font-bold">
              Home
            </a>
            <a href="#" className="hover:text-[#E6A371] uppercase text-xs font-bold">
              Features
            </a>
            <a href="#" className="hover:text-[#E6A371] uppercase flex-shrink-0 whitespace-nowrap text-xs font-bold">
              About Us
            </a>
            <a
              href="#"
              className="hover:text-[#E6A371] uppercase text-xs font-bold flex gap-2"
            >
              Product
              <span>
                <Image src={dropdown} alt="dropdown" />
              </span>
            </a>
            <a href="#" className="hover:text-[#E6A371] uppercase text-xs flex-shrink-0 whitespace-nowrap font-bold">
              Contact Us
            </a>
            <button className="text-sm border border-black rounded py-2 px-4 font-bold flex-shrink-0 whitespace-nowrap">
              LOG IN
            </button>
            <button className="bg-[#E6A371] text-white py-2 px-4 rounded-sm text-sm uppercase flex-shrink-0 whitespace-nowrap font-bold">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 z-20 right-0 h-full w-64 bg-[#F6F7FB] text-white transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          {/* Close Button */}
          <button
            className="absolute top-8 right-4 flex items-center px-3 py-2 border rounded border-slate-950 hover:text-[#C4EDD7] text-slate-950"
            onClick={toggleMenu}
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
          <nav className="mt-16 space-y-4 grid p-5">
            <a href="#" className="text-[#E6A371] uppercase text-xs font-bold">
              Home
            </a>
            <a href="#" className="hover:text-[#E6A371] text-black uppercase text-xs font-bold">
              Features
            </a>
            <a href="#" className="hover:text-[#E6A371] text-black uppercase text-xs font-bold">
              About Us
            </a>
            <a
              href="#"
              className="hover:text-[#E6A371] uppercase text-black text-xs font-bold flex gap-2"
            >
              Product
              <span>
                <Image src={dropdown} alt="dropdown" />
              </span>
            </a>
            <a href="#" className="hover:text-[#E6A371] uppercase text-xs font-bold text-black">
              Contact Us
            </a>
            <button className="text-sm border border-black rounded py-2 text-black px-4 font-bold">
              LOG IN
            </button>
            <button className="bg-[#E6A371] text-white py-2 px-4 rounded-sm text-sm uppercase font-bold">
              Get Started
            </button>
          </nav>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
