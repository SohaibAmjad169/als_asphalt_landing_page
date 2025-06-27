"use client";
import Image from 'next/image';


const CrackProtecttions = () => {
  return (
    <section className="relative bg-black py-30 md:py-24 lg:py-30 overflow-hidden rounded-b-2xl about-border-sec">
      <div className='oval_sec hidden md:block'></div>
      <div className="absolute top-[-1px] left-1/2 transform -translate-x-1/2 z-10" style={{ width: '112px', height: '57px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="112" height="57" viewBox="0 0 112 57" fill="none" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M56 56.0522C56 25.1243 30.9279 0.0522461 0 0.0522461H112C81.0721 0.0522461 56 25.1243 56 56.0522Z" fill="#FAFAFA"/>
        </svg>
      </div>
      
      <div className="absolute bottom-arrow left-1/2 transform -translate-x-1/2 z-10" style={{ width: '112px', height: '56px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="112" height="56" viewBox="0 0 112 56" fill="none" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M56 0C56 30.9279 30.9279 56 0 56H112C81.0721 56 56 30.9279 56 0Z" fill="#FAFAFA"/>
        </svg>
      </div>
      
      <div className="absolute w-[580px] h-[580px] left-[-40px] top-[-173px] opacity-20 bg-white/40 rounded-full blur-[200px]"></div>
      <div className="absolute w-[580px] h-[580px] right-[-40px] bottom-[-173px] opacity-20 bg-white/40 rounded-full blur-[200px]"></div>
      
      <div className="absolute inset-0 border border-white/6"></div>
      
      <div className="container mx-auto relative z-[1]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[133px]">
          <div className="flex-1 flex flex-col gap-3 mb-12 lg:mb-0 relative z-[2]" >
            <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
              <div style={{ width: '10px', height: '10px', backgroundColor: '#FFEB38', borderRadius: '50%' }}></div>
              <p className="text-white font-medium leading-relaxed why_txt">Crack Protection</p>
            </div>
            
            <h2 className="text-white font-comfortaa font-semibold mb-5 text-center md:text-start">
            Stop Small Cracks from .<br />Becoming Big Problems.
            </h2>
            
            <p className="text-white/83 text-center md:text-left leading-relaxed w-[98%] md:max-w-[500px] mb-0 md:mb-2 ab_para">
            Our expert crack repair service uses hot rubberized filler and professional-grade tools to seal cracks tight - blocking out moisture, preventing further deterioration, and extending the life of your asphalt surface.
            </p>
            <i>
            <p className="text-white/83 text-center md:text-left leading-relaxed w-[98%] md:max-w-[500px] mb-0 md:mb-8 ab_para">
            Protect your driveways, parking lots, and roads with long-lasting, professional repairs you can trust.            </p>
            </i>
          </div>
          
          <div className="flex-1 relative z-[2]">
            <div className="rounded-2xl overflow-hidden h-[auto] md:h-[427px]">
              <Image
                src="/images/crack_protection.webp"
                alt="Al's Asphalt Equipment"
                width={612}
                height={427}
                className="w-full h-full object-cover rounded-2xl"
                priority
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mob_oval_sec block md:hidden'></div>
    </section>
  );
};

const CrackProtection = () => {
  return (
    <>
      <CrackProtecttions />
    </>
  );
};

export default CrackProtection; 