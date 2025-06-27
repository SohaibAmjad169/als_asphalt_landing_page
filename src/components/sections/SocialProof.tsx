import Image from 'next/image';

const SocialProof = () => {
  return (
    <section className="p-[60px] bg-[#05050505] md:block hidden rounded-bl-[50px] rounded-br-[50px] social-sec">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-14">
          {/* Google Rating */}
          <Image 
            src="/images/Google.png" 
            alt="Google Rating" 
            width={260}
            height={60}
            className="w-[200px] h-auto"
          />
          
          {/* Trustpilot */}
          <Image 
            src="/images/Trustpilot.png" 
            alt="Trustpilot Rating" 
            width={260}
            height={60}
            className="w-a200px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default SocialProof; 