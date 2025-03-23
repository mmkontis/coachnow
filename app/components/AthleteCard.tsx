'use client';

import Image from "next/image";
import { useState } from 'react';

interface Athlete {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  image: string;
  description: string;
  stats: Array<{label: string, value: string}>;
  followers: number;
  programs: string[];
  socialLinks: {
    instagram: string;
    youtube: string;
  };
  aiScore: number;
  achievements?: string[];
}

interface AthleteCardProps {
  athlete: Athlete;
}

const AthleteCard = ({ athlete }: AthleteCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group relative">
        {/* Premium card background with subtle animation */}
        <div className="absolute inset-0 bg-[#030306] rounded-sm overflow-hidden transition-all duration-700 group-hover:bg-[#050609]">
          {/* Animated gradient background */}
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[gradient_15s_ease_infinite]"></div>
          
          {/* Subtle border */}
          <div className="absolute inset-0 rounded-sm border border-white/[0.05] transition-all duration-700 group-hover:border-white/[0.08]"></div>
        </div>

        {/* Content container */}
        <div className="relative">
          {/* Image section with enhanced overlay */}
          <div className="relative h-[500px] overflow-hidden rounded-sm">
            <Image
              src={athlete.image}
              alt={athlete.name}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030306] via-[#030306]/50 to-transparent opacity-90"></div>
            
            {/* AI Score Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <div className="px-3 py-1.5 bg-white/[0.03] backdrop-blur-sm border border-white/[0.05] rounded-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extralight tracking-[0.2em] text-white/70 uppercase">AI Score</span>
                  <span className="text-xs font-light text-white/90">{athlete.aiScore}%</span>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="absolute top-4 left-4 flex gap-2">
              {athlete.socialLinks.instagram && (
                <a 
                  href={athlete.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center bg-white/[0.03] backdrop-blur-sm border border-white/[0.05] rounded-sm hover:bg-white/[0.08] transition-all duration-300"
                >
                  <span className="text-[10px] font-extralight text-white/70">IG</span>
                </a>
              )}
              {athlete.socialLinks.youtube && (
                <a 
                  href={athlete.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center bg-white/[0.03] backdrop-blur-sm border border-white/[0.05] rounded-sm hover:bg-white/[0.08] transition-all duration-300"
                >
                  <span className="text-[10px] font-extralight text-white/70">YT</span>
                </a>
              )}
            </div>
            
            {/* Name, categories, and programs overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 space-y-6">
              <div className="space-y-3">
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-white/[0.03] backdrop-blur-sm rounded-sm text-[10px] font-extralight tracking-[0.2em] text-white/70 uppercase">
                    {athlete.category}
                  </span>
                  <span className="px-2 py-1 bg-white/[0.03] backdrop-blur-sm rounded-sm text-[10px] font-extralight tracking-[0.2em] text-white/70 uppercase">
                    {athlete.categoryId}
                  </span>
                </div>
                <h3 className="text-2xl font-light text-white tracking-wide">{athlete.name}</h3>
              </div>

              {/* Programs Preview */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-extralight tracking-[0.2em] text-white/50 uppercase">Available Programs</h4>
                <div className="flex flex-wrap gap-2">
                  {athlete.programs.map((program, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-white/[0.03] backdrop-blur-sm border border-white/[0.05] rounded-sm text-[10px] font-extralight tracking-[0.1em] text-white/70"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action button */}
              <div className="relative z-20">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full relative group/btn overflow-hidden mt-4"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] via-white/[0.1] to-white/[0.05] opacity-0 group-hover/btn:opacity-100 blur-sm transition-all duration-500"></div>
                  <div className="relative flex items-center justify-between px-6 py-3.5 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-sm group-hover/btn:border-white/20 transition-all duration-500">
                    <span className="relative z-10 text-xs font-extralight tracking-[0.2em] text-white uppercase group-hover/btn:text-white/90 transition-colors duration-500">Choose Coach</span>
                    <div className="relative z-10 flex items-center gap-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-500">
                      <span className="text-[10px] font-extralight tracking-[0.2em] text-white/70">AI Score</span>
                      <span className="text-xs font-light text-white/90">{athlete.aiScore}%</span>
                    </div>
                    {/* Background effects */}
                    <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover/btn:opacity-100 transition-all duration-500"></div>
                    <div className="absolute -inset-[0.5px] bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover/btn:opacity-100 blur-[2px] transition-all duration-500"></div>
                    {/* Border effects */}
                    <div className="absolute top-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500"></div>
                    <div className="absolute top-0 left-0 w-[0.5px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent transform scale-y-0 group-hover/btn:scale-y-100 transition-transform duration-500"></div>
                    <div className="absolute top-0 right-0 w-[0.5px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent transform scale-y-0 group-hover/btn:scale-y-100 transition-transform duration-500"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Premium hover effects */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
          <div className="absolute top-0 left-0 w-[40%] h-px bg-gradient-to-r from-white/20 to-transparent"></div>
          <div className="absolute top-0 left-0 w-px h-[40%] bg-gradient-to-b from-white/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-[40%] h-px bg-gradient-to-l from-white/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-px h-[40%] bg-gradient-to-b from-white/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-[40%] h-px bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-[40%] h-px bg-gradient-to-l from-white/10 to-transparent"></div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#030306]/90 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(false);
            }}
          ></div>
          
          {/* Modal content */}
          <div className="relative bg-[#030306] border border-white/10 rounded-sm p-8 max-w-lg w-full mx-4 space-y-6" onClick={(e) => e.stopPropagation()}>
            {/* Coach info */}
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20 rounded-sm overflow-hidden">
                <Image
                  src={athlete.image}
                  alt={athlete.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-light text-white">{athlete.name}</h3>
                <p className="text-white/50 text-sm font-extralight">{athlete.category}</p>
              </div>
            </div>

            {/* Contact options */}
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center justify-center p-4 bg-white/[0.02] border border-white/10 rounded-sm hover:bg-white/[0.05] transition-all duration-300 group">
                <span className="text-[10px] font-extralight tracking-[0.2em] text-white/50 uppercase mb-2">Instagram</span>
                <span className="text-sm font-light text-white group-hover:text-white/90">DM Coach</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-white/[0.02] border border-white/10 rounded-sm hover:bg-white/[0.05] transition-all duration-300 group">
                <span className="text-[10px] font-extralight tracking-[0.2em] text-white/50 uppercase mb-2">Video</span>
                <span className="text-sm font-light text-white group-hover:text-white/90">Schedule Call</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-white/[0.02] border border-white/10 rounded-sm hover:bg-white/[0.05] transition-all duration-300 group">
                <span className="text-[10px] font-extralight tracking-[0.2em] text-white/50 uppercase mb-2">Message</span>
                <span className="text-sm font-light text-white group-hover:text-white/90">Chat Now</span>
              </button>
            </div>

            {/* Close button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/[0.02] border border-white/10 rounded-sm hover:bg-white/[0.05] transition-all duration-300"
            >
              <span className="text-white/70">×</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AthleteCard; 