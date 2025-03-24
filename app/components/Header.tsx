'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (sectionId: string) => {
    if (pathname === '/') {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home page with section hash
      router.push(`/#${sectionId}`);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-[#050609]/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-auto py-2">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <div className="text-2xl md:text-4xl font-black tracking-tighter relative z-10 flex items-center whitespace-nowrap">
                  <div className="relative flex items-center">
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
            </Link>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex space-x-10 items-center">
                <button 
                  onClick={() => handleNavigation('categories')}
                  className="text-xs font-light text-white/60 hover:text-white transition-colors tracking-[0.2em] uppercase py-2.5"
                >
                  Athletes
                </button>
                <button 
                  onClick={() => handleNavigation('features')}
                  className="text-xs font-light text-white/60 hover:text-white transition-colors tracking-[0.2em] uppercase py-2.5"
                >
                  Plans
                </button>
                <button 
                  onClick={() => handleNavigation('testimonials')}
                  className="text-xs font-light text-white/60 hover:text-white transition-colors tracking-[0.2em] uppercase py-2.5"
                >
                  Stories
                </button>
                <button 
                  onClick={() => handleNavigation('pricing')}
                  className="text-xs font-light text-white/60 hover:text-white transition-colors tracking-[0.2em] uppercase py-2.5"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => router.push('/apply')}
                  className="text-xs font-light text-gray-900 bg-white hover:bg-gray-100 px-6 py-2.5 rounded-sm transition-all duration-300 tracking-[0.15em] uppercase transform hover:translate-y-[-2px] shadow-lg shadow-white/20"
                >
                  Become a Coach
                </button>
              </div>
              
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden w-10 h-10 flex items-center justify-center bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-sm hover:bg-white/[0.05] transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-screen w-64 bg-[#050609] border-l border-white/5 z-50 transform transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6">
          <div className="flex justify-end mb-8">
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center bg-white/[0.02] rounded-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            <button 
              onClick={() => handleNavigation('categories')}
              className="text-xs font-light text-white/60 hover:text-white transition-colors tracking-[0.2em] uppercase py-2 text-left"
            >
              Athletes
            </button>
            <button 
              onClick={() => handleNavigation('features')}
              className="text-xs font-light text-white/60 hover:text-white transition-colors tracking-[0.2em] uppercase py-2 text-left"
            >
              Plans
            </button>
            <button 
              onClick={() => handleNavigation('testimonials')}
              className="text-xs font-light text-white/60 hover:text-white transition-colors tracking-[0.2em] uppercase py-2 text-left"
            >
              Stories
            </button>
            <button 
              onClick={() => handleNavigation('pricing')}
              className="text-xs font-light text-white/60 hover:text-white transition-colors tracking-[0.2em] uppercase py-2 text-left"
            >
              Pricing
            </button>
            <button 
              onClick={() => {
                router.push('/apply');
                setIsMobileMenuOpen(false);
              }}
              className="text-xs font-light text-gray-900 bg-white hover:bg-gray-100 px-6 py-2.5 rounded-sm transition-all duration-300 tracking-[0.15em] uppercase text-center"
            >
              Become a Coach
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header; 