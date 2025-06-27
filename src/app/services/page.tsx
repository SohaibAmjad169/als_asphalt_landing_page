import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

type ServiceInfo = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  image: string;
};

const services: ServiceInfo[] = [
  {
    id: 'pothole-repair',
    title: 'Pothole Repair',
    description: 'Fast, long-lasting solutions for damaged asphalt surfaces. We repair potholes quickly to prevent further damage and safety hazards.',
    features: [
      'Quick response time',
      'Weather-resistant materials',
      'Thorough cleaning and preparation',
      'Complete compaction and finishing',
      'Commercial and residential solutions'
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.5 9L18 7.5M9 18L7.5 16.5M19.5 16.5L18 18M9 7.5L7.5 9M12 21V18M12 6V3M21 12H18M6 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    image: '/images/project1.jpg'
  },
  {
    id: 'crack-repair',
    title: 'Crack Repair',
    description: 'Prevent water damage and extend asphalt life with our professional crack sealing services. We address small issues before they become major problems.',
    features: [
      'High-quality crack sealant',
      'Thorough cleaning before application',
      'Hot pour or cold pour solutions',
      'Protect against water intrusion',
      'Extends pavement life'
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20L20 4M4 4L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    image: '/images/project2.jpg'
  },
  {
    id: 'seal-coating',
    title: 'Seal Coating',
    description: 'Protect your asphalt investment with our high-quality seal coating services. Enhance appearance while preventing damage from UV rays, oil, and water.',
    features: [
      'Coal tar or asphalt-based sealants',
      'Complete surface cleaning',
      'Uniform application',
      'Extends asphalt life by 5-7 years',
      'Improves property appearance'
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12H3M12 3V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    image: '/images/about.jpg'
  },
  {
    id: 'line-striping',
    title: 'Line Striping',
    description: 'Fresh, visible parking lot striping for better organization and ADA compliance. Improve safety and appearance with our professional line painting.',
    features: [
      'ADA-compliant marking',
      'Clear navigation markings',
      'Durable traffic paint',
      'Fire lane designation',
      'Customized layouts'
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6H21M7 12H17M3 18H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    image: '/images/project3.jpg'
  }
];

export default function ServicesPage() {
  return (
    <main>
      <Header />

      <section className="pt-32 pb-16 bg-gray-100">
        <div className="container mx-auto">
          <SectionTitle
            subtitle="Our Services"
            title="Comprehensive Asphalt Maintenance"
            description="Professional solutions for all your asphalt needs in Mid-Michigan"
          />

          <div className="mt-16 space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="relative h-80 w-full rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-comfortaa font-bold">{service.title}</h2>
                  </div>

                  <p className="text-gray-800 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    <h3 className="font-semibold text-lg">What&apos;s included:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-primary mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/services/${service.id}`} className="inline-flex items-center text-primary font-semibold hover:underline">
                    Learn more about {service.title}
                    <svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-comfortaa font-bold mb-6">
              Ready to fix your asphalt issues?
            </h2>
            
            <p className="text-gray-800 mb-8">
              Contact Al&apos;s Asphalt today for a free assessment and quote.
            </p>
            
            <Button href="/contact" variant="primary" className="text-lg">
              Request a Free Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 