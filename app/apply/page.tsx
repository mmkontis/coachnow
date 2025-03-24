'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

const ApplyPage = () => {
  return (
    <main className="min-h-screen bg-[#050609]">
      <Header />
      
      {/* Info Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 border border-white/5 rounded-full bg-white/[0.02] backdrop-blur-sm">
              <span className="text-[10px] font-light tracking-[0.25em] text-white/60 uppercase">
                Join Our Elite Team
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1] letter-spacing-[-0.02em]">
              Become an AI-Powered Coach
            </h1>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              Transform your coaching expertise with cutting-edge AI technology. Help athletes reach their full potential with personalized, data-driven training programs.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ 
            position: 'relative', 
            height: '80dvh', 
            overflow: 'auto', 
            backgroundColor: '#000000',
            maxWidth: '1200px',
            margin: '0 auto',
            marginTop: '2rem',
            paddingTop: '1rem'
          }}>
            <iframe 
              src="https://app.formbricks.com/s/cm8mvf3q50002i803b9gh860c?embed=true" 
              frameBorder="0" 
              style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', border: 0 }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ApplyPage; 