'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  return (
    <section ref={sectionRef} className="py-32 bg-[#050609] relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-fixed opacity-[0.03]"></div>
      <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl mx-auto">
          {/* Premium corner accents */}
          <div className="absolute -top-4 -left-4 w-12 h-12">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/40 to-transparent"></div>
            <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-white/40 to-transparent"></div>
          </div>
          <div className="absolute -top-4 -right-4 w-12 h-12">
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-white/40 to-transparent"></div>
            <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-white/40 to-transparent"></div>
          </div>
          
          <div className="text-center space-y-8">
            <div className="inline-block px-4 py-1.5 mb-4 border border-white/5 rounded-full bg-white/[0.02] backdrop-blur-sm">
              <span className="text-[10px] font-light tracking-[0.2em] text-white/80 uppercase">
                Elite Training System
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] letter-spacing-[-0.02em]">
              <span className="relative inline-block">
                Become an
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </span>
              {" "}
              <span className="text-white ml-1 text-glow-ai group-hover:animate-pulse transition-all duration-700 relative">
                AI Coach
                <span className="absolute -inset-1 bg-white/5 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-md"></span>
              </span>
            </h2>

            <p className="text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
              Join the elite community of athletes transforming their potential with AI-powered precision training.
            </p>

            <div className="flex justify-center gap-5 pt-8">
              <button 
                onClick={() => router.push('/apply')}
                className="bg-white/[0.03] hover:bg-white/[0.06] text-white font-extralight py-4 px-8 rounded-sm transition-all duration-300 backdrop-blur-sm border border-white/5 hover:border-white/15 group relative overflow-hidden tracking-wider"
              >
                <span className="relative z-10 text-sm uppercase tracking-[0.15em]">Answer Questionnaire</span>
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute top-0 right-0 w-full h-full bg-white/0 group-hover:bg-white/[0.02] transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-all duration-700"></div>
                </div>
                <div className="absolute bottom-0 left-0 h-[0.5px] w-0 bg-white/20 group-hover:w-full transition-all duration-500"></div>
              </button>

              <div className="text-white/50 font-light text-base px-4 flex items-center">or</div>

              <a 
                href="https://calendar.app.google/36nLYVrPf3wYKh7u9"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/5 hover:border-white/15 text-white font-extralight py-4 px-8 rounded-sm transition-all duration-300 bg-white/0 backdrop-blur-sm relative overflow-hidden group tracking-wider"
              >
                <span className="relative z-10 text-sm uppercase tracking-[0.15em] text-glow-ai group-hover:animate-pulse transition-all duration-700">Book a Call</span>
                <span className="absolute -inset-1 bg-white/5 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-md"></span>
                <div className="absolute bottom-0 left-0 h-[0.5px] w-0 bg-white/20 group-hover:w-full transition-all duration-500"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;