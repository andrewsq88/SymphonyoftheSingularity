import React from 'react';

export function AuthorSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center flex-shrink-0">
            <span className="text-4xl sm:text-5xl font-bold text-black">AS</span>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>About the Author</h2>
            <p className="text-gray-300 leading-relaxed mb-4"><strong className="text-white">Andrew C Squire</strong> is an author, AI consultant, and financial advisor with a passion for exploring the intersection of technology and humanity. With expertise spanning artificial intelligence, robotics, and financial planning, Andrew brings a unique perspective to the story of technological evolution.</p>
            <p className="text-gray-300 leading-relaxed">Symphony of the Singularity is his debut novel, combining decades of research into AI, machine learning, and robotics with a compelling narrative about humanity's technological future.</p>
          </div>
        </div>
      </div>
    </section>
  );
}