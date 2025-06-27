import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqsSections from '@/components/faqs/faqsSection';

export default function Faqs() {
  return (
    <main className="overflow-x-hidden w-full">
      <Header />

      <div className="container mx-auto px-4 py-5 bg-[#FAFAFA]">
        <header className="pb-0 pt-5 md:pt-5 md:py-5">
          <div className="flex flex-col align-middle justify-center mb-0 md:mb-8 pt-5 pb-[32px] md:py-5 mt-5 md:mt-10">
            <div className="mb-[20px] md:mb-0 hero-txt text-center">
              <div className="flex items-center gap-2 mb-[24px] md:mb-4 justify-center">
                <div className="h-2 w-2 rounded-full bg-[#FFEB38] flex-shrink-0"></div>
                <span className="text-sm font-inter text-black font-normal">
                  Any Questions?
                </span>
              </div>
              <h1 className="px-[7%] md:px-0 font-comfortaa text-[16px] md:text-inherit font-normal md:font-[600] leading-tight text-black text-center">
                Frequently Asked Questions
              </h1>
            </div>

            <div className="md:w-[67.5%] self-center hero-btn text-center">
              <p className="text-[rgba(0,0,0,0.8)] mb-6 leading-relaxed font-inter text-center">
                Find answers to your most pressing questions about our services.
              </p>
            </div>
          </div>
        </header>
      </div>

      <FaqsSections />

      <Footer />
    </main>
  );
}
