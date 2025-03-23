'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050609] text-white py-16 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-12">
          {/* Centered Logo */}
          <div className="flex items-center group">
            <div className="relative">
              <div className="text-4xl font-black tracking-tighter relative z-10 flex items-center">
                <div className="relative">
                  <span className="text-white">Coach</span>
                  <span className="text-white">Now</span>
                  <span className="text-white ml-1 text-glow-ai group-hover:animate-pulse transition-all duration-700 relative">
                    AI
                    <span className="absolute -inset-1 bg-white/5 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-md"></span>
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-white/20 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20">
            <div>
              <h3 className="text-[10px] text-white/30 uppercase tracking-[0.25em] mb-4 text-center">Athletes</h3>
              <ul className="space-y-3 text-center">
                <li><Link href="#categories" className="text-xs font-extralight text-white/60 hover:text-white transition-colors tracking-[0.2em] uppercase">Elite</Link></li>
                <li><Link href="#testimonials" className="text-xs font-extralight text-white/60 hover:text-white transition-colors tracking-[0.2em] uppercase">Stories</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] text-white/30 uppercase tracking-[0.25em] mb-4 text-center">Plans</h3>
              <ul className="space-y-3 text-center">
                <li><Link href="#features" className="text-xs font-extralight text-white/60 hover:text-white transition-colors tracking-[0.2em] uppercase">Programs</Link></li>
                <li><Link href="#pricing" className="text-xs font-extralight text-white/60 hover:text-white transition-colors tracking-[0.2em] uppercase">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] text-white/30 uppercase tracking-[0.25em] mb-4 text-center">Company</h3>
              <ul className="space-y-3 text-center">
                <li><Link href="#cta" className="text-xs font-extralight text-white/60 hover:text-white transition-colors tracking-[0.2em] uppercase">About</Link></li>
                <li><Link href="#cta" className="text-xs font-extralight text-white/60 hover:text-white transition-colors tracking-[0.2em] uppercase">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] text-white/30 uppercase tracking-[0.25em] mb-4 text-center">Social</h3>
              <ul className="space-y-3 text-center">
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xs font-extralight text-white/60 hover:text-white transition-colors tracking-[0.2em] uppercase">Instagram</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xs font-extralight text-white/60 hover:text-white transition-colors tracking-[0.2em] uppercase">Twitter</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-12 border-t border-white/5 w-full text-center">
            <p className="text-white/30 text-xs font-extralight tracking-[0.2em] uppercase">
              © {currentYear} CoachNow AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;