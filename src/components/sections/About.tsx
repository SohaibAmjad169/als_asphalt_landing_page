"use client";

import SectionTitle from '../ui/SectionTitle';
import Image from 'next/image';
import { useState } from 'react';

const FeatureCard = ({
  title,
  description,
  icon
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="bg-black/50 border border-white/20 rounded-2xl p-6 text-white">
      <div className="space-y-3">
        <div className="flex items-center mb-2">
          {icon}
          <h3 className="font-comfortaa font-bold text-xl">{title}</h3>
        </div>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </div>
  );
};

const IndustryItem = ({
  title,
  isActive = false,
  onClick,
  description
}: {
  title: string;
  isActive?: boolean;
  onClick: () => void;
  description: string;
}) => {
  return (
    <div className="w-full">
      <button 
        className="flex items-center justify-between w-full py-2 group groups-sec"
        onClick={onClick}
      >
        <h3 className="font-medium text-2xl text-black" style={{ fontFamily: 'Inter', fontWeight: 500 }}>{title}</h3>
        
        {isActive ? (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FFEB38] transition-colors">
            <span className="text-black font-bold text-lg">-</span>
          </div>
        ) : (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black transition-colors">
            <span className="text-white font-bold text-lg">+</span>
          </div>
        )}
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-32 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-black/80 pl-0 pb-2 text-base leading-relaxed group-des" style={{ fontFamily: 'Inter', lineHeight: '1.7em', color: 'rgba(0, 0, 0, 0.83)' }}>
          {description}
        </div>
      </div>
    </div>
  );
};

