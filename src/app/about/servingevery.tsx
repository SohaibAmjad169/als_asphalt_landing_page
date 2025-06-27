import Image from "next/image";
// import Link from "next/link";

const ServiceCard = ({
    title,
    iconSrc,
    // link,
    width = "md:w-[230px]",
    height = "h-[230px]",
}: {
    title: React.ReactNode;
    iconSrc: string;
    link?: string;
    width?: string;
    height?: string;
}) => {
    return (
        <div
            className={`w-full ${width} ${height} rounded-[24px] p-[14px] lg:p-[24px] flex flex-col items-center justify-center text-center gap-[20px] relative overflow-hidden transition-colors duration-300 bg-[rgba(5,5,5,0.02)] border border-black/10 serving-card`}
        >
            {/* Icon */}
            <div className="w-[80px] h-[80px] flex items-center justify-center">
                <Image
                    src={iconSrc}
                    alt={typeof title === "string" ? title : "Service icon"}
                    width={64}
                    height={64}
                    className="object-contain"
                />
            </div>

            {/* Title */}
            <div className="text-black text-[18px] font-[400] leading-tight">
                {title}
            </div>


            {/* Link overlay */}
            {/* <Link href={link} className="absolute inset-0" /> */}
            <div className="spotlight-about"></div>
        </div>
    );
};

export default function SetsUpAparts() {
    return (
        <main className="mt-[50px] md:mt-[96px] mb-[50px] md:mb-[96px]">
            <div className="container mx-auto flex flex-col items-center gap-8 ">
                <div className="flex flex-col items-center gap-6 services-sec relative">
                    <div className="flex items-center gap-2 mt-10">
                        <div className="h-2 w-2 rounded-full bg-[#FFEB38] flex-shrink-0"></div>
                        <span className="font-inter text-black">Serving Every Corner</span>
                    </div>

                    {/* Main Title */}
                    <h2 className="font-comfortaa font-bold text-center tracking-tight leading-[120%] text-black hidden md:block">
                        What Sets Us Apart
                    </h2>
                    <h2 className="font-comfortaa font-bold text-center tracking-tight leading-[120%] text-black block md:hidden">
                        What Sets Us Apart
                    </h2>

                    <div className="md:w-[55%] self-center hero-btn text-center">
                        <p className="text-[rgba(0,0,0,0.8)] mb-6 leading-relaxed font-inter text-center">
                            We work with car dealerships, fast food chains, churches, mom-and-pop shops, and homeowners - anyone who wants long-lasting results and a team they can trust.                             </p>
                    </div>
                </div>

                <div className="flex flex-col items-start p-0 gap-[30px] w-full mt-[-30px]">
                    <div className="flex flex-col md:flex-row items-start p-0 gap-[20px] w-full justify-center titles">
                        <ServiceCard
                            title={
                                <>
                                    Commercial-grade
                                    <br />
                                    equipment
                                </>
                            }
                            iconSrc="/images/serving1.png"
                            link="/services/pothole-repair"
                            width="md:w-[236px]"
                            height="h-[230px]"
                        />

                        <ServiceCard
                            title={
                                <>
                                    Premium Materials,
                                    <br />
                                    no diluted sealers
                                </>
                            }
                            iconSrc="/images/serving2.png"
                            link="/services/seal-coating"
                            width="md:w-[236px]"
                            height="h-[230px]"
                        />
                        <ServiceCard
                            title={
                                <>
                                    Professional,
                                    <br />
                                    respectful crew
                                </>
                            }
                            iconSrc="/images/serving3.png"
                            link="/services/crack-repair"
                            width="md:w-[236px]"
                            height="h-[230px]"
                        />

                        <ServiceCard
                            title={
                                <>
                                    Fully insured for <br />
                                    peace of mind
                                </>
                            }
                            iconSrc="/images/serving4.png"
                            link="/services/line-striping"
                            width="md:w-[236px]"
                            height="h-[230px]"
                        />

                        <ServiceCard
                            title={
                                <>
                                    Clean, safe job
                                    <br />
                                    site - always
                                </>
                            }
                            iconSrc="/images/serving5.png"
                            link="/services/line-striping"
                            width="md:w-[236px]"
                            height="h-[230px]"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
