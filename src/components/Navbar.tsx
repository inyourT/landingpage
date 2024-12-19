import React from 'react';
import { Globe, Menu, X } from 'lucide-react';

const REGISTRATION_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeLXuYlJ2ZUM143xtpyU3PZNVYUsyWvuh4xLC4h_vagBQx4OQ/viewform';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">WorkJapan</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600">Beranda</a>
            <a href="#services" className="text-gray-700 hover:text-red-600">Layanan</a>
            <a href="#process" className="text-gray-700 hover:text-red-600">Proses</a>
            <a href="#testimonials" className="text-gray-700 hover:text-red-600">Testimoni</a>
            <a 
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Daftar Sekarang
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-red-600">Beranda</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-red-600">Layanan</a>
            <a href="#process" className="block px-3 py-2 text-gray-700 hover:text-red-600">Proses</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-red-600">Testimoni</a>
            <a 
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}