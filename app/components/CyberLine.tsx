'use client';

const CyberLine = () => {
  return (
    <div className="relative h-px w-full my-4 overflow-hidden">
      {/* Base layer */}
      <div className="absolute inset-0 bg-white/5"></div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[1px]"></div>
      
      {/* Animated highlight */}
      <div className="absolute h-full w-1/3 animate-[cyberpulse_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

      {/* Flicker effect with dots */}
      <div className="absolute top-0 left-1/4 h-full w-px bg-white/20"></div>
      <div className="absolute top-0 left-1/2 h-full w-px bg-white/20"></div>
      <div className="absolute top-0 left-3/4 h-full w-px bg-white/20"></div>
    </div>
  );
};

export default CyberLine; 