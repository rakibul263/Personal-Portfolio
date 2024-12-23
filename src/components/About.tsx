import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          About Me
        </h2>
        <div className="space-y-6 text-gray-300">
          <p className="leading-relaxed">
            I am MD RAKIBUL HASAN, born on October 21, 2003, in Gaibandha. Currently, I live in Mirpur, Dhaka. 
            I am pursuing a Bachelor of Science in Computer Science and Engineering at Daffodil International University.
          </p>
          <p className="leading-relaxed">
            I come from a family of four, including my supportive parents, MD. ZAIDUR RAHAMAN (a teacher) and 
            MOST. SURIYA BEGUM (a housewife).
          </p>
          <p className="leading-relaxed">
            As a person, I am an introvert but adventurous at heart. My personality shines once you get to know me. 
            I enjoy exploring new places, savoring spicy foods, and watching movies or cartoons during downtime. 
            My ultimate goal is to work in a tech giant company and contribute to innovative technology solutions.
          </p>
        </div>
      </div>
    </section>
  );
}