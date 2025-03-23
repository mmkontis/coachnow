import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CategoriesSection from './components/CategoriesSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import CTASection from './components/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0e17] text-white">
      {/* Hero Section */}
      <HeroSection />


      {/* Categories Section */}
      <CategoriesSection />


      {/* Features Section */}
      <FeaturesSection />


      {/* Testimonials */}
      <TestimonialsSection />


      {/* Pricing Section */}
      <PricingSection />


      {/* CTA Section */}
      <CTASection />


      {/* Footer */}
      <Footer />
    </div>
  );
}

