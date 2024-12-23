import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Mail size={24} className="text-blue-400" />
        <div>
          <h3 className="font-semibold mb-1">Email</h3>
          <p className="text-gray-300">rakibul15-3263@diu.edu.bd</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <MapPin size={24} className="text-blue-400" />
        <div>
          <h3 className="font-semibold mb-1">Location</h3>
          <p className="text-gray-300">Mirpur, Dhaka, Bangladesh</p>
        </div>
      </div>
    </div>
  );
}