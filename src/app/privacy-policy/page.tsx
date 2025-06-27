"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
    return (
        <main className="overflow-x-hidden w-full">
            <Header />

            <div className="container mx-auto px-4 py-5 black-color">
                <header className="pb-0 pt-18 md:pt-5 md:py-5">
                    <div className="flex flex-col align-middle justify-center mb-0 md:mb-8 pt-5 pb-[32px] md:py-5 mt-5 md:mt-10">
                        <div className="mb-[20px] md:mb-0 hero-txt text-center">
                            <h1 className="px-[7%] md:px-0 font-comfortaa text-[14px] md:text-inherit font-normal md:font-[600] leading-tight text-black text-center hidden md:block">
                                Privacy Policy
                            </h1>
                            <h2 className="px-[7%] md:px-0 font-comfortaa text-[24px] md:text-inherit font-normal md:font-[600] leading-tight text-black text-center block  md:hidden">
                                Privacy Policy
                            </h2>
                        </div>

                        <div className="md:w-[85.5%] w-[95%] self-center hero-btn about-txt md:pt-6">
                            <p className="text-[rgba(0,0,0,0.8)] mb-6 leading-relaxed font-inter text-[17px]">
                                Your privacy is important to us at <a href="https://alsasphalt.co/" className="text-blue-600 hover:underline">Als Asphalt</a> (&quot;Company,&rdquo; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit <a href="https://alsasphalt.co/" className="text-blue-600 hover:underline">https://alsasphalt.co/</a> (the &quot;Site&quot;). By accessing or using the Site, you agree to the terms in this Privacy Policy. If you do not agree, please discontinue use of the Site.
                            </p>
                            <p className="text-[rgba(0,0,0,0.8)] mb-6 leading-relaxed font-inter text-[17px]">
                                We collect personal information that you provide directly to us, such as your name, email address, phone number, and mailing address, when you interact with forms, place orders, or contact us. Additionally, our systems automatically collect non-personal information, including your IP address, browser type, operating system, and browsing behavior. This data helps us analyze usage trends and improve services.
                            </p>
                            <p className="text-[rgba(0,0,0,0.8)] mb-6 leading-relaxed font-inter text-[17px]">
                                We use collected data to operate and enhance the Site, process transactions, provide customer support, and comply with legal obligations. The data may be shared with trusted third-party providers for hosting, analytics, and marketing, but we do not sell or rent personal information.
                            </p>
                            <p className="text-[rgba(0,0,0,0.8)] mb-6 leading-relaxed font-inter text-[17px]">
                                We implement robust security measures to protect your information. However, no system is entirely secure, and we cannot guarantee absolute security.
                            </p>
                            <p className="text-[rgba(0,0,0,0.8)] mb-6 leading-relaxed font-inter text-[17px]">
                                This Privacy Policy may be updated periodically.
                            </p>
                        </div>
                    </div>
                </header>
            </div>

            <Footer />
        </main>
    );
};

export default PrivacyPolicy;