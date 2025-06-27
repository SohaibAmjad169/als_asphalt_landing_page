import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <main>
      <Header />

      <section className="section-padding pt-32 bg-gray-100">
        <div className="container mx-auto">
          <SectionTitle
            subtitle="Contact Us"
            title="Get In Touch"
            description="Fill out the form below and we'll get back to you as soon as possible."
          />

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 mt-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="service" className="block text-sm font-medium">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="Pothole Repair">Pothole Repair</option>
                  <option value="Crack Repair">Crack Repair</option>
                  <option value="Seal Coating">Seal Coating</option>
                  <option value="Line Striping">Line Striping</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                ></textarea>
              </div>

              <div className="md:col-span-2 mt-6">
                <Button variant="primary" className="w-full md:w-auto">
                  Submit Request
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6892 9.16531 10.2462 9.38787L7.96026 10.5312C9.06385 13.0755 11.1343 15.1176 13.7047 16.1952L14.8173 13.9325C15.0405 13.4894 15.5561 13.2954 16.0276 13.4524L20.5363 14.9169C20.9443 15.0524 21.22 15.4341 21.22 15.8641V19C21.22 20.1046 20.3246 21 19.22 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-comfortaa font-bold mb-2">Phone</h3>
              <p className="text-gray-700">(989) 555-0123</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-comfortaa font-bold mb-2">Email</h3>
              <p className="text-gray-700">info@alsasphalt.com</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-comfortaa font-bold mb-2">Location</h3>
              <p className="text-gray-700">
                123 Main Street<br />
                Standish, MI 48658
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 