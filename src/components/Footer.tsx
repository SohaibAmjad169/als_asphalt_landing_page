"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";
import ContactModal from './ContactModal';

// FooterSection component that can be reused across the site
const Footer = () => {
  // State for dropdowns
  const [open, setOpen] = useState({
    quick: false,
    services: false,
    connect: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggle = (key: 'quick' | 'services' | 'connect') =>
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <footer className="w-full bg-[rgba(5, 5, 5, 0.02)] flex flex-col items-center px-[10px] lg:px-[30px] py-[30px] md:py-[50px] footer-sec">
      {/* Top dashed line */}
      <div className="relative w-[99%] h-[3px] mb-5">
        <Image
          src="/images/footer_line_top.png"
          alt="Footer line middle"
          fill
          className="object-cover"
        />
      </div>


      {/* Main footer content */}
      <div className="block overflow-hidden md:flex w-[100%] relative">
        <div className="oval_secs"></div>
        {/* Left Panel */}
        <div className="rounded-2xl bg-black w-[100%] md:w-[40%] fot_logo_sec">
          <div className="foot_logo_sec px-0 pt-15 py-6 md:py-15 md:p-10 xl:p-20">
            {/* <div className="inset-0 relative">
              <Image 
                src="/images/footer_background_left.png" 
                alt="Footer background" 
                fill
                className="object-cover"
                priority
              />
            </div> */}

            {/* Logo and description */}
            <div className="flex flex-col gap-4 px-10 md:px-0">
              <div className="w-[130px] md:w-[184.34px] h-[auto] md:h-[71px]">
                <Image
                  src="/images/als_asphalt_footer_logo.png"
                  alt="Al's Asphalt"
                  width={184}
                  height={71}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="opacity-70 text-[#F9F9FA] text-base font-inter font-normal leading-[27.2px] w-[100%] xl:w-[340px]">
                  Feel free to reach out with any questions you might have!
                </p>
              </div>
            </div>

            {/* Get Quote section */}
            <div className="pb-4 md:pb-0 pt-10 px-10 md:px-0 md:pt-20 foot_quote_sec">
              <h3 className="text-white text-2xl font-comfortaa font-bold leading-9 mb-4">
                Get a free quote
              </h3>
              <Link
                onClick={openModal}
                className="inline-flex px-[32px] py-[14px] md:px-8 md:py-3 bg-[#FFEB38] rounded-[40px] justify-center items-center transition-colors duration-20 hover:bg-white w-[100%] md:w-[auto]" href={''}              >
                <span className="text-black text-lg font-inter font-medium leading-[30.6px]">
                  Get Quote
                </span>
              </Link>
            </div>
            <div className="py-[15px] px-[20px] w-[100%] block md:hidden white-line">
              <div className="w-[100%] p-[10px]"></div>
            </div>
          </div>
          <div className="block md:flex block md:hidden px-10 md:px-0 footer_menu_sec">
            {/* Quick Links */}
            <div className="flex flex-col gap-0 md:gap-5 w-[50%] md:w-[22%] xl:w-[33%] pb-[24px] md:pb-0">
              <div
                className="flex flex-col gap-2 cursor-pointer md:cursor-default"
                onClick={() => toggle("quick")}
              >
                <h4 className="text-white font-comfortaa font-bold text-lg leading-[28.8px] flex items-center justify-between">
                  Quick Links
                  <span className="md:hidden ml-2">
                    {open.quick ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                        <path d="M1 9.24414L8.53516 1.70898L16.0703 9.24414" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                        <path d="M1 1.75586L8.53516 9.29102L16.0703 1.75586" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                </h4>
                {/* <div className="w-[100px] lg:w-[150px] xl:w-[184px] h-px bg-white opacity-20"></div> */}
              </div>
              <div
                className={`pt-3 flex flex-col gap-4 footer_right_col_links transition-all duration-20 overflow-hidden ${open.quick ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
                  }`}
              >
                <Link href="/" className="w-[184px] text-white opacity-70 font-inter text-base leading-[27.2px] hover:opacity-100 hover:underline decoration-white">Home Page</Link>
                <Link href="/about" className="w-[184px] text-white opacity-70 font-inter text-base leading-[27.2px] hover:opacity-100 hover:underline decoration-white">About Us</Link>
                <Link href="/faqs" className="w-[184px] text-white opacity-70 font-inter text-base leading-[27.2px] hover:opacity-100 hover:underline decoration-white">FAQs</Link>
                {/* <Link href="/gallery" className="w-[184px] text-white opacity-70 font-inter text-base leading-[27.2px] hover:opacity-100 hover:underline decoration-white">Gallery</Link> */}
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-0 md:gap-5 w-[50%] md:w-[22%] xl:w-[33%] pb-[24px] md:pb-0">
              <div
                className="flex flex-col gap-2 cursor-pointer md:cursor-default"
                onClick={() => toggle("services")}
              >
                <h4 className="text-white font-comfortaa font-bold text-lg leading-[28.8px] flex items-center justify-between">
                  Services
                  <span className="md:hidden ml-2">
                    {open.services ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                        <path d="M1 9.24414L8.53516 1.70898L16.0703 9.24414" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                        <path d="M1 1.75586L8.53516 9.29102L16.0703 1.75586" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                </h4>
                {/* <div className="w-[100px] lg:w-[150px] xl:w-[184px] h-px bg-white opacity-20"></div> */}
              </div>
              <div
                className={`pt-3 flex flex-col gap-4 opacity-70 footer_right_col_links transition-all duration-20 overflow-hidden ${open.services ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
                  }`}
              >
                <Link href="/services/crack-repair" className="w-[184px] text-white font-inter text-base leading-[27.2px] hover:opacity-100 hover:underline decoration-white">Crack Repair</Link>
                <Link href="/services/pothole-repair" className="w-[184px] text-white font-inter text-base leading-[27.2px] hover:opacity-100 hover:underline decoration-white">Pothole Repair</Link>
                <Link href="/services/line-striping" className="w-[184px] text-white font-inter text-base leading-[27.2px] hover:opacity-100 hover:underline decoration-white">Line Striping</Link>
                <Link href="/services/seal-coating" className="w-[184px] text-white font-inter text-base leading-[27.2px] hover:opacity-100 hover:underline decoration-white">Seal Coating</Link>
                <span className="text-white font-inter text-base leading-[27.2px]">Infrared Repair (soon)</span>
              </div>
            </div>

            {/* Connect */}
            {/* <div className="flex flex-col gap-0 md:gap-5 w-[40%] md:w-[22%] xl:w-[33%] pb-[24px] md:pb-0">
              <div
                className="flex flex-col gap-2 cursor-pointer md:cursor-default"
                onClick={() => toggle("connect")}
              >
                <h4 className="text-white font-comfortaa font-bold text-lg leading-[28.8px] flex items-center justify-between">
                  Connect
                  <span className="md:hidden ml-2">
                    {open.connect ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                        <path d="M1 9.24414L8.53516 1.70898L16.0703 9.24414" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                        <path d="M1 1.75586L8.53516 9.29102L16.0703 1.75586" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                </h4>
              </div>

              <div
                className={`pt-3 flex flex-col gap-4 opacity-70 footer_right_col_links transition-all duration-20 overflow-hidden ${open.connect ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
                  }`}
              >
                <Link href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100 group">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/images/facebook_footer.png"
                      alt="Facebook Icon"
                      width={20}
                      height={20}
                      className="min-w-[20px]"
                    />
                  </div>
                  <span className="text-white font-inter text-base leading-[27.2px] group-hover:underline decoration-white">Facebook</span>
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100 group">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/images/instagram_footer.png"
                      alt="Instagram Icon"
                      width={20}
                      height={20}
                      className="min-w-[20px]"
                    />
                  </div>
                  <span className="text-white font-inter text-base leading-[27.2px] group-hover:underline decoration-white">Instagram</span>
                </Link>
                 <Link href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100 group">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/images/twitter_footer.png"
                      alt="Twitter Icon"
                      width={20}
                      height={20}
                      className="min-w-[20px]"
                    />
                  </div>
                  <span className="text-white font-inter text-base leading-[27.2px] group-hover:underline decoration-white">Twitter</span>
                </Link> 
              </div>
            </div> */}
          </div>
          <div className="pb-[15px] px-[20px] w-[100%] block md:hidden">
            <div className="w-[100%] p-[10px]"><img src="/images/Line 61.png" alt="Footer line bottom" /></div>
          </div>
          <div className="px-10 md:px-0 pb-[60px] pt-[20px] footer_right_col_terms block md:hidden">
            <div className="opacity-50 flex gap-6">
              <Link href="/terms" className="text-white text-base font-inter text-right leading-[27.2px] hover:opacity-100 hover:underline decoration-white">Terms & Conditions</Link>
              <div> | </div>
              <Link href="/privacy-policy" className="text-white text-base font-inter text-right leading-[27.2px] hover:opacity-100 hover:underline decoration-white">Privacy Policy</Link>
            </div>
            <p className="text-white font-inter text-base leading-[27.2px] opacity-70 pt-3">2025 © Al&apos;s Asphalt</p>
          </div>
          <div className="footer_right_col_bg absolute top-0 left-0 zindex">
            <svg xmlns="http://www.w3.org/2000/svg" width="689" height="590" viewBox="0 0 689 590" fill="none">
              <g opacity="0.25" filter="url(#filter0_f_2003_3699)">
                <path d="M548.258 643.154L578.123 608.307L-1.27675 49.2418L-404.558 -321.156L-31.1416 84.0884L548.258 643.154Z" fill="url(#paint0_linear_2003_3699)" />
              </g>
              <defs>
                <filter id="filter0_f_2003_3699" x="-515.357" y="-431.954" width="1204.28" height="1185.91" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="55.3993" result="effect1_foregroundBlur_2003_3699" />
                </filter>
                <linearGradient id="paint0_linear_2003_3699" x1="563.19" y1="625.731" x2="-47.0899" y2="102.697" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#D3D8DF" />
                </linearGradient>
              </defs>
            </svg></div>
          <div className="footer_right_col_bg1 absolute top-0 left-0 zindex">
            <svg xmlns="http://www.w3.org/2000/svg" width="783" height="590" viewBox="0 0 783 590" fill="none">
              <g opacity="0.25" filter="url(#filter0_f_2003_3698)">
                <path d="M642.119 495.209L671.984 460.363L92.5846 -98.7025L-310.697 -469.1L62.7197 -63.856L642.119 495.209Z" fill="url(#paint0_linear_2003_3698)" />
              </g>
              <defs>
                <filter id="filter0_f_2003_3698" x="-421.496" y="-579.899" width="1204.28" height="1185.91" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="55.3993" result="effect1_foregroundBlur_2003_3698" />
                </filter>
                <linearGradient id="paint0_linear_2003_3698" x1="657.052" y1="477.786" x2="46.7714" y2="-45.2473" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#D3D8DF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Middle line asset - adjusted height to match design */}
        <div className="py-[15px] px-[10px] lg:px-[25px] h-[300px] lg:h-[400px] xl:h-[auto] hidden md:block">
          <Image
            src="/images/footer_line_middle.png"
            alt="Footer line middle"
            width={4}
            height={480}
            className="h-full"
          />
        </div>


        {/* Right Panel */}
        <div className="rounded-2xl bg-black w-[100%] md:w-[60%] footer_right_sec hidden md:block">
          <div className="p-10 xl:p-20 footer_right_col">
            {/* Footer Links Section */}
            <div className="flex gap-16">
              {/* Quick Links */}
              <div className="flex flex-col gap-5 w-[22%] xl:w-[33%]">
                <div
                  className="flex flex-col gap-2 cursor-pointer md:cursor-default"
                  onClick={() => toggle("quick")}
                >
                  <h4 className="text-white font-comfortaa font-bold text-lg leading-[28.8px] flex items-center justify-between">
                    Quick Links
                    <span className="md:hidden ml-2">
                      {open.quick ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                          <path d="M1 9.24414L8.53516 1.70898L16.0703 9.24414" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                          <path d="M1 1.75586L8.53516 9.29102L16.0703 1.75586" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </h4>
                  <div className="w-[100px] lg:w-[150px] xl:w-[184px] h-px bg-white opacity-20"></div>
                </div>
                <div
                  className={`flex flex-col gap-4 footer_right_col_links transition-all duration-20 overflow-hidden ${open.quick ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
                    }`}
                >
                  <Link href="/" className="w-[184px] text-white opacity-70 font-inter text-base leading-[27.2px] hover:opacity-100 hover:underline decoration-white">Home Page</Link>
                  <Link href="/about" className="w-[184px] text-white opacity-70 font-inter text-base leading-[27.2px] hover:opacity-100 hover:underline decoration-white">About Us</Link>
                  <Link href="/faqs" className="w-[184px] text-white opacity-70 font-inter text-base leading-[27.2px] hover:opacity-100 hover:underline decoration-white">FAQs</Link>
                  {/* <Link href="/gallery" className="w-[184px] text-white opacity-70 font-inter text-base leading-[27.2px] hover:opacity-100 hover:underline decoration-white">Gallery</Link> */}
                </div>
              </div>

              {/* Services */}
              <div className="flex flex-col gap-5 w-[22%] xl:w-[33%]">
                <div
                  className="flex flex-col gap-2 cursor-pointer md:cursor-default"
                  onClick={() => toggle("services")}
                >
                  <h4 className="text-white font-comfortaa font-bold text-lg leading-[28.8px] flex items-center justify-between">
                    Services
                    <span className="md:hidden ml-2">
                      {open.services ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                          <path d="M1 9.24414L8.53516 1.70898L16.0703 9.24414" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                          <path d="M1 1.75586L8.53516 9.29102L16.0703 1.75586" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </h4>
                  <div className="w-[100px] lg:w-[150px] xl:w-[184px] h-px bg-white opacity-20"></div>
                </div>
                <div
                  className={`flex flex-col gap-4 opacity-70 footer_right_col_links transition-all duration-20 overflow-hidden ${open.services ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
                    }`}
                >
                  <Link href="/services/crack-repair" className="text-white opacity-70 w-[184px] text-white font-inter text-base leading-[27.2px] hover:opacity-100 hover:underline decoration-white">Crack Repair</Link>
                  <Link href="/services/pothole-repair" className="text-white opacity-70 w-[184px] text-white font-inter text-base leading-[27.2px] hover:opacity-100 hover:underline decoration-white">Pothole Repair</Link>
                  <Link href="/services/line-striping" className="text-white opacity-70 w-[184px] text-white font-inter text-base leading-[27.2px] hover:opacity-100 hover:underline decoration-white">Line Striping</Link>
                  <Link href="/services/seal-coating" className="text-white opacity-70 w-[184px] text-white font-inter text-base leading-[27.2px] hover:opacity-100 hover:underline decoration-white">Seal Coating</Link>
                  <span className="text-white font-inter text-base leading-[27.2px]">Infrared Repair (soon)</span>
                </div>
              </div>

              {/* Connect */}
               {/* <div className="flex flex-col gap-5 w-[22%] xl:w-[33%]">
                <div
                  className="flex flex-col gap-2 cursor-pointer md:cursor-default"
                  onClick={() => toggle("connect")}
                >
                  <h4 className="text-white font-comfortaa font-bold text-lg leading-[28.8px] flex items-center justify-between">
                    Connect
                    <span className="md:hidden ml-2">
                      {open.connect ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                          <path d="M1 9.24414L8.53516 1.70898L16.0703 9.24414" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                          <path d="M1 1.75586L8.53516 9.29102L16.0703 1.75586" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </h4>
                  <div className="w-[100px] lg:w-[150px] xl:w-[184px] h-px bg-white opacity-20"></div>
                </div>

                <div
                  className={`flex flex-col gap-4 opacity-70 footer_right_col_links transition-all duration-20 overflow-hidden ${open.connect ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
                    }`}
                >
                  <Link href="" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100 group">
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/facebook_footer.png"
                        alt="Facebook Icon"
                        width={20}
                        height={20}
                        className="min-w-[20px]"
                      />
                    </div>
                    <span className="text-white font-inter text-base leading-[27.2px] group-hover:underline decoration-white">Facebook</span>
                  </Link>
                  <Link href="" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100 group">
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/instagram_footer.png"
                        alt="Instagram Icon"
                        width={20}
                        height={20}
                        className="min-w-[20px]"
                      />
                    </div>
                    <span className="text-white font-inter text-base leading-[27.2px] group-hover:underline decoration-white">Instagram</span>
                  </Link>
                   <Link href="" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100 group">
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/twitter_footer.png"
                        alt="Twitter Icon"
                        width={20}
                        height={20}
                        className="min-w-[20px]"
                      />
                    </div>
                    <span className="text-white font-inter text-base leading-[27.2px] group-hover:underline decoration-white">Twitter</span>
                  </Link> 
                </div>
              </div>  */}
            </div>

            {/* Copyright and links */}
            <div className="flex justify-between items-center pt-[80px] footer_right_col_terms">
              <p className="text-white font-inter text-base leading-[27.2px] opacity-70">2025 © Al&apos;s Asphalt</p>
              <div className="opacity-50 flex gap-6">
                <Link href="/terms" className="text-white text-base font-inter text-right leading-[27.2px] hover:opacity-100 hover:underline decoration-white">Terms & Conditions</Link>
                <Link href="/privacy-policy" className="text-white text-base font-inter text-right leading-[27.2px] hover:opacity-100 hover:underline decoration-white">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_right_col_bg2 absolute top-0 left-50 zindex">
          <svg xmlns="http://www.w3.org/2000/svg" width="1046" height="590" viewBox="0 0 1046 590" fill="none">
            <g opacity="0.25" filter="url(#filter0_f_2003_3697)">
              <path d="M904.926 496.859L934.791 462.012L355.391 -97.0531L-47.8904 -467.451L325.526 -62.2066L904.926 496.859Z" fill="url(#paint0_linear_2003_3697)" />
            </g>
            <defs>
              <filter id="filter0_f_2003_3697" x="-158.689" y="-578.249" width="1204.28" height="1185.91" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="55.3993" result="effect1_foregroundBlur_2003_3697" />
              </filter>
              <linearGradient id="paint0_linear_2003_3697" x1="919.858" y1="479.436" x2="309.578" y2="-43.5979" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="#D3D8DF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="footer_right_col_bg3 absolute top-[-200px] right-[250px] rotate-75 zindex">
          <svg xmlns="http://www.w3.org/2000/svg" width="1046" height="590" viewBox="0 0 1046 590" fill="none">
            <g opacity="0.25" filter="url(#filter0_f_2003_3697)">
              <path d="M904.926 496.859L934.791 462.012L355.391 -97.0531L-47.8904 -467.451L325.526 -62.2066L904.926 496.859Z" fill="url(#paint0_linear_2003_3697)" />
            </g>
            <defs>
              <filter id="filter0_f_2003_3697" x="-158.689" y="-578.249" width="1204.28" height="1185.91" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="55.3993" result="effect1_foregroundBlur_2003_3697" />
              </filter>
              <linearGradient id="paint0_linear_2003_3697" x1="919.858" y1="479.436" x2="309.578" y2="-43.5979" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="#D3D8DF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="footer_right_col_bg3 absolute top-[-200px] right-[0px] rotate-75 zindex">
          <svg xmlns="http://www.w3.org/2000/svg" width="1046" height="590" viewBox="0 0 1046 590" fill="none">
            <g opacity="0.25" filter="url(#filter0_f_2003_3697)">
              <path d="M904.926 496.859L934.791 462.012L355.391 -97.0531L-47.8904 -467.451L325.526 -62.2066L904.926 496.859Z" fill="url(#paint0_linear_2003_3697)" />
            </g>
            <defs>
              <filter id="filter0_f_2003_3697" x="-158.689" y="-578.249" width="1204.28" height="1185.91" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="55.3993" result="effect1_foregroundBlur_2003_3697" />
              </filter>
              <linearGradient id="paint0_linear_2003_3697" x1="919.858" y1="479.436" x2="309.578" y2="-43.5979" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="#D3D8DF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="footer_right_col_bg3 absolute top-[-200px] right-[-250px] rotate-75 zindex">
          <svg xmlns="http://www.w3.org/2000/svg" width="1046" height="590" viewBox="0 0 1046 590" fill="none">
            <g opacity="0.25" filter="url(#filter0_f_2003_3697)">
              <path d="M904.926 496.859L934.791 462.012L355.391 -97.0531L-47.8904 -467.451L325.526 -62.2066L904.926 496.859Z" fill="url(#paint0_linear_2003_3697)" />
            </g>
            <defs>
              <filter id="filter0_f_2003_3697" x="-158.689" y="-578.249" width="1204.28" height="1185.91" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="55.3993" result="effect1_foregroundBlur_2003_3697" />
              </filter>
              <linearGradient id="paint0_linear_2003_3697" x1="919.858" y1="479.436" x2="309.578" y2="-43.5979" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="#D3D8DF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative w-[99%] h-[3px] mt-5">
        <Image
          src="/images/footer_line_top.png"
          alt="Footer line middle"
          fill
          className="object-cover"
        />
      </div>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </footer>
  );
};

export default Footer; 