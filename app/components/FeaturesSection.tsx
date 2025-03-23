'use client';

import { useRef, useEffect } from 'react';
import { Activity, Coffee, Sun } from 'react-feather';

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const features = [
    {
      title: "Fitness AI",
      description: "Personalized training plans that adapt to your progress.",
      Icon: Activity
    },
    {
      title: "Diet AI",
      description: "Custom nutrition guidance based on your body composition.",
      Icon: Coffee
    },
    {
      title: "Lifestyle AI",
      description: "Holistic wellness recommendations for complete health.",
      Icon: Sun
    }
  ];

  useEffect(() => {
    const createParticles = () => {
      const section = sectionRef.current;
      if (!section) return;
      
      // Clear existing particles
      const existingParticles = section.querySelectorAll('.feature-particle');
      existingParticles.forEach(p => p.remove());
      
      // Create new particles
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'feature-particle absolute w-[1px] h-[1px] bg-white/30 rounded-full';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.2 + 0.1}`;
        particle.style.animation = `float ${Math.random() * 10 + 15}s linear infinite`;
        section.appendChild(particle);
      }
    };
    
    createParticles();
    window.addEventListener('resize', createParticles);
    
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-32 bg-[#050609] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-fixed opacity-[0.03]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-4 py-1.5 border border-white/5 rounded-full bg-white/[0.02] backdrop-blur-sm">
            <span className="text-[10px] font-extralight tracking-[0.25em] text-white/60 uppercase">
              AI Training Paths
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1] letter-spacing-[-0.02em]">
            <span className="relative inline-block">
              Intelligent
              <span className="absolute -bottom-1 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
            </span>{" "}
            <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
              Training
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Premium card background */}
              <div className="absolute inset-0 bg-white/[0.01] border border-white/5 backdrop-blur-md transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Content */}
              <div className="relative p-12 transition-all duration-500 group-hover:transform group-hover:translate-y-[-2px]">
                {/* Icon container */}
                <div className="mb-8 relative">
                  <div className="w-12 h-12 rounded-sm bg-white/[0.02] flex items-center justify-center border border-white/5 group-hover:bg-white/[0.04] transition-all duration-300">
                    <feature.Icon 
                      size={24}
                      className="text-white opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-white tracking-wide mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-white/40 text-xs font-extralight leading-relaxed tracking-wide mb-8">
                  {feature.description}
                </p>

                <div className="flex items-center group/button cursor-pointer">
                  <div className="w-8 h-8 rounded-sm bg-white/[0.02] flex items-center justify-center text-white/70 border border-white/5 group-hover/button:bg-white/5 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="text-[10px] text-white/30 font-extralight uppercase tracking-[0.25em]">Start Now</div>
                    <div className="text-sm text-white/80 relative inline-block tracking-wide font-light">
                      Explore Path
                      <div className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-white/20 group-hover/button:w-full transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium corner accents */}
              <div className="absolute top-0 left-0 w-5 h-[0.5px] bg-white/20"></div>
              <div className="absolute top-0 left-0 h-5 w-[0.5px] bg-white/20"></div>
              <div className="absolute top-0 right-0 w-5 h-[0.5px] bg-white/20"></div>
              <div className="absolute top-0 right-0 h-5 w-[0.5px] bg-white/20"></div>
              <div className="absolute bottom-0 left-0 w-5 h-[0.5px] bg-white/10"></div>
              <div className="absolute bottom-0 left-0 h-5 w-[0.5px] bg-white/10"></div>
              <div className="absolute bottom-0 right-0 w-5 h-[0.5px] bg-white/10"></div>
              <div className="absolute bottom-0 right-0 h-5 w-[0.5px] bg-white/10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
