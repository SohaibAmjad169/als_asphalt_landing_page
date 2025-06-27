"use client";
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import GallerySection from './gallerysection';
import ContactModal from '@/components/ContactModal';


export default function Gallery() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <main className='overflow-x-hidden w-full' style={{ WebkitTextStroke: '0.12px' }}>
            <Header />
            <div className='bg-[#FAFAFA]'>
            <div className="container mx-auto px-4 py-5 black-color">
                    <header className="pb-0 pt-5 md:pt-5 md:py-5">
                        <div className="flex flex-col align-middle justify-center mb-0 md:mb-8 pt-5 pb-[32px] md:py-5 mt-5 md:mt-10">
                            <div className="mb-[20px] md:mb-0 hero-txt text-center">
                                <div className="flex items-center gap-2 mb-[24px] md:mb-4 justify-center">
                                    <div className="h-2 w-2 rounded-full bg-[#FFEB38] flex-shrink-0"></div>
                                    <span className="text-sm font-inter text-[#000] font-normal">See Our Work in Action</span>
                                </div>
                                <h1 className="px-[7%] md:px-0 font-comfortaa text-[16px] md:text-inherit font-normal md:font-[600] leading-tight text-black text-center">
                                Our Projects Gallery
                                </h1>
                            </div>

                            <div className="md:w-[67.5%] self-center hero-btn about-txt text-center pt-0 md:pt-2">
                                <p className="text-[rgba(0,0,0,0.8)] mb-6 leading-relaxed font-inter text-center text-[17px]">
                                From cracked driveways to freshly striped lots, our team delivers clean, lasting results you can count on. Explore our past projects and see why businesses and homeowners trust Al’s Asphalt.
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
                                </div>

                            </div>
                        </div>
                    </header>
                </div>
            </div>
            <GallerySection />
            <Footer />
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </main>
    )
}