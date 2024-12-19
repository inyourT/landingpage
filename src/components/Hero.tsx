import React from 'react';
import { ArrowRight } from 'lucide-react';

const REGISTRATION_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeLXuYlJ2ZUM143xtpyU3PZNVYUsyWvuh4xLC4h_vagBQx4OQ/viewform';

export default function Hero() {
  return (
    <div id="home" className="pt-16 bg-gradient-to-br from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Wujudkan Impian Anda
              <span className="text-red-600"> Bekerja di Jepang</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Kami membantu Anda meraih kesempatan bekerja di Jepang dengan program pelatihan
              dan penempatan kerja yang terpercaya.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href={REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors flex items-center"
              >
                Mulai Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#services" className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-md hover:bg-red-50 transition-colors">
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3"
              alt="Tokyo cityscape"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}