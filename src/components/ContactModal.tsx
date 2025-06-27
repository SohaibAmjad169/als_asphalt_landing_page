'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    area: '',
    message: '',
    utm: {
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_term: '',
      utm_content: ''
    }
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const serviceSelectRef = useRef<HTMLDivElement>(null);

  const services = [
    'Asphalt Paving',
    'Sealcoating',
    'Pothole Repair',
    'Line Striping',
    'Asphalt Maintenance',
  ];

  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const storedUTM = localStorage.getItem('utm_data');
      if (storedUTM) {
        try {
          const parsedFromStorage = JSON.parse(storedUTM);
          setFormData((prev) => ({
            ...prev,
            utm: { ...prev.utm, ...parsedFromStorage },
          }));
        } catch (e) {
          console.error("Failed to parse UTM data from localStorage:", e);
        }
      }
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isDropdownOpen && dropdownRef.current && modalRef.current && serviceSelectRef.current) {
      const dropdown = dropdownRef.current;
      const modal = modalRef.current;
      const select = serviceSelectRef.current;

      const selectRect = select.getBoundingClientRect();
      const spaceBelow = window.innerHeight - selectRect.bottom;
      const dropdownHeight = Math.min(200, services.length * 48); 

      if (spaceBelow < dropdownHeight) {
        dropdown.style.bottom = '100%';
        dropdown.style.top = 'auto';
        dropdown.style.marginTop = '0';
        dropdown.style.marginBottom = '4px';
      } else {
        dropdown.style.bottom = 'auto';
        dropdown.style.top = '100%';
        dropdown.style.marginTop = '4px';
        dropdown.style.marginBottom = '0';
      }

      const dropdownRect = dropdown.getBoundingClientRect();
      if (dropdownRect.bottom > window.innerHeight) {
        const scrollAmount = dropdownRect.bottom - window.innerHeight + 20;
        modal.scrollTop += scrollAmount;
      } else if (dropdownRect.top < 0) {
        const scrollAmount = dropdownRect.top - 20;
        modal.scrollTop += scrollAmount;
      }
    }
  }, [isDropdownOpen, services.length]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '').substring(0, 10);
      let formatted = '';

      if (cleaned.length > 0) {
        formatted = `(${cleaned.substring(0, 3)}`;
      }
      if (cleaned.length > 3) {
        formatted += `) ${cleaned.substring(3, 6)}`;
      }
      if (cleaned.length > 6) {
        formatted += ` - ${cleaned.substring(6, 10)}`;
      }

      setFormData((prev) => ({
        ...prev,
        [name]: formatted,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const selectService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      service,
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const createdAt = new Date().toISOString();
    const pageUrl = window.location.href;

    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/20635527/2nniqa4/', {
        method: 'POST',
        headers: {},
        body: JSON.stringify({
          ...formData,
          createdAt,
          pageUrl
        }),
      });

      if (response.ok) {
        console.log('Form data sent successfully');
        localStorage.removeItem('utm_data');
        router.push('/thankyou');
        onClose();
      } else {
        console.error('Failed to send data. Status:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: 'rgba(2, 2, 2, 0.8)' }}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-[24px] w-[90%] md:w-[789px] overflow-y-auto scrollbarStyle"
        style={{
          maxHeight: 'calc(100vh - 50px)',
          padding: '34px 45px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-[13px] right-[25px] h-[30px] w-[30px] md:w-[40px] md:h-[40px] flex justify-center bg-[#FFEB38] item-center rounded-full text-black font-bold"
          aria-label="Close modal"
        >
          <span className="md:text-[24px] text:24px font-[300]">×</span>
        </button>

        <div className="flex flex-col gap-[10px] mt-3">
          <h2 className="md:text-[38px] text-[22px] font-bold mb-4 get-pop-txt">Get In Touch With Us</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex-1">
                <label className="block text-[14px] font-[400] mb-2 text-black">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-[#F7F7F7] h-[48px] md:h-[60px] p-4 radius-[10px] text-black"
                  required
                  style={{ border: 'none' }}
                />
              </div>

              <div className="flex-1">
                <label className="block text-[14px] font-[400] mb-2 text-black">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@gmail.com"
                  className="w-full bg-[#F7F7F7] rounded h-[48px] md:h-[60px] p-4 radius-[10px] text-black"
                  required
                  style={{ border: 'none' }}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex-1">
                <label className="block text-[14px] font-[400] mb-2 text-black">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456 - 7890"
                  className="w-full bg-[#F7F7F7] h-[48px] md:h-[60px] p-4 radius-[10px] text-black"
                  required
                  style={{ border: 'none' }}
                  maxLength={16}
                />
              </div>

              <div className="flex-1">
                <label className="block text-[14px] font-[400] mb-2 text-black">
                  Approximate Area (sq, ft)
                </label>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="e.g. 1000"
                  className="w-full bg-[#F7F7F7] rounded h-[48px] md:h-[60px] p-4 radius-[10px] text-black"
                  style={{ border: 'none' }}
                />
              </div>
            </div>

            <div className="mt-2 relative" ref={serviceSelectRef}>
              <label className="block mb-2 text-[14px] font-[400] text-black">
                Which Service Are You Interested in?
              </label>
              <div className="relative">
                <div
                  className="w-full bg-[#F7F7F7] rounded h-[48px] md:h-[60px] p-4 radius-[10px] flex justify-between items-center cursor-pointer text-black"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  style={{ border: 'none' }}
                >
                  <span className="text-black">{formData.service || 'Select Service'}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>

                {isDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute left-0 right-0 bg-white rounded z-10 shadow-md max-h-[210px] overflow-y-auto"
                  >
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="p-4 hover:bg-gray-100 cursor-pointer text-black"
                        onClick={() => selectService(service)}
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-2">
              <label className="block mb-2 text-[14px] font-[400] text-black">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#F7F7F7] h-[70px] md:h-[100px] p-4 radius-[10px] text-black"
                required
                style={{ border: 'none' }}
              ></textarea>
            </div>

            <div className="mt-3">
              <button
                type="submit"
                className="bg-[#FFEB38] text-black font-medium py-2 px-10 w-[187px] h-[51px] rounded-full hover:bg-yellow-300 transition duration-300"
              >
                Get a Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;