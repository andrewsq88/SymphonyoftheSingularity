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
                  alt="Symphony of the Singularity Book Cover - AI Robots Humanoid Machines Artificial Intelligence Novel by Andrew C Squire"
                  className="relative w-full h-auto rounded-lg shadow-2xl border-2 border-green-400/30 object-cover"
                  style={{ aspectRatio: '3/4', maxHeight: '500px' }}
                  loading="eager"
                />
              </div>
            </div>
            
            {/* Hero Content */}
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-green-400">
                From 1950s Automation to Humanoid Robots, Machine Learning & AI Dominance
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                Witness the extraordinary journey of technological evolution from early automation to advanced artificial intelligence systems, machine learning algorithms, autonomous robots, and neural networks as humanity races toward the singularity.
              </p>
              
              <a
                href="https://books2read.com/u/brLXkM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-black font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-400/25 active:scale-95"
                style={{ fontFamily: 'Roboto, sans-serif' }}
                onClick={() => {
                  if (window.gtag) {
                    window.gtag('event', 'click', {
                      event_category: 'CTA',
                      event_label: 'Buy Now - Hero Section'
                    });
                  }
                }}
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
                    Beginning with the pioneering industrial automation systems and early robotics of the 1950s, witness how humanity first began delegating tasks to manufacturing robots and automated machines, setting the stage for an unprecedented technological revolution in artificial intelligence and robot automation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Zap className="w-8 h-8 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">Exponential Evolution</h3>
                  <p className="text-gray-300 leading-relaxed">
                    From Tesla Autopilot self-driving technology and autonomous vehicles to Boston Dynamics' Atlas humanoid robot and Spot quadruped robot, from deep learning neural networks to reinforcement learning algorithms and transformer models - explore how machine learning and artificial intelligence have evolved from simple automation to sophisticated AI systems powered by GPT large language models, computer vision, and natural language processing that challenge the very definition of consciousness.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Users className="w-8 h-8 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">Society Transformed</h3>
                  <p className="text-gray-300 leading-relaxed">
                    As robotics companies like Unitree, Figure AI, and OpenAI push the boundaries of robotic dexterity with humanoid robots and collaborative robots (cobots), and artificial intelligence reaches unprecedented capabilities through generative AI and autonomous systems, humanity stands at the precipice of the technological singularity - a point where artificial general intelligence (AGI) surpasses human intelligence, forever altering society with autonomous drones, robotic surgery, and AI consciousness.
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
            onClick={() => {
              if (window.gtag) {
                window.gtag('event', 'click', {
                  event_category: 'CTA',
                  event_label: 'Get Your Copy Today - Main CTA'
                });
              }
            }}
          >
            Get Your Copy Today
          </a>
        </div>
      </section>

      {/* Technologies & Topics Explored Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-green-400"
                style={{ fontFamily: 'Orbitron, monospace' }}>
              Technologies & Topics Explored
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the comprehensive range of AI technologies, robotics innovations, and breakthrough developments covered in Symphony of the Singularity.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Category 1: Artificial Intelligence & Machine Learning */}
            <div className="bg-gradient-to-br from-green-900/20 to-black/50 p-8 rounded-2xl border border-green-400/30 backdrop-blur-sm hover:border-green-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-6 text-green-400" style={{ fontFamily: 'Orbitron, monospace' }}>
                Artificial Intelligence & Machine Learning
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Machine Learning algorithms and applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Deep Learning and neural network architectures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Artificial General Intelligence (AGI) development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>GPT models and Large Language Models (LLMs)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Transformer models and attention mechanisms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Reinforcement Learning in AI systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Natural Language Processing (NLP) evolution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Generative AI and creative applications</span>
                </li>
              </ul>
            </div>

            {/* Category 2: Humanoid & Industrial Robots */}
            <div className="bg-gradient-to-br from-blue-900/20 to-black/50 p-8 rounded-2xl border border-blue-400/30 backdrop-blur-sm hover:border-blue-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-6 text-blue-400" style={{ fontFamily: 'Orbitron, monospace' }}>
                Humanoid & Industrial Robots
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Boston Dynamics Atlas humanoid robot</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Boston Dynamics Spot quadruped robot</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Tesla Optimus humanoid robot development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Unitree robotics and advanced dexterity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Industrial robots and manufacturing automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Collaborative robots (cobots) in workplaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Companion robots and human-robot interaction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Robotic arms and precision manipulation</span>
                </li>
              </ul>
            </div>

            {/* Category 3: Autonomous Systems & Vehicles */}
            <div className="bg-gradient-to-br from-purple-900/20 to-black/50 p-8 rounded-2xl border border-purple-400/30 backdrop-blur-sm hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-6 text-purple-400" style={{ fontFamily: 'Orbitron, monospace' }}>
                Autonomous Systems & Vehicles
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Tesla Autopilot and self-driving technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Autonomous vehicles and self-driving cars</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Computer vision systems for robotics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>SLAM technology for autonomous navigation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Autonomous drones and aerial robotics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Sensor fusion and robotic perception</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Path planning and motion control algorithms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Robot Operating System (ROS) framework</span>
                </li>
              </ul>
            </div>

            {/* Category 4: Neural Networks & Deep Learning */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-black/50 p-8 rounded-2xl border border-cyan-400/30 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400" style={{ fontFamily: 'Orbitron, monospace' }}>
                Neural Networks & Deep Learning
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Convolutional Neural Networks (CNNs)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Recurrent Neural Networks (RNNs)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Generative Adversarial Networks (GANs)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>PyTorch and TensorFlow frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Deep learning for computer vision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Neural network training and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Backpropagation and gradient descent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Transfer learning and model fine-tuning</span>
                </li>
              </ul>
            </div>

            {/* Category 5: Robotics Companies & Innovations */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-black/50 p-8 rounded-2xl border border-yellow-400/30 backdrop-blur-sm hover:border-yellow-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400" style={{ fontFamily: 'Orbitron, monospace' }}>
                Robotics Companies & Innovations
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Boston Dynamics breakthrough innovations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Tesla's AI and robotics developments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>OpenAI and large language model research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Figure AI humanoid robot advancements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Unitree robotic dexterity achievements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Robotic surgery and medical robotics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Industrial automation pioneers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Emerging robotics startups and innovations</span>
                </li>
              </ul>
            </div>

            {/* Category 6: Future Technologies & The Singularity */}
            <div className="bg-gradient-to-br from-pink-900/20 to-black/50 p-8 rounded-2xl border border-pink-400/30 backdrop-blur-sm hover:border-pink-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-6 text-pink-400" style={{ fontFamily: 'Orbitron, monospace' }}>
                Future Technologies & The Singularity
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>The Technological Singularity explained</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>Artificial General Intelligence (AGI) future</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>AI consciousness and self-awareness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>Human-AI collaboration and symbiosis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>Ethical implications of advanced AI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>Society transformation through automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>Post-singularity world scenarios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>The future of work in an AI-driven world</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Keywords Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl border border-gray-700/30">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-200" style={{ fontFamily: 'Orbitron, monospace' }}>
              Key Topics & Concepts
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-green-900/30 text-green-300 rounded-full text-sm border border-green-400/30">Robot Automation</span>
              <span className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-400/30">Pattern Recognition</span>
              <span className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-400/30">Voice Recognition</span>
              <span className="px-4 py-2 bg-cyan-900/30 text-cyan-300 rounded-full text-sm border border-cyan-400/30">Image Recognition</span>
              <span className="px-4 py-2 bg-yellow-900/30 text-yellow-300 rounded-full text-sm border border-yellow-400/30">Robotic Dexterity</span>
              <span className="px-4 py-2 bg-pink-900/30 text-pink-300 rounded-full text-sm border border-pink-400/30">AI Ethics</span>
              <span className="px-4 py-2 bg-green-900/30 text-green-300 rounded-full text-sm border border-green-400/30">Machine Vision</span>
              <span className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-400/30">Automation History</span>
              <span className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-400/30">AI Safety</span>
              <span className="px-4 py-2 bg-cyan-900/30 text-cyan-300 rounded-full text-sm border border-cyan-400/30">Cognitive Computing</span>
              <span className="px-4 py-2 bg-yellow-900/30 text-yellow-300 rounded-full text-sm border border-yellow-400/30">Smart Robotics</span>
              <span className="px-4 py-2 bg-pink-900/30 text-pink-300 rounded-full text-sm border border-pink-400/30">Human-Robot Interaction</span>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From 1950s industrial automation to cutting-edge humanoid robots and artificial general intelligence - explore the complete journey.
            </p>
            <a
              href="https://books2read.com/u/brLXkM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-black font-bold text-lg px-10 py-5 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-400/25 active:scale-95"
              style={{ fontFamily: 'Roboto, sans-serif' }}
              onClick={() => {
                if (window.gtag) {
                  window.gtag('event', 'click', {
                    event_category: 'CTA',
                    event_label: 'Buy Now - Technologies Section'
                  });
                }
              }}
            >
              <BookOpen className="inline-block w-5 h-5 mr-2" />
              Explore the Book
            </a>
          </div>
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
              <p className="text-gray-500 text-sm mb-2">
                AI Robots | Humanoid Robots | Machine Learning | Artificial Intelligence | Robotics Book
              </p>
              <a
                href="https://books2read.com/u/brLXkM"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors duration-300 underline"
                style={{ fontFamily: 'Roboto, sans-serif' }}
                onClick={() => {
                  if (window.gtag) {
                    window.gtag('event', 'click', {
                      event_category: 'CTA',
                      event_label: 'Footer Link'
                    });
                  }
                }}
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