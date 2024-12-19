import React from 'react';
import { BookOpen, Building2, GraduationCap, Languages } from 'lucide-react';

const services = [
  {
    icon: <Languages className="h-8 w-8 text-red-600" />,
    title: 'Pelatihan Bahasa Jepang',
    description: 'Kursus bahasa Jepang intensif dengan pengajar berpengalaman untuk persiapan kerja.',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-red-600" />,
    title: 'Pelatihan Keterampilan',
    description: 'Program pelatihan teknis sesuai bidang pekerjaan yang akan dijalani di Jepang.',
  },
  {
    icon: <Building2 className="h-8 w-8 text-red-600" />,
    title: 'Penempatan Kerja',
    description: 'Kerjasama dengan perusahaan Jepang terkemuka untuk penempatan kerja yang sesuai.',
  },
  {
    icon: <BookOpen className="h-8 w-8 text-red-600" />,
    title: 'Bimbingan Budaya',
    description: 'Pemahaman mendalam tentang budaya dan etika kerja di Jepang.',
  },
];

export default function Services() {
  return (
    <div id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Layanan Kami</h2>
          <p className="mt-4 text-lg text-gray-600">
            Kami menyediakan layanan lengkap untuk mempersiapkan Anda bekerja di Jepang
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}