const LocationSection = () => {
  // Set Homeowners active by default
  const [activeItem, setActiveItem] = useState<string>("Homeowners");
  
  const toggleItem = (item: string) => {
    setActiveItem(activeItem === item ? "" : item);
  };
  
  return (
    <section className="bg-[rgba(5,5,5,0.03)] py-[60px] md:py-[96px] faq-sec">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left column with text and inline circular icons */}
          <div className="w-full md:w-[65%] flex flex-col">
            <h2 className="font-comfortaa font-bold leading-tight mb-0 text-black flex flex-wrap items-center hidden md:flex">
              <span>We work with</span>
              <span className="inline-flex items-center mx-1">
                <div 
                  className="rounded-full bg-primary flex items-center justify-center mx-1 w-[45] lg:w-[59] h-[45] lg:h-[59]"
                >
                  <Image 
                    src="/images/business icon.png" 
                    alt="Business Icon" 
                    width={59} 
                    height={59}
                    quality={100}
                    priority={true}
                  />
                </div>
              </span>
              <span>businesses &amp;</span>
              <div className='flex items-center'>
                <span className="inline-flex items-center me-1">
                  <div 
                    className="rounded-full bg-primary flex items-center justify-center me-1 w-[45] lg:w-[59] h-[45] lg:h-[59]"
                  >
                    <Image 
                      src="/images/people icon.png" 
                      alt="People Icon" 
                      width={59} 
                      height={59}
                      quality={100}
                      priority={true}
                    />
                  </div>
                </span>
                <span>residents across</span>
              </div>              
              <div className='rounded-full flex items-center justify-center mx-1'>
                <span className="inline-flex items-center mx-1">
                <div 
                  className="rounded-full bg-primary flex items-center justify-center mx-1 w-[45] lg:w-[59] h-[45] lg:h-[59]"
                >
                  <Image 
                    src="/images/location icon.png" 
                    alt="Location Icon" 
                    width={59} 
                    height={59}
                    quality={100}
                    priority={true}
                  />                   
                </div>                
              </span>
              <span>Standish, </span>
              </div>              
              <span style={{ fontWeight: 900, lineHeight: 1.5, letterSpacing: '0.5px' }}>
                Pinconning, Omer, Au Gres, <br />and Saginaw.
              </span>
            </h2>

            <h2 className="font-comfortaa font-bold leading-tight mb-0 text-black flex flex-wrap items-center block md:hidden">
              <span>We work with</span>
              <span className="inline-flex items-center mx-1">
                <div 
                  className="rounded-full bg-primary flex items-center justify-center mx-1 w-[45] lg:w-[59] h-[45] lg:h-[59]"
                >
                  <Image 
                    src="/images/business icon.png" 
                    alt="Business Icon" 
                    width={59} 
                    height={59}
                    quality={100}
                    priority={true}
                  />
                </div>
              </span>
              <span>businesses &amp;</span>
              <div className='flex items-center'>
                <span className="inline-flex items-center me-1">
                  <div 
                    className="rounded-full bg-primary flex items-center justify-center me-1 w-[45] lg:w-[59] h-[45] lg:h-[59]"
                  >
                    <Image 
                      src="/images/people icon.png" 
                      alt="People Icon" 
                      width={59} 
                      height={59}
                      quality={100}
                      priority={true}
                    />
                  </div>
                </span>
                <span>residents across</span>
                <span className="inline-flex items-center mx-1">    
                  <div 
                    className="rounded-full bg-primary flex items-center justify-center me-1 w-[45] lg:w-[59] h-[45] lg:h-[59]"
                  >
                    <Image 
                      src="/images/location icon.png" 
                      alt="Location Icon" 
                      width={59} 
                      height={59}
                      quality={100}
                      priority={true}
                    />                   
                  </div>                           
                </span>
              </div>              
              <div className='rounded-full flex items-center justify-center mx-1'>
              </div>              
              <span style={{ fontWeight: 900, lineHeight: 1.5, letterSpacing: '0.5px' }}>
                Standish, Pinconning, Omer, Au Gres, <br />and Saginaw.
              </span>
            </h2>
            
          </div>
          
          {/* Right column with industries list */}
          <div className="w-full md:w-[45%] mt-[-30px] md:mt-[0px]">
            <div className="space-y-0">
              <IndustryItem 
                title="Homeowners" 
                isActive={activeItem === "Homeowners"}
                onClick={() => toggleItem("Homeowners")}
                description="We help homeowners extend the life of their asphalt with expert repair, sealing, and crack-filling services. Maintain curb appeal and prevent costly replacements with routine asphalt maintenance you can trust."
              />
              
              <div className="border-t border-[rgba(13,36,64,0.16)] pt-4 mt-4">
                <IndustryItem 
                  title="Car Dealerships"
                  isActive={activeItem === "Car Dealerships"}
                  onClick={() => toggleItem("Car Dealerships")}
                  description="Dealerships rely on spotless lots to showcase their inventory. Our asphalt repair and sealing services keep your lots looking professional, safe, and ready to impress every customer that pulls in."
                />
              </div>
              
              <div className="border-t border-b border-[rgba(13,36,64,0.16)] pt-4 pb-4 mt-4 mb-4">
                <IndustryItem 
                  title="Fast Food Chains & Restaurants"
                  isActive={activeItem === "Fast Food Chains & Restaurants"}
                  onClick={() => toggleItem("Fast Food Chains & Restaurants")}
                  description="A smooth, well-maintained parking lot enhances the customer experience and improves safety. We work with fast food chains and restaurants to repair, seal, and maintain lots, minimizing downtime and maximizing curb appeal."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUsSection = () => {
  return (
    <section className="relative bg-black py-30 md:py-24 lg:py-30 overflow-hidden rounded-b-2xl about-border-sec">
      <div className='oval_sec hidden md:block'></div>
      {/* Top notch decoration - simplified */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 arrow-top" style={{ width: '112px', height: '57px' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="112" height="57" viewBox="0 0 112 57" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M56 56.3442C56 25.4163 30.9279 0.344238 0 0.344238H112C81.0721 0.344238 56 25.4163 56 56.3442Z" fill="#FAFAFA"/>
    </svg>
      </div>
      
      {/* Bottom notch decoration - simplified */}
      <div className="absolute bottom-arrow left-1/2 transform -translate-x-1/2 z-10" style={{ width: '112px', height: '56px' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="112" height="56" viewBox="0 0 112 56" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M56 0.291016C56 31.2189 30.9279 56.291 0 56.291H112C81.0721 56.291 56 31.2189 56 0.291016Z" fill="#FAFAFA"/>
      </svg>
      </div>
      
      {/* Light blob effects - simplified and reduced */}
      <div className="absolute w-[580px] h-[580px] left-[-40px] top-[-173px] opacity-20 bg-white/40 rounded-full blur-[200px]"></div>
      <div className="absolute w-[580px] h-[580px] right-[-40px] bottom-[-173px] opacity-20 bg-white/40 rounded-full blur-[200px]"></div>
      
      {/* Background grid effect - simplified */}
      <div className="absolute inset-0 border border-white/6"></div>
      
      <div className="container mx-auto relative z-[1]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[133px]">
          {/* Left column - ensure content is selectable */}
          <div className="flex-1 flex flex-col gap-3 mb-12 lg:mb-0 relative z-[2]">
            {/* Section subtitle with dot */}
            <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
              <div style={{ width: '10px', height: '10px', backgroundColor: '#FFEB38', borderRadius: '50%' }}></div>
              <p className="text-white font-medium leading-relaxed why_txt">Why choose Al&apos;s</p>
            </div>
            
            {/* Main heading */}
            <h2 className="text-white font-comfortaa font-semibold mb-5 text-center md:text-start">
              Standish-Based.<br />Quality-Focused.
            </h2>
            
            {/* Description */}
            <p className="text-white/83 text-center md:text-left leading-relaxed md:max-w-[500px] mb-0 md:mb-8 ab_para">
              At Al&apos;s Asphalt, we specialize in essential asphalt maintenance services. 
              Our crack repair, seal coating, and pothole patching ensure your surfaces 
              remain safe and durable.
            </p>
          </div>
          
          {/* Right column - Image with loading optimization */}
          <div className="flex-1 relative z-[2]">
            <div className="rounded-2xl overflow-hidden h-[auto] md:h-[427px]">
              <Image
                src="/images/als-asphalt-service-truck-with-trailer-new-driveway.jpg"
                alt="Al's Asphalt service truck with trailer on a new driveway"
                width={612}
                height={427}
                className="w-full h-full object-cover rounded-2xl"
                priority
                loading="eager"
              />
            </div>
          </div>
        </div>
        
        {/* Feature cards - improved for selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 relative z-[2] feature-card">
          {/* Card 1 */}
          <div className="rounded-[24px] border border-white pl-[26px] md:pl-[29px] pr-[26px] md:pr-[74px] py-[26px] md:py-[23px] relative overflow-hidden">
            <div className="flex items-start mb-3">
              <div className="w-5 h-5 mr-3 mt-1 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                <path d="M10.9189 0.475098C11.2037 0.261905 11.5818 0.234934 11.8896 0.39502L12.0166 0.475098L13.583 1.6499C15.4582 3.0563 17.7393 3.81689 20.083 3.81689H20.8662C21.3713 3.81711 21.7812 4.22678 21.7812 4.73193V11.8462C21.7812 15.6306 19.7094 19.1004 16.4033 20.9019L16.0801 21.0708L11.877 23.1724C11.6517 23.2851 11.3912 23.2988 11.1572 23.2144L11.0586 23.1724L6.85547 21.0708C3.36161 19.3238 1.15434 15.7526 1.1543 11.8462V4.73193C1.1543 4.22664 1.56404 3.81689 2.06934 3.81689H2.85254C5.0499 3.81688 7.19197 3.14905 8.99609 1.90674L9.35254 1.6499L10.9189 0.475098ZM19.9512 5.64893L19.6992 5.64111C17.2577 5.56717 14.89 4.78819 12.8818 3.3999L12.4844 3.11377L11.623 2.46826L11.4678 2.35107L11.3115 2.46826L10.4502 3.11377C8.36081 4.68082 5.84064 5.5621 3.23633 5.64111L2.98438 5.64893V11.8462C2.98442 14.9589 4.68794 17.8128 7.40723 19.2944L7.67383 19.4341L11.3516 21.2729L11.4678 21.3306L11.584 21.2729L15.2607 19.4341C18.1348 17.9971 19.9511 15.0594 19.9512 11.8462V5.64893Z" fill="white" stroke="black"/>
              </svg>
              </div>
              <h3 className="text-white font-comfortaa font-bold">Lasting Work</h3>
            </div>
            <p className="text-white/70 text-base leading-snug">
              We use high-grade sealants and repair materials that last longer.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="rounded-[24px] border border-white pl-[26px] md:pl-[29px] pr-[26px] md:pr-[74px] py-[26px] md:py-[23px] relative overflow-hidden">
            <div className="flex items-start mb-3">
              <div className="w-5 h-5 mr-3 mt-1 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                <path d="M6.34961 6.52515L6.34668 6.52612L4.49023 7.23901L1.88965 3.62671L4.21094 1.30542L7.82324 3.90698L7.10742 5.76831L7.10547 5.77222V5.77319L7.10352 5.7771C7.10243 5.77988 7.10066 5.78573 7.09863 5.79175C6.97501 6.15861 6.73979 6.39331 6.37207 6.51636H6.37109L6.35254 6.52319L6.35156 6.52417M6.34961 6.52515L6.35156 6.52417M6.34961 6.52515L6.35156 6.52417M6.34961 6.52515L6.34473 6.52612C6.34708 6.5251 6.34929 6.52464 6.35059 6.52417L6.35156 6.52319V6.52417M3.91504 0.369873C4.06517 0.266016 4.26803 0.264882 4.4209 0.374756L8.61133 3.39136V3.39233L8.66699 3.44019C8.76932 3.54403 8.81374 3.69198 8.78516 3.83472L8.76465 3.90601L8.04297 5.78003L11.0928 8.14429L13.6133 5.73901V3.07788C13.6134 2.95531 13.6653 2.83766 13.7559 2.75464L15.7676 0.910889L15.832 0.862061C15.901 0.819182 15.9808 0.795731 16.0635 0.795654H19.248L19.3135 0.800537C19.4642 0.823184 19.5952 0.923269 19.6543 1.06714L19.6748 1.12964C19.7058 1.2559 19.679 1.38982 19.6016 1.49487L19.5586 1.54565L17.3408 3.76245V5.25659C17.3408 5.29142 17.3695 5.32086 17.4043 5.32104H18.8984L21.1162 3.10327L21.166 3.0603C21.2388 3.00626 21.3261 2.97682 21.415 2.97437L21.4043 2.92847L21.5947 3.00757L21.6533 3.03784C21.7835 3.11655 21.8662 3.25776 21.8672 3.41284V6.59741C21.8672 6.68011 21.8438 6.7607 21.8008 6.82983L21.752 6.89429L19.9082 8.90601C19.8247 8.9962 19.7072 9.04761 19.584 9.04761H16.9238L14.9141 11.1521L20.54 16.1521H20.5391C21.1775 16.6662 21.5327 17.2479 21.5684 17.8855L21.5703 18.0164C21.5627 18.5837 21.3018 19.1555 20.8096 19.7205L20.5654 19.9802C20.0087 20.537 19.3532 20.8367 18.667 20.8367H18.6299C18.3759 20.8326 18.1241 20.788 17.8789 20.7029L17.6367 20.6042C17.3229 20.4585 17.0274 20.2478 16.7598 19.9802V19.9792C16.754 19.9739 16.7471 19.9688 16.7412 19.9617V19.9607L11.7598 14.4548L6.49414 19.9734L6.4873 19.9802C6.28602 20.1815 6.06953 20.35 5.8418 20.4832L5.61035 20.6052C5.28971 20.7532 4.95571 20.8312 4.61719 20.8367H4.58008C3.98038 20.8367 3.40244 20.6078 2.89453 20.1775L2.68164 19.9802C2.11412 19.4134 1.8142 18.7442 1.8252 18.0447L1.84277 17.7917C1.87397 17.5399 1.94504 17.2911 2.05664 17.0505L2.17871 16.8191C2.31191 16.5914 2.48017 16.3751 2.68066 16.1746C2.68231 16.1728 2.68524 16.1707 2.68848 16.1677L8.62402 10.4998L6.35742 7.46167L4.48926 8.18042C4.43872 8.19978 4.38496 8.20972 4.33203 8.20972C4.22915 8.20967 4.12762 8.17298 4.04785 8.10522L3.97559 8.0271L0.958984 3.83667C0.833466 3.66204 0.853075 3.42231 1.00488 3.27026L3.85449 0.420654L3.91504 0.369873ZM12.3682 13.8191L17.3857 19.366L17.5381 19.5056C17.8981 19.8101 18.2847 19.9575 18.665 19.9568C19.0996 19.9558 19.5417 19.7617 19.9434 19.3601L20.1299 19.1619C20.4743 18.772 20.6546 18.4143 20.6865 18.0925L20.6904 17.9343C20.6704 17.5724 20.4431 17.1995 19.9795 16.8289L19.9785 16.8279C19.976 16.8258 19.9729 16.8229 19.9707 16.821C19.9686 16.8193 19.9667 16.8177 19.9648 16.8162L19.9619 16.8142L14.3057 11.7888L12.3682 13.8191ZM14.4922 3.26929V5.92651C14.4922 6.01626 14.4644 6.1035 14.4141 6.17651L14.3564 6.24487L3.29785 16.8005C2.9593 17.141 2.76339 17.5164 2.71484 17.8953L2.70312 18.0583C2.69557 18.5042 2.89725 18.9546 3.30176 19.3591L3.4541 19.5007C3.81417 19.8073 4.20123 19.9554 4.58203 19.9558C5.01717 19.9563 5.45991 19.7634 5.8623 19.3621L16.416 8.30542L16.4844 8.2478C16.5574 8.19744 16.6446 8.16968 16.7344 8.16968H19.3906L20.9873 6.42651V4.47241L19.3906 6.06812L19.3916 6.06909C19.3091 6.15257 19.196 6.198 19.0801 6.198H17.4043C16.8853 6.19783 16.4631 5.77561 16.4629 5.25659V3.58081C16.4629 3.46439 16.5099 3.35215 16.5918 3.27026L18.1885 1.67358H16.2344L14.4922 3.26929ZM7.60156 6.69507L7.4502 6.86597C7.3668 6.94937 7.27322 7.02171 7.1748 7.08862L9.26465 9.89038L10.4512 8.75757L7.66699 6.59839C7.64486 6.63062 7.62543 6.66447 7.60156 6.69507Z" fill="white" stroke="white" />
              </svg>
              </div>
              <h3 className="text-white font-comfortaa font-bold">Professional Equipment</h3>
            </div>
            <p className="text-white/70 text-base leading-snug">
              Every job gets done cleanly and correctly — no shortcuts.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="rounded-[24px] border border-white pl-[26px] md:pl-[29px] pr-[26px] md:pr-[74px] py-[26px] md:py-[23px] relative overflow-hidden">
            <div className="flex items-start mb-3">
              <div className="w-5 h-5 mr-3 mt-1 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                <path d="M10.8193 1.01025C16.5808 1.01025 21.2559 5.76576 21.2559 11.6177C21.2557 17.4703 16.5807 22.2241 10.8193 22.2241C5.05728 22.224 0.383956 17.4702 0.383789 11.6177C0.383789 5.76587 5.05717 1.01042 10.8193 1.01025ZM10.8193 1.92529C5.55353 1.92545 1.28809 6.25906 1.28809 11.6177C1.28825 16.9761 5.55363 21.3099 10.8193 21.3101C16.0852 21.3101 20.3514 16.9762 20.3516 11.6177C20.3516 6.25896 16.0853 1.92529 10.8193 1.92529ZM14.7061 13.2349C14.7394 13.2397 14.7725 13.2484 14.8037 13.2603H14.8057L14.8848 13.3022C14.9592 13.3508 15.0185 13.4207 15.0547 13.5044H15.0557L15.082 13.5903C15.1003 13.6771 15.0928 13.7681 15.0605 13.8521L15.0615 13.853C14.3799 15.6262 12.6944 16.7964 10.8193 16.7964C9.06128 16.7962 7.47113 15.7678 6.71777 14.1782L6.57812 13.853C6.49004 13.6206 6.60222 13.3565 6.83496 13.2642V13.2632L6.92383 13.2388C7.10255 13.2078 7.28167 13.2893 7.37891 13.4419L7.41992 13.5229V13.5239L7.53223 13.7847C8.13728 15.0611 9.41078 15.8812 10.8193 15.8813C12.3225 15.8813 13.6718 14.9467 14.2197 13.521L14.2471 13.4624C14.3199 13.3317 14.4524 13.2432 14.6045 13.231L14.7061 13.2349ZM7.09863 7.50439C8.21945 7.50464 9.18103 8.32579 9.37598 9.44385L9.38281 9.53369C9.38095 9.62312 9.35302 9.71034 9.30176 9.78467C9.23361 9.88347 9.12871 9.95215 9.00879 9.97314L9.00977 9.97412C8.92059 9.99062 8.82949 9.97827 8.74805 9.94189L8.66992 9.89795C8.57159 9.82783 8.50551 9.72151 8.48438 9.60303V9.60205C8.36522 8.91403 7.78198 8.41943 7.09863 8.41943C6.41635 8.41961 5.83285 8.91488 5.71289 9.60205L5.71191 9.60303C5.66724 9.84829 5.43533 10.015 5.18848 9.97119H5.18652C4.94129 9.92483 4.78073 9.68694 4.82422 9.44092C5.01933 8.32447 5.97762 7.50553 7.09668 7.50439H7.09863ZM14.7461 7.51416C15.7075 7.60226 16.5181 8.29363 16.7705 9.23779L16.8154 9.44385V9.44482L16.8223 9.53369C16.8201 9.62293 16.7916 9.71014 16.7402 9.78467C16.6892 9.85862 16.618 9.91669 16.5352 9.94971L16.4482 9.97412C16.3592 9.98964 16.268 9.97764 16.1865 9.94092L16.1094 9.89697C16.0113 9.82693 15.946 9.72064 15.9248 9.60303V9.60205C15.8049 8.91398 15.2213 8.41956 14.5381 8.41943C13.8556 8.41943 13.2713 8.91473 13.1514 9.60205V9.60303C13.1067 9.84839 12.8739 10.0152 12.627 9.97119H12.626C12.3806 9.92499 12.2202 9.68705 12.2637 9.44092C12.459 8.32375 13.4181 7.50439 14.5381 7.50439L14.7461 7.51416Z" fill="white" stroke="white"/>
              </svg>
              </div>
              <h3 className="text-white font-comfortaa font-bold">Built on Integrity</h3>
            </div>
            <p className="text-white/70 text-base leading-snug">
              Honest work you can count on, from a local business you can depend on.
            </p>
          </div>
        </div>
      </div>
      <div className='mob_oval_sec block md:hidden'></div>
    </section>
  );
};

const About = () => {
  return (
    <>
      <LocationSection />
      <AboutUsSection />
    </>
  );
};

export default About; 