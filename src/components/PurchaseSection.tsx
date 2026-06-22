import React from 'react';
import { BookOpen } from 'lucide-react';

export function PurchaseSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-green-400" style={{ fontFamily: 'Orbitron, monospace' }}>Get Your Copy</h2>
        <p className="text-xl text-gray-300 mb-10 leading-relaxed">Available in multiple formats. Choose your preferred retailer.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a href="https://books2read.com/u/brLXkM" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-green-900/40 to-black/50 p-6 rounded-2xl border border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105">
            <BookOpen className="w-10 h-10 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-400 mb-2">eBook</h3>
            <p className="text-gray-400 text-sm mb-4">Kindle, Apple Books, Kobo & more</p>
            <span className="inline-block bg-green-400 text-black font-bold px-6 py-2 rounded-full text-sm">Buy eBook</span>
          </a>
          <a href="https://books2read.com/u/brLXkM" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-blue-900/40 to-black/50 p-6 rounded-2xl border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105">
            <BookOpen className="w-10 h-10 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-blue-400 mb-2">Paperback</h3>
            <p className="text-gray-400 text-sm mb-4">Amazon, Barnes & Noble & more</p>
            <span className="inline-block bg-blue-400 text-black font-bold px-6 py-2 rounded-full text-sm">Buy Paperback</span>
          </a>
          <a href="https://books2read.com/u/brLXkM" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-purple-900/40 to-black/50 p-6 rounded-2xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
            <BookOpen className="w-10 h-10 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-purple-400 mb-2">Hardcover</h3>
            <p className="text-gray-400 text-sm mb-4">Premium edition available</p>
            <span className="inline-block bg-purple-400 text-black font-bold px-6 py-2 rounded-full text-sm">Buy Hardcover</span>
          </a>
        </div>
      </div>
    </section>
  );
}