import Link from 'next/link';
import Button from '../ui/Button';
import Image from 'next/image';

const ServiceCard = ({ 
  title, 
  description, 
  iconSrc, 
  link
}: {
  title: string;
  description: string;
  iconSrc: string;
  link: string;
}) => {
  return (
    <div className="w-full rounded-[24px] p-[36px] flex flex-col items-start gap-[20px] relative overflow-hidden transition-colors duration-300 bg-[rgba(5,5,5,0.02)] border border-black/10  service-card">
      {/* Icon */}
      <div className="w-[80px] h-[80px] flex-none absolute left-[36px] top-[36px]">
        <Image 
          src={iconSrc} 
          alt={title} 
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
      
      {/* Content Container */}
      <div className="mt-[100px] w-full md:w-[553px] flex flex-col items-start gap-[24px] self-stretch">
        {/* Title and Description */}
        <div className="flex flex-col items-start gap-[12px] w-full">
          <h3 className="font-comfortaa font-[700] leading-[140%] text-[#000000]">{title}</h3>
          <p className="font-inter font-[400] text-[16px] leading-[170%] text-[rgba(0,0,0,0.83)] w-full">{description}</p>
        </div>
        
        {/* CTA */}
        <div className="flex flex-row items-center gap-[8px] h-[27px]">
          <span className="font-inter font-[600] text-[16px] leading-[170%] text-[#000000]">
            LEARN MORE
          </span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-black" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </div>
      </div>
      
      {/* Link overlay */}
      <Link href={link} className="absolute inset-0" />
      <div className='spotlight'></div>
    </div>
  );
};
type ServicesProps = {
  openModal: () => void;
};
const Services = ({openModal}: ServicesProps) => {
  return (
    <section className="py-[40] md:py-[96px] bg-white">
      <div className="container mx-auto flex flex-col items-center gap-16">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-6 max-w-[676px] services-sec relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#FFEB38] flex-shrink-0"></div>
            <span className="font-inter text-black">Services</span>
          </div>
          
          {/* Main Title */}
          <h2 className="font-comfortaa font-bold text-center tracking-tight leading-[120%] text-black hidden md:block">
            Professional Asphalt<br />Services for Mid-Michigan
          </h2>
          <h2 className="font-comfortaa font-bold text-center tracking-tight leading-[120%] text-black block md:hidden">
            Professional Services<br />for Mid-Michigan
          </h2>          
        </div>
        
        {/* Cards Container */}
        <div className="flex flex-col items-start p-0 gap-[30px] w-full mt-[-30px]">
          {/* First Row */}
          <div className="flex flex-col md:flex-row items-start p-0 gap-[30px] w-full justify-center">
            <ServiceCard 
              title="Pothole Repair"
              description="Fast, durable patching for roads, driveways, and parking lots."
              iconSrc="/images/first-icon.png"
              link="/services/pothole-repair"
            />
            
            <ServiceCard 
              title="Seal Coating"
              description="Protect your asphalt surface from the elements with a fresh, lasting seal."
              iconSrc="/images/seat_coating_icon.png"
              link="/services/seal-coating"
            />
          </div>
          
          {/* Second Row */}
          <div className="flex flex-col md:flex-row items-start p-0 gap-[30px] w-full justify-center">
            <ServiceCard 
              title="Crack Repair"
              description="Seal the cracks before they grow into bigger problems."
              iconSrc="/images/crack_repair_icon.png"
              link="/services/crack-repair"
            />
            
            <ServiceCard 
              title="Line Striping"
              description="Clean, compliant markings for parking lots and drive-thrus."
              iconSrc="/images/line_striping_icon.png"
              link="/services/line-striping"
            />
          </div>
        </div>
        
        {/* Button */}
        <div className="flex flex-col justify-center items-center gap-3">
          <Button 
            variant="primary" 
            className="h-[56px] px-8 py-3.5 rounded-[40px] font-inter text-lg font-semibold leading-[1.7em] bg-[#FFEB38] text-black"
            onClick={openModal}
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services; 