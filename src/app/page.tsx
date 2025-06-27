"use client";
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import Cta from '@/components/sections/Cta';
// import SocialProof from '@/components/sections/SocialProof';
import ContactModal from '@/components/ContactModal';
import { usePathname } from 'next/navigation';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  useEffect(() => {
    if (localStorage.getItem('scrollTo') === 'services') {
      localStorage.removeItem('scrollTo'); 
      setTimeout(() => {
        const element = document.getElementById('services');
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname]);

  return (
    <main className="overflow-x-hidden w-full" style={{ WebkitTextStroke: '0.12px' }}>
      <Header/>

      {/* Hero Section */}
      <Hero openModal={openModal}/>

      {/* Social Proof Section */}
      {/* <SocialProof /> */}

      {/* Services Section */}
      <section id="services">
        <Services openModal={openModal}/>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action Section */}
      <Cta openModal={openModal}/>

      {/* FAQ Section */}
      <Faq />

      {/* Footer */}
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
