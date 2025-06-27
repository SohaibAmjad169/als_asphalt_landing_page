import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import UTMTracker from './UTMTracker'; 

export const metadata: Metadata = {
  title: "Al's Asphalt - Professional Asphalt Services for Mid-Michigan",
  description:
    'From pothole repair to seal coating, we serve Standish and surrounding Michigan towns with clean, professional work built to last.',
  keywords: [
    'asphalt repair',
    'pothole repair',
    'crack repair',
    'seal coating',
    'Michigan',
    'Standish',
    'line striping',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GTM_ID = 'GTM-55C83NFM';

  return (
    <html lang="en">
      <head>
         {/* Google Tag Manager Head Script */}
         <Script id="google-tag-manager-head" strategy="afterInteractive">
           {`
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
             })(window,document,'script','dataLayer','${GTM_ID}');
           `}
         </Script>
      </head>
      <body className="antialiased">
        {/* Google Tag Manager noscript */}
        <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        
        {/* Rest of body content */}
        <UTMTracker /> 
        {children}

        {/* BugHerd Script */}
        <Script 
          src="https://www.bugherd.com/sidebarv2.js?apikey=xa7ih7oaadfseo4ofhyqwq"
          strategy="lazyOnload"
          async={true}
        />
      </body>
    </html>
  );
}
