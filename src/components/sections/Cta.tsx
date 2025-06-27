import Link from 'next/link';

type CtaProps = {
  openModal: () => void;
};

const Cta = ({openModal}: CtaProps) => {
  return (
    <section className="w-full py-12 bg-white pt-[0px]">
      <div className="container mx-auto px-0 md:px-4 relative pt-[50px] testimonials-col">
        <div 
          className="w-full unset rounded-[28px] bg-black  get_sec" 
        >
          <div className="four_arrow py-[80px] px-[20px] md:p-[70px] min-h-[500px] md:min-h-[auto]"> 
          <div className="flex flex-col items-start gap-[40px] w-[100%] md:w-[50%]">
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-5xl font-comfortaa font-bold text-white leading-[87px] max-w-[785px] drop-shadow-lg">
                Get Your Quote!
              </h2>
              <p className="text-white text-lg font-inter max-w-[515px] leading-[27px] drop-shadow-md">
                Don&apos;t wait for your road to degrade further, get it fixed the right way with Al&apos;s Asphalt.
              </p>
            </div>
            <Link 
                onClick={openModal}
                className="h-[51px] px-8 py-[14px] bg-[#FFEB38] text-black rounded-[40px] inline-flex items-center justify-center shadow-md hover:bg-[#FFDD00] transition-colors" href={''}            >
              <span className="text-lg font-semibold leading-[30.6px]">Get a Quote</span>
            </Link>
          </div>
          <div id='person_div_lets_talk' className="absolute bottom-0 right-0 h-full flex items-end justify-end person_div" style={{ width: '50%' }}>
            <img 
              src="/images/person-img.png" 
              alt="Get a Quote" 
              className="w-auto h-auto object-contain max-h-full" 
              style={{ maxWidth: '90%' }} 
            />
          </div>  
          </div>
          {/* Content positioned with good contrast over the background image */}
               
        </div>
      </div>
    </section>
  );
};

export default Cta; 