'use client';

import Link from "next/link";
import { useEffect, useRef } from "react";
import Image from 'next/image';

const HeroSection = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current || !cardRef.current) return;
      
      // Handle background glow effect
      const { clientX, clientY } = e;
      const glowRect = glowRef.current.getBoundingClientRect();
      const glowCenterX = glowRect.left + glowRect.width / 2;
      const glowCenterY = glowRect.top + glowRect.height / 2;
      
      const moveX = (clientX - glowCenterX) * 0.01;
      const moveY = (clientY - glowCenterY) * 0.01;
      
      glowRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      
      // Handle card 3D rotation
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      
      const rotateY = ((clientX - cardCenterX) / cardRect.width) * 4;
      const rotateX = ((cardCenterY - clientY) / cardRect.height) * 4;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0 z-0 bg-[#050609]">
        <div className="w-full h-full relative overflow-hidden">
          <div className="absolute inset-0 bg-[#050609]"></div>
          <div ref={glowRef} className="absolute inset-0 opacity-15 transition-transform duration-500 ease-out">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#050609" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="50" fill="url(#gradient)" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-fixed opacity-[0.03]"></div>
          
          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            <Image 
              src="/floating-elements.svg" 
              alt="Floating UI Elements"
              fill
              className="object-cover opacity-[0.15]"
              priority
            />
          </div>
          
          {/* Premium particle background - subtle floating dots */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-[1px] h-[1px] bg-white/30 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.2 + 0.1,
                  animation: `float ${Math.random() * 10 + 15}s linear infinite`
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-16">
          <div className="max-w-xl">
            <div className="inline-block mb-6 px-4 py-1.5 border border-white/5 rounded-full bg-white/[0.02] backdrop-blur-sm">
              <span className="text-[10px] font-extralight tracking-[0.25em] text-white/60 uppercase">Premium AI Experience</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1] letter-spacing-[-0.02em]">
              <span className="relative inline-block">
                <span className="text-glow-ai group-hover:animate-pulse transition-all duration-700 relative">
                  AI-Driven
                  <span className="absolute -inset-1 bg-white/5 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-md"></span>
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
              </span>{" "}
              <br />
              <span className="text-glow-ai group-hover:animate-pulse transition-all duration-700 relative">
                Personalized
                <span className="absolute -inset-1 bg-white/5 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-md"></span>
              </span>{" "}
              <span className="text-glow-ai group-hover:animate-pulse transition-all duration-700 relative">
                Training
                <span className="absolute -inset-1 bg-white/5 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-md"></span>
              </span>
            </h1>
            <p className="text-white/50 mb-10 text-lg font-extralight leading-relaxed tracking-wide">
              Train smarter. Perform better. The future of fitness is here.
            </p>
            <div className="flex gap-5">
              <Link 
                href="#features" 
                className="bg-white/[0.03] hover:bg-white/[0.06] text-white font-extralight py-4 px-8 rounded-sm transition-all duration-300 backdrop-blur-sm border border-white/5 hover:border-white/15 group relative overflow-hidden tracking-wider"
              >
                <span className="relative z-10 text-sm uppercase tracking-[0.15em]">Discover</span>
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute top-0 right-0 w-full h-full bg-white/0 group-hover:bg-white/[0.02] transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-all duration-700"></div>
                </div>
                <div className="absolute bottom-0 left-0 h-[0.5px] w-0 bg-white/20 group-hover:w-full transition-all duration-500"></div>
              </Link>
              <Link 
                href="#pricing" 
                className="border border-white/5 hover:border-white/15 text-white font-extralight py-4 px-8 rounded-sm transition-all duration-300 bg-white/0 backdrop-blur-sm relative overflow-hidden group tracking-wider"
              >
                <span className="relative z-10 text-sm uppercase tracking-[0.15em]">Membership</span>
                <div className="absolute bottom-0 left-0 h-[0.5px] w-0 bg-white/20 group-hover:w-full transition-all duration-500"></div>
              </Link>
            </div>
            
            <div className="flex items-center mt-16 opacity-70">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="w-6 h-6 rounded-full border border-white/10 overflow-hidden">
                    <Image 
                      src={`https://randomuser.me/api/portraits/men/${num + 20}.jpg`} 
                      alt="Member"
                      width={24}
                      height={24}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-[10px] font-extralight text-white/50 tracking-[0.15em] uppercase">
                  Join <span className="text-white/80">10,000+</span> elite members
                </p>
              </div>
            </div>
          </div>
          
          <div ref={cardRef} className="relative h-[400px] md:h-[450px] w-full md:w-96 mt-6 md:mt-0 mb-16 md:mb-0 transition-transform duration-700 ease-out">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative p-8">
                {/* Premium glassmorphism effect with multiple layers */}
                <div className="absolute inset-0 rounded-sm bg-white/[0.01] border border-white/5 backdrop-blur-md shadow-[0_0_35px_rgba(255,255,255,0.02)] transition-all duration-700"></div>
                <div className="absolute inset-[1px] rounded-sm bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-md"></div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between">
                  {/* Progress Bar */}
                  <div className="space-y-4">
                    <div className="h-1 bg-[#0a0e17] rounded-sm overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-white/5 to-white/15 rounded-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/30 to-white/5 animate-[pulse_4s_ease-in-out_infinite]"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-[10px] text-white/30 mb-1 font-extralight uppercase tracking-[0.25em]">AI Progression</div>
                      <div className="text-3xl font-light text-white/90 tracking-wide">245% <span className="text-white/40 text-sm font-extralight">increase</span></div>
                    </div>
                  </div>
                  
                  {/* Weekly Metrics */}
                  <div className="space-y-6 my-8">
                    <div className="text-[10px] text-white/30 mb-3 font-extralight uppercase tracking-[0.25em]">Weekly Metrics</div>
                    <div className="flex justify-between gap-4">
                      <div className="text-center relative flex-1">
                        <div className="text-2xl font-light text-white/90 tracking-wide">87%</div>
                        <div className="text-[10px] text-white/30 font-extralight uppercase tracking-[0.2em] mt-1">Strength</div>
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-[0.5px] bg-white/10"></div>
                      </div>
                      <div className="text-center relative flex-1">
                        <div className="text-2xl font-light text-white/90 tracking-wide">92%</div>
                        <div className="text-[10px] text-white/30 font-extralight uppercase tracking-[0.2em] mt-1">Endurance</div>
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-[0.5px] bg-white/10"></div>
                      </div>
                      <div className="text-center relative flex-1">
                        <div className="text-2xl font-light text-white/90 tracking-wide">78%</div>
                        <div className="text-[10px] text-white/30 font-extralight uppercase tracking-[0.2em] mt-1">Recovery</div>
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-[0.5px] bg-white/10"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Start Training Button */}
                  <div className="flex items-center group/button cursor-pointer mt-auto">
                    <div className="w-8 h-8 rounded-sm bg-white/[0.02] flex items-center justify-center text-white/70 border border-white/5 group-hover/button:bg-white/5 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <div className="text-[10px] text-white/30 font-extralight uppercase tracking-[0.25em]">Start Training</div>
                      <div className="text-sm text-white/80 relative inline-block tracking-wide font-light">
                        Personalized Session
                        <div className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-white/20 group-hover/button:w-full transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 