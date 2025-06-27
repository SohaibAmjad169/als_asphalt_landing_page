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

const FaqsSections = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: "What services does Al’s Asphalt provide?",
      answer:
        "We handle crack repair, seal coating, line striping and pothole repair using premium materials and professional equipment. Later this year, we’ll add infrared asphalt restoration for like-new results at lower cost.",
    },
    {
      question: "What makes Al’s Asphalt different?",
      answer:
        "We use top-of-the-line sealers, keep our equipment spotless, and always leave your site cleaner than we found it. If a repair won’t hold up, we’ll tell you up front—and stand behind our work if any issue is our fault.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes. We carry full liability insurance, and all line striping meets Michigan state regulations. Safety and compliance are non-negotiable.",
    },
    {
      question: "Which areas do you serve?",
      answer:
        "Based in Standish, MI, we cover residential driveways and commercial properties throughout Standish and nearby communities.",
    },
    {
      question: "How should I prepare before you arrive?",
      answer:
        "Clear vehicles and debris, pause any sprinklers, and mark hidden obstacles or utilities. We’ll handle everything else.",
    },
    {
      question: "Do you guarantee your workmanship?",
      answer:
        "Absolutely! We offer free, no-obligation quotes for all our services. Simply contact us through our website, email, or phone, and we'll schedule a time to assess your project and provide a detailed estimate.",
    },
    {
      question: "How long before I can use my driveway or lot again?",
      answer:
        "Yes. If we cause a defect, we’ll return at no cost to fix it. (Damage from sprinklers or extreme weather isn’t covered.)",
    },
  ];

  return (
    <section className="w-full py-10 bg-white freq_sec">
      <div className="container w-[98%] mx-auto px-0 md:px-4">
        <div className="w-full pt-0 pb-1 md:py-12 flex flex-col items-start gap-10">
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

export default FaqsSections
