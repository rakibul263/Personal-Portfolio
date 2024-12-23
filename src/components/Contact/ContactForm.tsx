import React from 'react';

export function ContactForm() {
  return (
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
  );
}