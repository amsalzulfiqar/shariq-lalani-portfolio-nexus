
import React, { useLayoutEffect } from 'react';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesOverview from '@/components/services/ServicesOverview';
import ServicesList from '@/components/services/ServicesList';
import FeaturedWork from '@/components/FeaturedWork';
import Testimonials from '@/components/Testimonials';
import ServicesContact from '@/components/services/ServicesContact';

const ServicesPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ServicesHero />
      
      <div className="pt-0">
        <ServicesOverview />
        <ServicesList />
        <FeaturedWork />
        <Testimonials />
        <ServicesContact />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
