'use client';

const CoachRegistrationSection = () => {
  return (
    <section className="py-20 bg-[#050609] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Become an <span className="text-[#6c63ff]">AI-Powered</span> Coach
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Scale your influence with our AI platform and reach thousands of clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 premium-card p-8 border border-white/5">
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-medium mb-6 text-[#0bccee]">The Elite Advantage</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#6c63ff] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-200 text-sm">Scale your training to thousands with AI precision</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#6c63ff] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-200 text-sm">Access our elite network of gym warriors</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#6c63ff] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-200 text-sm">Earn recurring revenue with our platform</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#6c63ff] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-200 text-sm">Leverage our performance analytics</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start space-y-6">
              <h3 className="text-xl font-medium text-[#0bccee]">Join the Top Coaches</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Applications are limited. Submit yours today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <button className="border border-[#0bccee]/30 hover:border-[#0bccee] text-white font-medium py-3 px-6 rounded-md transition-colors flex-1 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
                  </svg>
                  Apply Now
                </button>
                <button className="border border-[#0bccee]/30 hover:border-[#0bccee] text-white font-medium py-3 px-6 rounded-md transition-colors flex-1 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Book Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachRegistrationSection;