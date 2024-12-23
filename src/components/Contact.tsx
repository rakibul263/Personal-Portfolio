import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple-950/50 to-indigo-950/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-indigo-900/30 border border-indigo-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-indigo-900/30 border border-indigo-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 bg-indigo-900/30 border border-indigo-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}