'use client';

import { useState, useEffect } from 'react';
import { getAllCategories, getAthletesByCategory } from '../utils/dataUtils';
import { Category, Athlete } from '../types/data';
import AthleteCard from './AthleteCard';

// Emoji mapping for each category
const categoryEmojis: Record<string, string> = {
  'cat-1': '🏋️',   // Lifting
  'cat-2': '🏃',   // Running
  'cat-3': '🥊',   // Boxing
  'cat-4': '⚡',   // Grinding
  'cat-5': '🚴',   // Cycling
  'cat-6': '🎾',   // Tennis
  'cat-7': '💪'    // CrossFit
};

const CategoriesSection = () => {
  const categories = getAllCategories();
  const [activeCategory, setActiveCategory] = useState<string>('cat-1');
  const [preloadedImages, setPreloadedImages] = useState<Record<string, Athlete[]>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Limit to 3 athletes per category for display
  const featuredAthletes = preloadedImages[activeCategory] || [];

  // Preload images for all categories
  useEffect(() => {
    const preloadAllCategoryImages = async () => {
      setIsLoading(true);
      const preloadedData: Record<string, Athlete[]> = {};
      
      // Load data for all categories
      for (const category of categories) {
        const athletes = getAthletesByCategory(category.id, 3);
        preloadedData[category.id] = athletes;
        
        // Preload images
        athletes.forEach(athlete => {
          const imgElement = new globalThis.Image();
          imgElement.src = athlete.image;
        });
      }
      
      setPreloadedImages(preloadedData);
      setIsLoading(false);
    };
    
    preloadAllCategoryImages();
  }, [categories]);

  return (
    <section className="py-32 bg-[#050609] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-fixed opacity-[0.03]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-4 py-1.5 border border-white/5 rounded-full bg-white/[0.02] backdrop-blur-sm">
            <span className="text-[10px] font-extralight tracking-[0.25em] text-white/60 uppercase">
              Elite Athletes
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1] letter-spacing-[-0.02em]">
            <span className="relative inline-block">
              Choose Your
              <span className="absolute -bottom-1 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
            </span>{" "}
            <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
              Discipline
            </span>
          </h2>
        </div>

        {/* Ultra-minimal Category Selection */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {categories.map((category: Category, index: number) => (
            <div 
              key={index}
              onClick={() => setActiveCategory(category.id)}
              className={`
                relative px-4 py-4 cursor-pointer transition-all duration-500 ease-in-out group
                ${activeCategory === category.id 
                  ? 'opacity-100 scale-110' 
                  : 'opacity-60 hover:opacity-80'
                }
              `}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className={`
                  text-4xl mb-2 transform transition-all duration-500 relative
                  ${activeCategory === category.id ? 'scale-110' : 'scale-100'}
                `}>
                  <div className="absolute inset-0 blur-sm bg-white/5 rounded-full transform scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <span className="relative">{categoryEmojis[category.id] || '🏆'}</span>
                </div>
                
                <h3 className={`
                  text-sm font-light tracking-wide text-center transition-colors duration-500
                  ${activeCategory === category.id ? 'text-white' : 'text-gray-500'}
                `}>
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Athletes Grid with premium glow effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 min-h-[600px]">
          {isLoading ? (
            // Enhanced skeleton loaders
            [...Array(3)].map((_, index) => (
              <div key={index} className="relative">
                {/* Premium glow effect */}
                <div className="absolute -inset-4 bg-white/[0.02] rounded-xl blur-2xl transform transition-all duration-500"></div>
                
                <div className="relative h-full bg-[#080b12]/70 rounded-xl overflow-hidden animate-pulse backdrop-blur-sm border border-white/5">
                  <div className="h-72 bg-white/5"></div>
                  <div className="p-6">
                    <div className="h-4 bg-white/5 rounded w-3/4 mb-4"></div>
                    <div className="h-24 bg-white/5 rounded mb-6"></div>
                    <div className="flex gap-2 mb-7">
                      <div className="h-8 bg-white/5 rounded w-20"></div>
                      <div className="h-8 bg-white/5 rounded w-20"></div>
                    </div>
                    <div className="h-10 bg-white/5 rounded"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            featuredAthletes.map((athlete: Athlete, index: number) => (
              <div key={index} className="relative group">
                {/* Premium white blur glow effect */}
                <div className="absolute -inset-4 bg-white/[0.03] rounded-xl blur-[100px] transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700"></div>
                
                {/* Card wrapper */}
                <div className="relative">
                  <AthleteCard 
                    athlete={athlete}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;