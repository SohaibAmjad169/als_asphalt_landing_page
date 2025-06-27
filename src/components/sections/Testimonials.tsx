"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper as SwiperCore } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Pastor R.',
    location: 'Omer, MI',
    text: 'Allen and his crew did a great job sealing our church lot. Clean work and very respectful.',
    image: '/images/pastor_r.jpg',
  },
  {
    id: 2,
    name: 'John Smith',
    title: 'Owner, Local Company',
    text: 'The parking lot looks brand new. No shortcuts here - solid team. Would recommend to anyone!',
    image: '/images/jone_smith.jpg',
  },
  {
    id: 3,
    name: 'Tod Kart',
    title: 'Owner, Parkings Co.',
    text: 'Superb work, I always can depend on Allen and his team for all my commercial parking lots',
    image: '/images/tod_kart.jpg',
  },
  {
    id: 4,
    name: 'Pastor R.',
    location: 'Omer, MI',
    text: 'Allen and his crew did a great job sealing our church lot. Clean work and very respectful.',
    image: '/images/pastor_r.jpg',
  },
  {
    id: 5,
    name: 'John Smith',
    title: 'Owner, Local Company',
    text: 'The parking lot looks brand new. No shortcuts here - solid team. Would recommend to anyone!',
    image: '/images/jone_smith.jpg',
  },
];

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<SwiperCore | null>(null); 

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.params.navigation &&
      typeof swiperRef.current.params.navigation !== 'boolean' &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [prevRef.current, nextRef.current]);

  const NavigationControls = () => (
    <div className="flex items-center gap-4 mt-6 md:mt-0 w-full md:w-auto justify-start md:justify-end absolute bottom-0 md:bottom-auto md:right-0 z-10">
      <div
        ref={prevRef}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-200 flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Previous testimonial"
        tabIndex={0}
        role="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <path d="M10 5.34375L3 12.3438M3 12.3438L10 19.3438M3 12.3438L21 12.3437" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div
        ref={nextRef}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#FFEB38] flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Next testimonial"
        tabIndex={0}
        role="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <path d="M14 5.34375L21 12.3438M21 12.3438L14 19.3438M21 12.3438L3 12.3437" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );

  return (
    <section className="pt-30 pb-10 md:py-16 bg-white testimonials-sec relative">
      <div className="container mx-auto px-4 md:px-8 md:relative">
        <div className="flex flex-col mb-12">
          {/* Header with navigation */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:relative">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-2 w-2 rounded-full bg-[#FFEB38]"></div>
                <span className="text-sm font-inter uppercase text-black">Testimonials</span>
              </div>
              <h2 className="font-comfortaa font-bold text-black leading-tight hidden md:block">
                What Our Clients <br /> Say About us
              </h2>
              <h2 className="font-comfortaa font-bold text-black leading-tight block md:hidden">
                What Our Clients Say <br />About us
              </h2>
            </div>
            <NavigationControls />
          </div>

          {/* Swiper Slider */}
          <Swiper
            spaceBetween={24}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="w-full"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-lg md:p-8 flex flex-col items-start max-w-xl md:mx-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-comfortaa font-bold text-black pb-2">
                        {testimonial.name}
                      </h3>
                      {testimonial.location && <p className="text-sm text-black">{testimonial.location}</p>}
                      {testimonial.title && <p className="text-sm text-black">{testimonial.title}</p>}
                    </div>
                  </div>
                  <p className="text-[rgba(0,0,0,0.83)] text-base leading-relaxed text-left pt-4 w-full md:w-[340px]">
                    {testimonial.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
