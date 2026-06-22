import React from 'react';

export function NewsletterSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 to-blue-900/20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-green-400" style={{ fontFamily: 'Orbitron, monospace' }}>Stay Updated</h2>
        <p className="text-lg text-gray-300 mb-8">Get notified about new releases, AI insights, and exclusive content from Andrew C Squire.</p>
        <form action="https://formspree.io/f/xpwdqjkl" method="POST" className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input type="email" name="email" placeholder="Enter your email" required className="flex-1 px-6 py-4 rounded-full bg-black/50 border border-green-400/30 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors" />
          <button type="submit" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">Subscribe</button>
        </form>
        <p className="text-gray-500 text-sm mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}