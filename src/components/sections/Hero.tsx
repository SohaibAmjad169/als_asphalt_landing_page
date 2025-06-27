import Image from 'next/image';
import Button from '../ui/Button';

type HeroProps = {
  openModal: () => void;
};

const Hero = ({openModal}: HeroProps) => {
  return (
    <section className="bg-[#F5F5F5] ">
      {/* Content Section - separate from image */}
      <div className="container mx-auto px-5 py-5">
        {/* Header with padding */}
        <header className="pb-0 pt-0 md:py-5">
          <div className="flex flex-col md:flex-row justify-between mb-0 md:mb-8 pt-5 pb-[32px] md:py-5 mt-0 md:mt-8">
            {/* <div className='md:hidden block flex items-center justify-between pt-[0px] pb-[32px] md:py-[32px]'>
                <div><img src="/images/Frame-googles.png" alt="Al's Asphalt" /></div>
                <div><img src="/images/Frame-star.png" alt="Al's Asphalt" /></div>
            </div> */}
            {/* Left column */}
            <div className="md:w-[72%] mb-[20px] md:mb-0 hero-txt">
              {/* Location indicator */}
              <div className="flex items-center gap-2 mb-[24px] md:mb-4 justify-center md:justify-start">
                <div className="h-2 w-2 rounded-full bg-[#FFEB38] flex-shrink-0"></div>
                <span className="text-sm font-inter text-black font-normal">Based in Standish, Michigan</span>
              </div>
              
              {/* Main heading */}
              <h1 className="px-[7%] md:px-0 font-comfortaa font-[600] leading-tight text-black text-center md:text-left">
                Asphalt Repair &<br />
                Maintenance Done Right
              </h1>
            </div>
            
            {/* Right column */}
            <div className="md:w-[28%] self-center hero-btn">
              {/* Description */}
              <p className="text-[rgba(0,0,0,0.8)] mb-6 leading-relaxed font-inter text-center md:text-left">
                From pothole repair to seal coating, we serve Standish and surrounding Michigan towns with clean, professional work built to last.
              </p>
              
              {/* Buttons */}
              <div className="grid md:flex flex-wrap justify-revert md:justify-between w-full text-center">
                <Button 
                  scrollTo="contact" 
                  variant="primary" 
                  className="bg-[#FFEB38] text-black rounded-full w-full md:w-[48%] py-[14px] font-medium hover:bg-yellow-300 text-center my-2 md:my-0"
                  onClick={openModal}
                >
                  Get a Quote
                </Button>
                <Button 
                  scrollTo="services" 
                  variant="outline" 
                  className="bg-transparent text-black rounded-full w-full md:w-[48%] py-[14px] font-medium border border-black text-center my-[14px] md:my-0 hover:bg-[#ffeb38] serivece_btn"
                >
                  Our Services
                </Button>
              </div>
            </div>
          </div>
        </header>
        
        {/* Image section - below the content */}
        <div className="w-full overflow-hidden relative banners-img">
          <Image 
            src="/images/Main Image.png" 
            alt="Al's Asphalt professional work" 
            width={1200}
            height={600}
            className="w-auto md:w-full h-[100%] max-w-none hidden md:block"
          />
            <Image 
            src="/images/mb-banner.png" 
            alt="Al's Asphalt professional work" 
            width={1200}
            height={600}
            className="w-full md:w-full h-[100%] max-w-none block md:hidden"
          />
            {/* <Image 
              src="/images/hero-image-vector.png" 
              alt="Al's Asphalt professional work" 
              width={1200}
              height={600}
              className="uparrow-top"
            /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="112" height="57" viewBox="0 0 112 57" fill="none" className="uparrow-top">
              <path fillRule="evenodd" clipRule="evenodd" d="M56 56.3439C56 25.416 30.9279 0.343872 0 0.343872H112C81.0721 0.343872 56 25.416 56 56.3439Z" fill="#F5F5F5"/>
            </svg>
            {/* <Image 
              src="/images/hero-image-vector.png" 
              alt="Al's Asphalt professional work" 
              width={1200}
              height={600}
              className="downarrow-bottom hidden md:block"
            /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="112" height="57" viewBox="0 0 112 57" fill="none" className="downarrow-bottom hidden md:block">
              <path fillRule="evenodd" clipRule="evenodd" d="M56 56.3439C56 25.416 30.9279 0.343872 0 0.343872H112C81.0721 0.343872 56 25.416 56 56.3439Z" fill="#F5F5F5"/>
            </svg>
             {/* <Image 
              src="/images/upword-white-imgs.png" 
              alt="Al's Asphalt professional work" 
              width={1200}
              height={600}
              className="downarrow-bottom  block md:hidden"
            /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="77" height="39" viewBox="0 0 77 39" fill="none" className="downarrow-bottom-white  block md:hidden">
            <path fillRule="evenodd" clipRule="evenodd" d="M38.5 0.291626C38.5 21.2784 55.5132 38.2916 76.5 38.2916H0.5C21.4868 38.2916 38.5 21.2784 38.5 0.291626Z" fill="white"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero; 