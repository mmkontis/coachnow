'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#050609] py-12 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="flex items-center group">
            <div className="text-xl font-black tracking-tighter relative z-10 flex items-center whitespace-nowrap">
              <span className="text-white">Coach</span>
              <span className="text-white">Now</span>
              <span className="text-white ml-1 text-glow-ai group-hover:animate-pulse transition-all duration-700 relative">
                AI
                <span className="absolute -inset-1 bg-white/5 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-md"></span>
              </span>
            </div>
          </Link>

          <div className="text-xs font-light text-white/40">
            © {new Date().getFullYear()} CoachNow AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;