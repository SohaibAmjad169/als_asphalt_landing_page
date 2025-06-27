/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactModal from './ContactModal';
import { usePathname } from "next/navigation";
 

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const bgClass = pathname === '/' ? 'bg-[#F5F5F5]' : 'bg-[#FAFAFA]';
  // const router = useRouter();

  return (
    <header className={`py-5 w-full header-sec ${bgClass}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Left section with logo */}
          <div className="">
            {/* onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} */}
            <a href="/">
              <Image
                src="/images/logo.svg"
                alt="Al's Asphalt"
                width={125}
                height={42}
                className="h-auto w-[120px] "
              />
            </a>
          </div>

          {/* Center section with navigation */}
          <nav className="hidden md:flex items-center justify-center">
            <div className="flex space-x-6">
              <Link
                href="/"
                // className="text-[17px] tracking-tight text-black font-inter relative group flex items-center"
                className={`text-[17px] tracking-tight text-black font-inter relative group flex items-center ${pathname === '/' ? 'text-black font-bold' : 'text-black'}`}
 
                onClick={() => {
                  setMobileMenuOpen(false);
                }}               
              >
                Home
              </Link>
              <Link
                href="/about"
                // className="text-[17px] tracking-tight text-black font-inter relative group flex items-center"
                className={`text-[17px] tracking-tight text-black font-inter relative group flex items-center ${pathname === '/about' ? 'text-black font-bold' : 'text-black'}`}
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
              >
                About
              </Link>
              <div className="relative group">
                <button
                  // className="text-[17px] tracking-tight text-black font-inter relative group flex items-center"
                  className={`text-[17px] tracking-tight text-black font-inter relative group flex items-center ${pathname === '/services' ? 'text-black font-bold' : 'text-black'}`}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={false}
                >
                  Services
                  <svg
                    className="w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ WebkitTextStroke: '0.22px black' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px] z-10 top_menu opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all">
                  <Link
                    href="/services/crack-repair"
                    // className="w-full text-left px-4 py-2 hover:bg-gray-50 text-[15px] block"
                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 text-[15px] block ${pathname === '/services/crack-repair' ? 'text-black font-bold' : 'text-black'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Crack Repair
                  </Link>
                  <Link
                    href="/services/pothole-repair"
                    // className="w-full text-left px-4 py-2 hover:bg-gray-50 text-[15px] block"
                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 text-[15px] block ${pathname === '/services/pothole-repair' ? 'text-black font-bold' : 'text-black'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pothole Repair
                  </Link>
                  <Link
                    href="/services/line-striping"
                    // className="w-full text-left px-4 py-2 hover:bg-gray-50 text-[15px] block"
                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 text-[15px] block ${pathname === '/services/line-striping' ? 'text-black font-bold' : 'text-black'}`}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ WebkitTextStroke: '0.22 black' }}
                  >
                    Line Striping
                  </Link>
                  <Link
                    href="/services/seal-coating"
                    // className="w-full text-left px-4 py-2 hover:bg-gray-50 text-[15px] block"
                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 text-[15px] block ${pathname === '/services/seal-coating' ? 'text-black font-bold' : 'text-black'}`}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ WebkitTextStroke: '0.22 black' }}
                  >
                    Seal Coating
                  </Link>
                </div>
              </div>
              {/* <Link
                href="/gallery"
                // className="text-[17px] tracking-tight text-black font-inter relative group flex items-cente"
                className={`text-[17px] tracking-tight font-inter ${pathname === '/gallery' ? 'text-black font-bold' : 'text-black'}`}
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
              >
                Gallery
              </Link> */}
            </div>
          </nav>

          {/* Right section with contact button */}
          <button
            onClick={openModal}
            className="hidden md:flex items-center bg-black/5 rounded-full px-[20px] py-[17px] text-base tracking-tight text-black hover:bg-[#FFEB38] w-[162px] get-tocuh"
          >
            Get in touch
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2.5 text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none" className="ml-2.5 text-black">
            <path d="M1.39844 6.46396C0.905531 6.46396 0.50595 6.86354 0.50595 7.35645C0.50595 7.84935 0.905531 8.24893 1.39844 8.24893V6.46396ZM16.6068 7.98753C16.9553 7.63899 16.9553 7.0739 16.6068 6.72536L10.9271 1.04561C10.5785 0.697071 10.0134 0.697071 9.66489 1.04561C9.31635 1.39415 9.31635 1.95924 9.66489 2.30778L14.7136 7.35645L9.66489 12.4051C9.31635 12.7537 9.31635 13.3187 9.66489 13.6673C10.0134 14.0158 10.5785 14.0158 10.9271 13.6673L16.6068 7.98753ZM1.39844 7.35645V8.24893H15.9757V7.35645V6.46396H1.39844V7.35645Z" fill="black"/>
            </svg>
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="33" height="26" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2.79166H31" stroke="black" strokeWidth="4" strokeLinecap="round" />
              <path d="M2 23.7917H31" stroke="black" strokeWidth="4" strokeLinecap="round" />
              <path d="M2 13.7917H31" stroke="black" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 pt-5 pt-sm-24 px-4 mobile-menu">
          <div className="container m-0">
            <div className='flex justify-between items-center'>
              <div>
                <a href="/">
                  <Image
                    src="/images/logo.svg"
                    alt="Al's Asphalt"
                    width={120}
                    height={40}
                    className="h-auto w-[120px]"
                  />
                </a>
              </div>
              <div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.39844 23.2978L24.9045 2.79166" stroke="black" strokeWidth="4" strokeLinecap="round" />
                    <path d="M4.24609 2.79166L24.7522 23.2978" stroke="black" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>


            <nav className="flex flex-col min-h-[80vh] space-y-8 pt-20">
              <Link
                href="/"
                className={`text-dark text-xl font-medium text-left text-[18px] text-uppercase mobile-btn ${pathname === '/' ? 'text-black font-bold' : 'text-black'}`}
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
              >
                Home
              </Link>
              <Link 
                href="/about"
                className={`text-dark text-xl font-medium text-left text-[18px] text-uppercase mobile-btn ${pathname === '/about' ? 'text-black font-bold' : 'text-black'}`}
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
              >
                About
              </Link>
              <div className="flex flex-col space-y-3 sub-menu relative group">
                <button
                  className={`text-dark text-xl font-medium text-left flex items-center justify-between text-[18px] text-uppercase mobile-btn ${pathname === '/services' ? 'text-black font-bold' : 'text-black'}`}
                  onClick={() => setServicesOpen(!servicesOpen)}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  Services
                  {/* <svg
                    className={`w-5 h-5 transform transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none" className={`w-5 h-5 transform transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>
                    <path d="M7.495 9.32845C7.56083 9.32886 7.62609 9.31541 7.68703 9.28887C7.74798 9.26234 7.80341 9.22324 7.85015 9.17383L14.3529 2.24239C14.3995 2.19268 14.4365 2.13366 14.4618 2.06871C14.487 2.00375 14.5 1.93413 14.5 1.86383C14.5 1.79352 14.487 1.72391 14.4618 1.65895C14.4365 1.594 14.3995 1.53498 14.3529 1.48527C14.3063 1.43555 14.2509 1.39612 14.1899 1.36921C14.129 1.34231 14.0637 1.32846 13.9977 1.32846C13.9318 1.32846 13.8665 1.34231 13.8055 1.36921C13.7446 1.39612 13.6892 1.43555 13.6426 1.48527L7.495 8.04347L1.35741 1.49593C1.26322 1.39553 1.13546 1.33912 1.00226 1.33912C0.869051 1.33912 0.7413 1.39553 0.647108 1.49593C0.552916 1.59633 0.5 1.7325 0.5 1.87449C0.5 2.01648 0.552916 2.15266 0.647108 2.25306L7.14985 9.18449C7.24336 9.27781 7.3669 9.32934 7.495 9.32845Z" fill="black" stroke="black" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="flex flex-col space-y-3 bg-white shshadow-lg unded-lg py-2 z-10 ">
                    <Link
                      href="/services/crack-repair"
                      className={`text-dark text-lg font-medium text-left text-[16px] w-full py-2 hover:bg-gray-50 ${pathname === '/services/crack-repair' ? 'text-black font-bold' : 'text-black'}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Crack Repair
                    </Link>
                    <Link
                      href="/services/pothole-repair"
                      className={`text-dark text-lg font-medium text-left text-[16px] w-full py-2 hover:bg-gray-50 ${pathname === '/services/pothole-repair' ? 'text-black font-bold' : 'text-black'}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Pothole Repair
                    </Link>
                    <Link
                      href="/services/line-striping"
                      className={`text-dark text-lg font-medium text-left text-[16px] w-full py-2 hover:bg-gray-50 ${pathname === '/services/line-striping' ? 'text-black font-bold' : 'text-black'}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Line Striping
                    </Link>
                    <Link
                      href="/services/seal-coating"
                      className={`text-dark text-lg font-medium text-left text-[16px] w-ful py-2 hover:bg-gray-50 ${pathname === '/services/seal-coating' ? 'text-black font-bold' : 'text-black'}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Seal Coating
                    </Link>
                  </div>
                )}
              </div>
              {/* <Link
                className={`text-dark text-xl font-medium text-left text-[18px] text-uppercase mobile-btn ${pathname === '/gallery' ? 'text-black font-bold' : 'text-black'}`}
                href="/gallery"
                >
                Gallery
              </Link> */}
              <button
                onClick={openModal}
                className="flex items-center bg-[#FFEB38] rounded-full px-4 py-4 text-[16px] tracking-tight text-black justify-center font-medium"
              >
                Get in touch
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2.5 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none" className="h-5 w-5 ml-2.5 text-black">
                  <path d="M1.76953 6.39914C1.27662 6.39914 0.877044 6.79872 0.877044 7.29163C0.877044 7.78453 1.27662 8.18411 1.76953 8.18411V6.39914ZM16.9779 7.92271C17.3264 7.57417 17.3264 7.00908 16.9779 6.66054L11.2981 0.98079C10.9496 0.632252 10.3845 0.632252 10.036 0.98079C9.68744 1.32933 9.68744 1.89442 10.036 2.24296L15.0847 7.29163L10.036 12.3403C9.68744 12.6888 9.68744 13.2539 10.036 13.6025C10.3845 13.951 10.9496 13.951 11.2981 13.6025L16.9779 7.92271ZM1.76953 7.29163V8.18411H16.3468V7.29163V6.39914H1.76953V7.29163Z" fill="black" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      )}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

export default Header; 