"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsAndCondition = () => {
    return (
        <main className="overflow-x-hidden w-full">
            <Header />

            <div className="container mx-auto px-4 py-5 black-color">
                <header className="pb-0 pt-18 md:pt-5 md:py-5">
                    <div className="flex flex-col align-middle justify-center mb-0 md:mb-8  pb-[32px] md:py-5 mt-5 md:mt-10">
                        <div className="mb-[20px] md:mb-0 hero-txt text-center">
                            <h1 className="px-[7%] md:px-0 font-comfortaa text-[14px] md:text-inherit font-normal md:font-[600] leading-tight text-black text-center hidden md:block">
                                Terms of Service
                            </h1>
                            <h2 className="px-[7%] md:px-0 font-comfortaa text-[24px] md:text-inherit font-normal md:font-[600] leading-tight text-black text-center block  md:hidden">
                                Terms of Service
                            </h2>
                        </div>

                        <div className="md:w-[85.5%] w-[95%] self-center hero-btn about-txt md:pt-6">
                            <p className="text-[rgba(0,0,0,0.8)] mb-6 leading-relaxed font-inter text-[17px]">
                                Welcome to <a href="https://alsasphalt.co/" className="text-blue-600 hover:underline">Als Asphalt</a> (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website at <a href="https://alsasphalt.co/" className="text-blue-600 hover:underline">https://alsasphalt.co/</a> (the &quot;Site&quot;). By using the Site, you agree to these Terms. If you do not agree, discontinue use immediately.
                            </p>
                            <p className="text-[rgba(0,0,0,0.8)] mb-6 leading-relaxed font-inter text-[17px]">
                                The Site is intended for users aged 18 or older or those with parental consent. You agree to use the Site for lawful purposes and in compliance with all applicable laws. Prohibited activities include unauthorized access, disrupting the Site, or violating intellectual property rights.
                            </p>
                            <p className="text-[rgba(0,0,0,0.8)] mb-6 leading-relaxed font-inter text-[17px]">
                                The content on the Site, including text, images, and software, is owned by <a href="https://alsasphalt.co/" className="text-blue-600 hover:underline">Als Asphalt</a> or licensed to us. You may not copy, distribute, or modify content without prior written consent. Unauthorized use of content may result in legal action.
                            </p>
                            <p className="text-[rgba(0,0,0,0.8)] mb-6 leading-relaxed font-inter text-[17px]">
                                The Site is provided &quot;as is&quot; without warranties of any kind. <a href="https://alsasphalt.co/" className="text-blue-600 hover:underline">Als Asphalt</a> disclaims all liability for damages arising from your use of the Site, including loss of data, revenue, or opportunities.
                            </p>
                            <p className="text-[rgba(0,0,0,0.8)] mb-6 leading-relaxed font-inter text-[17px]">
                                We reserve the right to update these Terms at any time. Changes will take effect upon posting, and the &quot;Last Updated&quot; date will reflect modifications. Continued use of the Site constitutes acceptance of revised Terms.
                            </p>
                        </div>
                    </div>
                </header>
            </div>

            <Footer />
        </main>
    );
};

export default TermsAndCondition;