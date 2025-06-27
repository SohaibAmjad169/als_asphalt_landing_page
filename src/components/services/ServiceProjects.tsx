"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import { useRef } from 'react';

const projectImages = [
  {
    src: "/images/slide1.webp",
    alt: "Asphalt project 1"
  },
  {
    src: "/images/slide2-alt.webp",
    alt: "Asphalt project 2"
  },
  {
    src: "/images/slide3.webp",
    alt: "Asphalt project 3"
  },
  {
    src: "/images/slide4.webp",
    alt: "Asphalt project 4"
  }
];

const ServiceProjects = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="pt-15 pb-20 md:py-22 project-sec bg-[rgb(5,5,5,0.02)] relative">
      <div className='container p-0 md:p-[0px, 1rem] project-container'>
        <div className="w-full flex flex-col items-center">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-3 pb-[30px] md:pb-[0px]">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-[#FFEB38] flex-shrink-0"></div>
              <span className="text-sm font-inter text-black">Projects</span>
            </div>
            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-comfortaa font-bold text-center tracking-tight leading-[120%] text-black max-w-[676px]">
              See The Work
            </h2>
            {/* Description */}
            <p className="text-center text-[rgba(0,0,0,0.83)] text-base font-inter">
              Real Jobs. Real Results.
            </p>
          </div>

          {/* Desktop Gallery */}
          <div className="hidden md:flex flex-row justify-center gap-[30px] w-[100%] pt-15">
            {/* Left Column - Two stacked images */}
            <div className="flex flex-col gap-[30px] w-[31%] justify-between ">
              <div className="w-full rounded-[24px] overflow-hidden">
                <Image
                  src="/images/project1.webp"
                  alt="Asphalt project 1"
                  width={406}
                  height={235}
                  className="w-full h-full"
                  quality={90}
                />
              </div>
              <div className="w-full rounded-[24px] overflow-hidden ">
                <Image
                  src="/images/project3.webp"
                  alt="Asphalt project 2"
                  width={406}
                  height={235}
                  className="w-full h-full"
                  quality={90}
                />
              </div>
            </div>
            {/* Middle Column - One tall image */}
            <div className="rounded-[24px] overflow-hidden w-[38%]">
              <Image
                src="/images/project4.webp"
                alt="Asphalt project 3"
                width={517}
                height={500}
                className="w-full h-full"
                quality={90}
              />
            </div>
            {/* Right Column - One narrow tall image */}
            <div className="rounded-[24px] overflow-hidden w-[23%]">
              <Image
                src="/images/project2.webp"
                alt="Asphalt project 4"
                width={297}
                height={500}
                className="w-full h-full"
                quality={90}
              />
            </div>
          </div>

          {/* Mobile Slider */}
          <div className="w-full md:hidden pb-8">
            {/* Navigation Buttons (rendered BEFORE Swiper) */}
            <div className="flex justify-center gap-4 mt-10 project-slider-btn">
              <button
                ref={prevRef}
                className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center"
                aria-label="Previous"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M10 5.34375L3 12.3438M3 12.3438L10 19.3438M3 12.3438L21 12.3437" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                ref={nextRef}
                className="w-12 h-12 rounded-full bg-[#FFEB38] flex items-center justify-center"
                aria-label="Next"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M14 5.34375L21 12.3438M21 12.3438L14 19.3438M21 12.3438L3 12.3437" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <Swiper
              spaceBetween={30}
              slidesPerView={1.5}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              modules={[Autoplay, Navigation]}
              className="custom-swiper-overlap"
            >
              {projectImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="rounded-[24px] overflow-hidden shadow-lg">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={406}
                      height={235}
                      className="w-full h-full"
                      quality={90}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProjects; 