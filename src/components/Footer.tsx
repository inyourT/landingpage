import React from 'react';
import { Facebook, Globe, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold">WorkJapan</span>
            </div>
            <p className="mt-4 text-gray-400">
              Mewujudkan impian Anda untuk berkarir di Jepang dengan program pelatihan dan
              penempatan kerja yang terpercaya.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-red-500" />
                <span>Jl. Asia Afrika No. 123, Jakarta</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-red-500" />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-red-500" />
                <span>info@workjapan.id</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-red-500">Beranda</a></li>
              <li><a href="#services" className="hover:text-red-500">Layanan</a></li>
              <li><a href="#process" className="hover:text-red-500">Proses</a></li>
              <li><a href="#testimonials" className="hover:text-red-500">Testimoni</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-red-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-red-500">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} WorkJapan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}