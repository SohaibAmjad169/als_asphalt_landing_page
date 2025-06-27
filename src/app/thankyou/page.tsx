"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';

export default function ThankYou() {
    return (
        <main className="overflow-x-hidden w-full flex flex-col min-h-screen bg-white text-black" style={{ WebkitTextStroke: '0.12px' }}>
            <Header />

            <section className="flex-1 flex items-center justify-center py-20 px-6 text-center">
                <div className="max-w-xl mx-auto">
                    <CheckCircle className="mx-auto text-[#FFEB38] w-16 h-16 mb-6" />
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Thank You!</h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-6">
                        Your message has been successfully submitted. We’ll be in touch soon!
                    </p>
                    <Link href="/" passHref>
                        <Button
                            scrollTo="contact"
                            variant="primary"
                            className="w-full md:w-auto bg-[#FFEB38] text-black rounded-full py-[14px] font-medium hover:bg-yellow-300 text-center  md:my-0"
                        >
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
