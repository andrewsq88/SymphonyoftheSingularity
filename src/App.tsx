import React from 'react';
import { BookOpen, Zap, Clock, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight" 
                style={{ 
                  fontFamily: 'Orbitron, monospace',
                  textShadow: '0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 60px #00ff88',
                  color: '#00ff88'
                }}>
              SYMPHONY OF THE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                SINGULARITY
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl mb-8 sm:mb-12" 
               style={{ 
                 fontFamily: 'Roboto, sans-serif',
                 color: '#00ff88',
                 textShadow: '0 0 10px #00ff88'
               }}>
              by Andrew C Squire
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Book Cover */}
            <div className="w-64 sm:w-80 lg:w-96 transition-transform duration-500 hover:scale-105 hover:rotate-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <img 
                  src="/New Back Cover Unwanted copy.png" 
                  alt="Symphony of the Singularity Book Cover"
                  className="relative w-full h-auto rounded-lg shadow-2xl border-2 border-green-400/30 object-cover"
                  style={{ aspectRatio: '3/4', maxHeight: '500px' }}
                />
              </div>
            </div>
            
            {/* Hero Content */}
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-green-400">
                From 1950s Automation to AI Dominance
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                Witness the extraordinary journey of technological evolution as humanity races toward the singularity.
              </p>
              
              <a 
                href="https://books2read.com/u/brLXkM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-black font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-400/25 active:scale-95"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                <BookOpen className="inline-block w-6 h-6 mr-3" />
                Buy Now
              </a>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
        </div>
      </header>

      {/* Book Overview Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-green-400" 
                style={{ fontFamily: 'Orbitron, monospace' }}>
              A Journey Through Time and Technology
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Clock className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-400">The 1950s Foundation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Beginning with the pioneering automation systems of the 1950s, witness how humanity first began delegating tasks to machines, setting the stage for an unprecedented technological revolution.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Zap className="w-8 h-8 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">Exponential Evolution</h3>
                  <p className="text-gray-300 leading-relaxed">
                    From Tesla's autonomous vehicles to Boston Dynamics' Atlas and Spot, from neural networks to reinforcement learning - explore how AI has evolved from simple automation to sophisticated intelligence systems that challenge the very definition of consciousness.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Users className="w-8 h-8 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">Society Transformed</h3>
                  <p className="text-gray-300 leading-relaxed">
                    As robotics companies like Unitree push the boundaries of dexterity and artificial intelligence reaches unprecedented capabilities, humanity stands at the precipice of the singularity - a point where artificial intelligence surpasses human intelligence, forever altering society as we know it.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-purple-900/30 to-black/30 p-8 rounded-2xl border border-green-400/20 backdrop-blur-sm">
                <blockquote className="text-lg sm:text-xl text-gray-200 italic leading-relaxed mb-6">
                  "Symphony of the Singularity masterfully weaves together decades of technological advancement into a compelling narrative that feels both historically grounded and eerily prophetic. This is essential reading for anyone seeking to understand our technological trajectory."
                </blockquote>
                <cite className="text-green-400 font-semibold">— Tech Futures Review</cite>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="bg-green-400/10 p-4 rounded-lg border border-green-400/20">
                  <div className="text-2xl font-bold text-green-400">70+</div>
                  <div className="text-sm text-gray-400">Years Covered</div>
                </div>
                <div className="bg-blue-400/10 p-4 rounded-lg border border-blue-400/20">
                  <div className="text-2xl font-bold text-blue-400">15+</div>
                  <div className="text-sm text-gray-400">Key Technologies</div>
                </div>
                <div className="bg-purple-400/10 p-4 rounded-lg border border-purple-400/20">
                  <div className="text-2xl font-bold text-purple-400">∞</div>
                  <div className="text-sm text-gray-400">Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-green-400" 
              style={{ fontFamily: 'Orbitron, monospace' }}>
            Ready to Explore the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of readers discovering the fascinating history and future of artificial intelligence.
          </p>
          <a 
            href="https://books2read.com/u/brLXkM" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-black font-bold text-xl px-12 py-6 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-400/25 active:scale-95"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Get Your Copy Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-green-400/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <p className="text-gray-400 mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
                © 2025 Andrew C Squire. All rights reserved.
              </p>
              <a 
                href="https://books2read.com/u/brLXkM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors duration-300 underline"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Symphony of the Singularity - Available Now
              </a>
            </div>
            
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;