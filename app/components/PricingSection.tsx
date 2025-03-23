'use client';

import { getVisiblePlans } from '../utils/dataUtils';
import { useRef } from 'react';
import { MessageCircle, Instagram, Shield } from 'react-feather';

const PricingSection = () => {
  const plans = getVisiblePlans();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={sectionRef} id="pricing" className="py-32 bg-[#050609] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-fixed opacity-[0.03]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1] letter-spacing-[-0.02em]">
            <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
              Choose Your Plan
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Premium card background */}
              <div className="absolute inset-0 bg-white/[0.01] border border-white/5 backdrop-blur-md rounded-xl transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Content */}
              <div className="relative p-12 transition-all duration-500 group-hover:transform group-hover:translate-y-[-2px]">
                <h3 className="text-2xl font-light text-white tracking-wide mb-2">{plan.name}</h3>
                
                <div className="mb-8">
                  {plan.price === 0 ? (
                    <div className="flex items-baseline">
                      <span className="text-3xl font-light text-white">Free</span>
                      <span className="text-white/30 text-xs ml-2 font-extralight">Forever</span>
                    </div>
                  ) : (
                    <div className="flex items-baseline">
                      <span className="text-4xl font-light text-white">€{plan.price}</span>
                      <span className="text-white/30 text-xs ml-2 font-extralight">
                        /{plan.period || 'month'}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-sm bg-white/[0.02] flex items-center justify-center border border-white/5">
                      <MessageCircle size={16} className="text-white/60" />
                    </div>
                    <div>
                      <h4 className="text-sm text-white/90 font-light">{plan.price === 0 ? 'Community Support' : 'Priority DM Support'}</h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-sm bg-white/[0.02] flex items-center justify-center border border-white/5">
                      <Instagram size={16} className="text-white/60" />
                    </div>
                    <div>
                      <h4 className="text-sm text-white/90 font-light">{plan.price === 0 ? 'Basic Analytics' : 'Advanced Analytics'}</h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-sm bg-white/[0.02] flex items-center justify-center border border-white/5">
                      <Shield size={16} className="text-white/60" />
                    </div>
                    <div>
                      <h4 className="text-sm text-white/90 font-light">{plan.price === 0 ? 'Basic Features' : 'Premium Features'}</h4>
                    </div>
                  </div>
                </div>
                
                <button 
                  className={
                    plan.featured 
                      ? 'w-full relative bg-white border border-white/10 rounded-lg px-6 py-3 text-sm font-medium text-[#030306] tracking-wide transition-all duration-300 hover:bg-white/90'
                      : 'w-full relative bg-white/[0.02] border border-white/5 rounded-lg px-6 py-3 text-sm font-medium text-white tracking-wide transition-all duration-300 hover:bg-white/[0.04]'
                  }
                >
                  {plan.price === 0 ? 'Start Free' : 'Upgrade Now'}
                </button>
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

export default PricingSection;