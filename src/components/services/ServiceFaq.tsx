"use client";
import { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <div className="flex flex-col gap-4 pr-[30.57px]">
      <div
        className="flex items-center justify-between gap-4 cursor-pointer"
        onClick={onClick}
      >
        <h3 className="text-[#000] font-comfortaa font-bold leading-9">
          {question}
        </h3>
        <div
          className={`w-[34.57px] h-[34.57px] rounded-full flex items-center justify-center ${
            isOpen ? 'bg-[#FFEB38]' : 'bg-black'
          }`}
        >
          {isOpen ? (
            <span className="text-black font-bold text-xl">-</span>
          ) : (
            <span className="text-white font-bold text-xl">+</span>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="text-[rgba(0,0,0,0.83)] text-base font-inter font-normal leading-[27.2px]">
          {answer}
        </div>
      )}
    </div>
  );
};

const ServiceFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a range of asphalt maintenance services including crack repair, seal coating, pothole patching, and line striping. Our team is equipped with professional-grade tools to ensure high-quality results. Whether for residential or commercial properties, we have you covered.",
    },
    {
      question: "What towns do you serve?",
      answer:
        "We serve Standish and the surrounding Mid-Michigan area, including Pinconning, Omer, Au Gres, and Saginaw. If you're unsure whether we service your area, please contact us directly.",
    },
    {
      question: "Do you offer warranties?",
      answer:
        "Yes, we stand behind our work with warranties that vary by service type. Our seal coating comes with a 1-year warranty, while most repairs are covered for up to 6 months. We'll discuss specific warranty information during your consultation.",
    },
    {
      question: "How long does sealing last?",
      answer:
        "Typically, a professional seal coating application lasts 2-3 years depending on traffic volume, weather conditions, and initial pavement condition. We recommend reapplication every 2-3 years for optimal protection.",
    },
    {
      question: "Can I get a free quote?",
      answer:
        "Absolutely! We offer free, no-obligation quotes for all our services. Simply contact us through our website, email, or phone, and we'll schedule a time to assess your project and provide a detailed estimate.",
    },
    {
      question: "Do you offer evening or weekend work?",
      answer:
        "Yes, we understand that some projects require flexibility. We offer weekend and select evening appointments to accommodate your schedule and minimize disruption to your business or home life.",
    },
  ];

  return (
    <section className="w-full py-10 bg-white freq_sec">
      <div className="container w-[98%] mx-auto px-0 md:px-4">
        <div className="w-full pt-0 pb-1 md:py-12 flex flex-col items-start gap-10">
          {/* Section Header */}
          <div className="flex flex-col justify-start items-center gap-3 w-full">
            <div className="flex items-center gap-1.5">
              <div className="w-[10px] h-[10px] bg-[#FFEB38] rounded-full"></div>
              <div className="text-center text-black text-sm font-inter font-medium leading-[23.8px]">
                Any Questions?
              </div>
            </div>

            <h2 className="text-center text-black font-comfortaa font-bold">
              Frequently Asked Questions
            </h2>

            <p className="text-center text-[rgba(0,0,0,0.83)] text-base font-inter font-normal leading-[27.2px] hidden md:block">
              Find answers to your most pressing questions about our services.
            </p>
            <p className="text-center text-[rgba(0,0,0,0.83)] text-base font-inter font-normal leading-[27.2px] block md:hidden">
              Find answers to common questions.
            </p>
          </div>

          {/* Layout: Content on the right side */}
          <div className="w-full flex justify-end faq_content">
            {/* FAQ Items Container */}
            <div className="p-0 md:p-12 rounded-[29.63px] flex flex-col gap-8 w-full">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={
                    index !== faqItems.length - 1
                      ? 'border-b border-gray-200 pb-8'
                      : ''
                  }
                >
                  <FaqItem
                    question={item.question}
                    answer={item.answer}
                    isOpen={index === openIndex}
                    onClick={() =>
                      setOpenIndex(index === openIndex ? -1 : index)
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFaq;
