import React from 'react';
import { Github, Mail } from 'lucide-react';

export function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 text-center px-4">
        <div className="mb-8">
          <img 
            src="https://raw.githubusercontent.com/rakibul263/Personal-Portfolio/refs/heads/main/Shuvo.jpeg" 
            alt="MD RAKIBUL HASAN"
            className="w-48 h-48 rounded-full mx-auto border-4 border-blue-500 shadow-xl"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          MD RAKIBUL HASAN
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Aspiring Computer Scientist | Future Tech Enthusiast
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/rakibul263" target="_blank" rel="noopener noreferrer" 
             className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            <Github size={20} />
            GitHub
          </a>
          <a href="#contact" 
             className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition">
            <Mail size={20} />
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
}