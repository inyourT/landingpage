import React from 'react';
import { ClipboardCheck, FileText, GraduationCap, Plane } from 'lucide-react';

const steps = [
  {
    icon: <FileText className="h-8 w-8 text-red-600" />,
    title: 'Pendaftaran',
    description: 'Isi formulir dan lengkapi dokumen yang diperlukan',
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-red-600" />,
    title: 'Seleksi',
    description: 'Proses wawancara dan tes kemampuan dasar',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-red-600" />,
    title: 'Pelatihan',
    description: 'Mengikuti program pelatihan bahasa dan keterampilan',
  },
  {
    icon: <Plane className="h-8 w-8 text-red-600" />,
    title: 'Keberangkatan',
    description: 'Pengurusan visa dan keberangkatan ke Jepang',
  },
];

export default function Process() {
  return (
    <div id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Proses Pendaftaran</h2>
          <p className="mt-4 text-lg text-gray-600">
            Langkah-langkah mudah menuju karir Anda di Jepang
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full border-t-2 border-gray-200" />
            </div>
            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative flex items-center justify-center">
                    <div className="bg-white p-4 rounded-full shadow-lg">
                      {step.icon}
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}