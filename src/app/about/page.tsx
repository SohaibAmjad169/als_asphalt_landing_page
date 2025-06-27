"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/app/about/servingevery';
import OurStory from '@/app/about/ourstory';
import Button from '@/components/ui/Button';
import MapWork from '@/app/about/mapwork';
import Lettalk from '@/app/about/lettalk';
import AboutFaq from '@/app/about/aboutfaq';
import ContactModal from '@/components/ContactModal';

export default function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const router = useRouter();

    const handleServicesClick = () => {
        localStorage.setItem('scrollTo', 'services'); 
        router.push('/');
    };
    return (
        <main className='overflow-x-hidden w-full ' style={{ WebkitTextStroke: '0.22px' }}>
            <Header />
            <div className='bg-[#FAFAFA]'>
                <div className="container mx-auto px-4 py-5 black-color">
                    <header className="pb-0 pt-5 md:pt-5 md:py-5">
                        <div className="flex flex-col align-middle justify-center mb-0 md:mb-8 pt-5 pb-[32px] md:py-5 mt-5 md:mt-10">
                            <div className="mb-[20px] md:mb-0 hero-txt text-center">
                                <div className="flex items-center gap-2 mb-[24px] md:mb-4 justify-center">
                                    <div className="h-2 w-2 rounded-full bg-[#FFEB38] flex-shrink-0"></div>
                                    <span className="text-sm font-inter text-[#000] font-normal">Quality & Reliable</span>
                                </div>
                                <h1 className="px-[7%] md:px-0 font-comfortaa text-[16px] md:text-inherit font-normal md:font-[600] leading-tight text-black text-center hidden md:block">
                                    Proudly Based in Standish,<br /> Built on Hard Work
                                </h1>
                                <h1 className="px-[7%] md:px-0 font-comfortaa text-[16px] md:text-inherit font-normal md:font-[600] leading-tight text-black text-center block md:hidden">
                                    Proudly Based in <br /> Standish, Built on Hard Work
                                </h1>
                            </div>

                            <div className="md:w-[67.5%] self-center hero-btn about-txt text-center pt-0 md:pt-2">
                                <p className="text-[rgba(0,0,0,0.8)] mb-6 leading-relaxed font-inter text-center text-[17px]">
                                    At Al’s Asphalt, we believe that good work speaks for itself. We’re a local, owner-operated
                                    business based in Standish, Michigan - serving our neighbors in Arenac, Bay, and surrounding counties with honest, high-quality asphalt maintenance services.
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
                                    <Button
                                        onClick={handleServicesClick}
                                        variant="outline"
                                        className="w-full md:w-auto bg-transparent text-black rounded-full py-[14px] font-medium border border-black text-center my-[14px] md:my-0 hover:bg-[#ffeb38] serivece_btn"
                                    >
                                        Our Services
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </header>
                </div>
            </div>


            <OurStory />
            <ServiceCard />
            <MapWork />
            <Lettalk openModal={openModal} />
            <AboutFaq />
            <Footer />
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </main>
    );
}