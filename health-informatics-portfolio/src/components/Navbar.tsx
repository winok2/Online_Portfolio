"use client";

import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Health Informatics Portfolio
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/about" className="text-gray-600 hover:text-blue-500">About</Link>
            <Link href="/projects" className="text-gray-600 hover:text-blue-500">Projects</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-500">Contact</Link>
            <a href="/resume.pdf" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Resume</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <Link href="/about" className="block py-2 text-gray-600 hover:text-blue-500">About</Link>
            <Link href="/projects" className="block py-2 text-gray-600 hover:text-blue-500">Projects</Link>
            <Link href="/contact" className="block py-2 text-gray-600 hover:text-blue-500">Contact</Link>
            <a href="/resume.pdf" className="block py-2 text-blue-500 hover:text-blue-600">Resume</a>
          </div>
        )}
      </div>
    </nav>
  );
}