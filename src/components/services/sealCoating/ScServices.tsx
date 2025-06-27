"use client";

import Image from 'next/image';
import { useState } from 'react';
import Button from '../../ui/Button';

interface IndustryItemProps {
    title: string;
    isActive?: boolean;
    onClick: () => void;
    description: string;
}

const IndustryItem = ({
    title,
    isActive = false,
    onClick,
    description
}: IndustryItemProps) => {
    return (
        <div className="w-full">
            <button
                className="flex items-center justify-between w-full py-2 group groups-sec"
                onClick={onClick}
            >
                <h3 className="font-medium text-2xl text-left text-black" style={{ fontFamily: 'Inter', fontWeight: 500 }}>{title}</h3>

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

interface LocationSectionProps {
    openModal: () => void;
}

const LocationSection = ({openModal}: LocationSectionProps) => {
    const [activeItem, setActiveItem] = useState<string>("Shields Against UV & Weather");

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
                            <span>Benefits of</span>
                            <span className="inline-flex items-center mx-1">
                                <div
                                    className="rounded-full bg-primary flex items-center justify-center mx-1 w-[45] lg:w-[59] h-[45] lg:h-[59]"
                                >
                                    <Image
                                        src="/images/road_icon.png"
                                        alt="Business Icon"
                                        width={59}
                                        height={59}
                                        quality={100}
                                        priority={true}
                                    />
                                </div>
                            </span>
                            <span>our Road &amp;</span>
                            <div className='flex items-center'>
                                <span className="inline-flex items-center me-1">
                                    <div
                                        className="rounded-full bg-primary flex items-center justify-center me-1 w-[45] lg:w-[59] h-[45] lg:h-[59]"
                                    >
                                        <Image
                                            src="/images/seal_coating.png"
                                            alt="People Icon"
                                            width={59}
                                            height={59}
                                            quality={100}
                                            priority={true}
                                        />
                                    </div>
                                </span>
                                <span>Seal Coating Services </span>
                            </div>
                        </h2>

                        <h2 className="font-comfortaa font-bold leading-tight mb-0 text-black flex flex-wrap items-center md:hidden">
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

                        <p className="text-black/80 md:w-[85%] mt-5 pl-0 pb-2 text-base leading-relaxed group-des" style={{ fontFamily: 'Inter', lineHeight: '1.7em', color: 'rgba(0, 0, 0, 0.83)' }}>
                        Protect your pavement and enhance appearance with expert-applied, commercial-grade seal coating. Our service reduces maintenance needs, prevents costly damage, and restores that like-new look.
                        </p>

                        <div className="grid md:flex flex-wrap justify-start mt-5 w-full gap-2">
                                <Button
                                onClick={openModal}
                                    scrollTo="contact"
                                    variant="primary"
                                    className="bg-[#FFEB38] text-black rounded-full w-full md:w-[187px] py-[14px] font-medium hover:bg-yellow-300 text-center my-2 md:my-0"
                                >
                                    Get a Quote
                                </Button>
                            </div>
                    </div>

                    {/* Right column with industries list */}
                    <div className="w-full md:w-[45%] mt-[-30px] md:mt-[0px]">
                        <div className="space-y-0">
                            <IndustryItem
                                title="Shields Against UV & Weather"
                                isActive={activeItem === "Shields Against UV & Weather"}
                                onClick={() => toggleItem("Shields Against UV & Weather")}
                                description="Stops fading, cracking, and drying caused by sun exposure and seasonal extremes."
                            />

                            <div className="border-t border-[rgba(13,36,64,0.16)] pt-4 mt-4">
                                <IndustryItem
                                    title="Enhances Curb Appeal & Prolonged Life"
                                    isActive={activeItem === "Enhances Curb Appeal & Prolonged Life"}
                                    onClick={() => toggleItem("Enhances Curb Appeal & Prolonged Life")}
                                    description="Dealerships rely on spotless lots to showcase their inventory. Our asphalt repair and sealing services keep your lots looking professional, safe, and ready to impress every customer that pulls in."
                                />
                            </div>

                            <div className="border-t border-[rgba(13,36,64,0.16)] pt-4 mt-4">
                                <IndustryItem
                                    title="Prevents Oil & Fluid Stains"
                                    isActive={activeItem === "Prevents Oil & Fluid Stains"}
                                    onClick={() => toggleItem("Prevents Oil & Fluid Stains")}
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


interface ScrServicesProps {
    openModal: () => void;
}

const ScrServices = ({openModal}: ScrServicesProps) => {
    return (
        <>
            <LocationSection openModal={openModal}/>
        </>
    );
};

export default ScrServices; 