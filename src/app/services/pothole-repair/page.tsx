"use client";
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '../../../components/ui/Button';
import SetsUpAparts from '@/components/services/crackRepair/SetsUsAparts';
import ServiceProjects from '@/components/services/ServiceProjects';
import ServiceStandish from '@/components/services/crackRepair/ServiceStandinsh';
import ServiceFaq from '@/components/services/ServiceFaq';
import SurfaceRecovery from '@/components/services/potholeRepair/SurfaceRecovery';
import PcrServices from '@/components/services/potholeRepair/PcrServices';
import ContactModal from '@/components/ContactModal';
import Testimonials from '@/components/sections/Testimonials';

export default function CrackRepair() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    <main className="overflow-x-hidden w-full">
      <Header />
      <div className="bg-[#FAFAFA]">
      <div className="container mx-auto px-4 py-5">
        <header className="pb-0 pt-5 md:pt-5 md:py-5">
          <div className="flex flex-col align-middle justify-center mb-0 md:mb-8 pt-5 pb-[32px] md:py-5 mt-5 md:mt-10">
            <div className="mb-[20px] md:mb-0 hero-txt text-center">
              <div className="flex items-center gap-2 mb-[24px] md:mb-4 justify-center">
                <div className="h-2 w-2 rounded-full bg-[#FFEB38] flex-shrink-0"></div>
                <span className="text-sm font-inter text-black font-normal">
                  Pothole Repair 
                </span>
              </div>
              <h1 className="px-[7%] md:px-0 font-comfortaa text-[16px] md:text-inherit font-normal md:font-[600] leading-tight text-black text-center">
                Fast, Lasting Pothole Repair
              </h1>
            </div>

            <div className="md:w-[66.5%] self-center hero-btn text-center">
              <p className="text-[rgba(0,0,0,0.8)] mb-6 leading-relaxed font-inter text-center">
                Potholes are more than an eyesore - they’re a safety hazard and
                a costly liability. We deliver durable repairs using hot
                asphalt, built to survive harsh Michigan weather.{' '}
              </p>

              <div className="flex flex-col md:flex-row md:flex-wrap justify-center w-full text-center gap-2">
                <Button
                onClick={openModal}
                  scrollTo="contact"
                  variant="primary"
                  className="w-full md:w-auto bg-[#FFEB38] text-black rounded-full py-[14px] font-medium hover:bg-yellow-300 text-center  md:my-0"
                >
                  Get a Quote
                </Button>
                {/* <Button
                  scrollTo="services"
                  variant="outline"
                  className="w-full md:w-auto bg-transparent text-black rounded-full py-[14px] font-medium border border-black text-center my-[14px] md:my-0 hover:bg-[#ffeb38] serivece_btn"
                >
                  Our Projects
                </Button> */}
              </div>
            </div>
          </div>
        </header>
      </div>
      </div>
      
      <div className="bg-[#F5F5F5]">
        <SurfaceRecovery />
      </div>

      <div className="mb-14">
        <SetsUpAparts />
      </div>

      <PcrServices openModal={openModal}/>

      <div>
        <ServiceProjects />
      </div>

      <Testimonials />

      <div className="mt-0 pt-0">
        <ServiceStandish openModal={openModal}/>
      </div>

      <ServiceFaq />

      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
