"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic';

if (typeof window !== 'undefined' && typeof window.TouchEvent === 'undefined') {
    window.TouchEvent = class {
      constructor(type: string, eventInitDict?: TouchEventInit) {
      }
    } as any;
}

const ReactCompareImage = dynamic(() => import('react-compare-image'), {
  ssr: false,
});

const TABS = [
  { label: 'All', value: 'all' },
  { label: 'Crack Repair', value: 'crack' },
  { label: 'Seal Coating', value: 'seal' },
  { label: 'Pothole Repair', value: 'pothole' },
  { label: 'Line Striping', value: 'line' },
];

const GALLERY = [
  {
    src: '/images/galery-img2.png',
    alt: 'Driveway Seal Coating',
    label: 'Driveway Seal Coating',
    tags: ['crack', 'seal'],
    isComparison: false,
  },
  {
    src: '/images/galery-img1.png',
    alt: 'Pothole Repair, Omer ',
    label: 'Pothole Repair, Omer ',
    tags: ['seal'],
    isComparison: false,
  },
  {
    before: '/images/galery-img2.png',
    after: '/images/galery-img1.png',
    alt: 'Church Parking Lot, Au Gres ',
    label: 'Church Parking Lot, Au Gres ',
    tags: ['crack', 'seal'],
    isComparison: true,
  },
  {
    src: '/images/galery-img2.png',
    alt: 'Driveway Seal Coating',
    label: 'Driveway Seal Coating',
    tags: ['crack', 'seal'],
    isComparison: false,
  },
  {
    before: '/images/galery-img2.png',
    after: '/images/galery-img1.png',
    alt: 'Pothole Repair, Omer ',
    label: 'Pothole Repair, Omer ',
    tags: ['pothole'],
    isComparison: true,
  },
  {
    src: '/images/galery-img1.png',
    alt: 'Church Parking Lot, Au Gres',
    label: 'Church Parking Lot, Au Gres',
    tags: ['crack', 'seal'],
    isComparison: false,
  },
  {
    before: '/images/galery-img2.png',
    after: '/images/galery-img1.png',
    alt: 'Driveway Seal Coating',
    label: 'Driveway Seal Coating',
    tags: ['pothole, line'],
    isComparison: true,
  },
  {
    src: '/images/galery-img1.png',
    alt: 'Pothole Repair, Omer ',
    label: 'Pothole Repair, Omer ',
    tags: ['crack', 'seal'],
    isComparison: false,
  },
  {
    src: '/images/galery-img2.png',
    alt: 'Church Parking Lot, Au Gres',
    label: 'Church Parking Lot, Au Gres',
    tags: ['crack', 'seal'],
    isComparison: false,
  }
  // ...add more images with appropriate tags
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState('all');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const filteredGallery =
    activeTab === 'all'
      ? GALLERY
      : GALLERY.filter((item) => item.tags.includes(activeTab));

  return (
    <section className="py-18">
      <div className="container mx-auto">
        {/* Tabs */}
        <div className="flex gap-6 border-b mb-8 justify-start gallery-tabs">
          <div className="relative md:hidden">
            {/* Dropdown Button */}
            <button
              className="flex items-center gap-2 py-2 px-4 bg-white text-gray-700 justify-start"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <span>Category Filter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-md rounded mt-2 z-10">
                <div className="flex flex-col">
                  {TABS.map((tab) => (
                    <button
                      key={tab.value}
                      className={`px-4 py-2 text-left w-full hover:bg-gray-100 ${
                        activeTab === tab.value ? 'bg-gray-200' : ''
                      }`}
                      onClick={() => {
                        setActiveTab(tab.value);
                        setDropdownOpen(false); // Close dropdown after selecting
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Tab Buttons for Desktop */}
          <div className="hidden md:flex gap-6">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                className={`pb-6 px-6 border-b-2 transition-all ${
                  activeTab === tab.value
                    ? 'border-black font-bold'
                    : 'border-transparent text-gray-500'
                }`}
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6">
          {filteredGallery.map((item, idx) => (
            <div key={idx} className="rounded-xl flex flex-col items-start">
              {item.isComparison ? (
                <div className="w-full rounded-lg overflow-hidden mb-2">
                  <ReactCompareImage
                    leftImage={item.before!}
                    rightImage={item.after!}
                    leftImageLabel="Before"
                    rightImageLabel="After"
                    sliderLineWidth={2}
                    sliderLineColor="#fff"
                  />
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover rounded-lg mb-2"
                />
              )}
              <span className="text-black text-left">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
