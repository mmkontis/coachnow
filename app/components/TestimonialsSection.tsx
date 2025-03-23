'use client';

import Image from "next/image";
import { getAllTestimonials } from '../utils/dataUtils';
import { useRef, useEffect } from 'react';

const TestimonialsSection = () => {
  const testimonials = getAllTestimonials();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const createParticles = () => {
      const section = sectionRef.current;
      if (!section) return;
      
      // Clear existing particles
      const existingParticles = section.querySelectorAll('.testimonial-particle');
      existingParticles.forEach(p => p.remove());
      
      // Create new particles
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'testimonial-particle absolute w-[1px] h-[1px] bg-white/20 rounded-full';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.2 + 0.05}`;
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
    <section ref={sectionRef} className="py-28 bg-[#050609] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-fixed opacity-[0.02]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block mb-6 px-4 py-1.5 border border-white/5 rounded-full bg-white/[0.02] backdrop-blur-sm">
            <span className="text-[10px] font-extralight tracking-[0.25em] text-white/60 uppercase">Client Experiences</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight text-white">
            <span className="relative inline-block">
              Success
              <span className="absolute -bottom-1 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
            </span>{" "}
            <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
              Stories
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto font-extralight text-lg tracking-wide leading-relaxed">
            Real results from our AI-powered training methodology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              {/* Premium glassmorphism card */}
              <div className="absolute inset-0 rounded-sm bg-white/[0.01] border border-white/5 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.01)] transition-all duration-700 group-hover:shadow-[0_0_35px_rgba(255,255,255,0.03)] transform group-hover:translate-y-[-5px]"></div>
              <div className="absolute inset-[1px] rounded-sm bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-sm"></div>
              
              {/* Edge highlights */}
              <div className="absolute top-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-[0.5px] bg-white/15"></div>
              <div className="absolute top-0 left-0 h-4 w-[0.5px] bg-white/15"></div>
              <div className="absolute top-0 right-0 w-4 h-[0.5px] bg-white/15"></div>
              <div className="absolute top-0 right-0 h-4 w-[0.5px] bg-white/15"></div>
              <div className="absolute bottom-0 left-0 w-4 h-[0.5px] bg-white/15"></div>
              <div className="absolute bottom-0 left-0 h-4 w-[0.5px] bg-white/15"></div>
              <div className="absolute bottom-0 right-0 w-4 h-[0.5px] bg-white/15"></div>
              <div className="absolute bottom-0 right-0 h-4 w-[0.5px] bg-white/15"></div>
              
              {/* Content container */}
              <div className="relative p-8 z-10">
                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className="w-14 h-14 relative rounded-sm overflow-hidden border border-white/10 group-hover:border-white/15 transition-all duration-500">
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        fill
                        className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    <div className="absolute top-0 right-0 left-0 bottom-0 border border-white/5 rounded-sm"></div>
                  </div>
                  <div className="ml-5">
                    <h4 className="font-light text-white/90 tracking-wide">{testimonial.name}</h4>
                    <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-extralight mt-1">{testimonial.title}</p>
                  </div>
                </div>
                
                {/* Quote with stylized quotes */}
                <div className="relative">
                  <div className="absolute -top-2 -left-1 text-2xl text-white/10 font-light">&ldquo;</div>
                  <p className="text-white/60 text-sm font-extralight leading-relaxed tracking-wide pl-3">
                    {testimonial.quote}
                  </p>
                  <div className="absolute -bottom-4 -right-1 text-2xl text-white/10 font-light">&rdquo;</div>
                </div>
                
                {/* Results section */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="text-[10px] text-white/30 font-extralight uppercase tracking-[0.2em] mb-3">
                    Measurable Results
                  </div>
                  <div className="flex justify-between">
                    {Object.entries(testimonial.results).map(([key, value], idx) => (
                      <div key={idx} className="text-center relative">
                        <div className="text-lg font-light text-white/90 tracking-wide">{value}</div>
                        <div className="text-[10px] text-white/30 font-extralight uppercase tracking-[0.15em] mt-1">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-[0.5px] bg-white/10"></div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Rating stars */}
                <div className="mt-8 flex justify-end">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-3 h-3 text-white/40" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;