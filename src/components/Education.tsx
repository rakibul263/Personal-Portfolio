import React from 'react';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Education
        </h2>
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <GraduationCap size={24} className="text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science and Engineering</h3>
              <p className="text-gray-300">Daffodil International University</p>
              <p className="text-gray-400">Current</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <GraduationCap size={24} className="text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">HSC</h3>
              <p className="text-gray-300">Cantonment Public School and College, Rangpur</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <GraduationCap size={24} className="text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">SSC</h3>
              <p className="text-gray-300">Komarpur Chowmatha High School, Gaibandha</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}