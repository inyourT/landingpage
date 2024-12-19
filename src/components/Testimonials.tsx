import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmad Rizki',
    role: 'Teknisi Manufaktur di Toyota',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3',
    content: 'Program ini membuka jalan saya untuk berkarir di Jepang. Pelatihan yang diberikan sangat membantu dalam persiapan bekerja.',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Perawat di Osaka Hospital',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
    content: 'Sangat terbantu dengan bimbingan yang diberikan, mulai dari bahasa hingga adaptasi budaya Jepang.',
  },
  {
    name: 'Budi Santoso',
    role: 'Engineer di Mitsubishi',
    image: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3',
    content: 'Proses yang sangat profesional dan transparan. Sekarang saya sudah 2 tahun bekerja di Jepang dengan karir yang terus berkembang.',
  },
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Testimoni Alumni</h2>
          <p className="mt-4 text-lg text-gray-600">
            Kisah sukses dari mereka yang telah bergabung dengan program kami
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}