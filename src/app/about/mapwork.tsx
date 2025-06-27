import Image from 'next/image';

const LOCATIONS = [
  { name: 'Pinconning', bold: true },
  { name: 'Omer' },
  { name: 'Au Gres' },
  { name: 'Linwood' },
  { name: 'Sterling' },
  { name: 'Twining' },
  { name: 'Linwood' },
];

export default function MapWork() {
  return (
    <section className="bg-[#F7F7F7] py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center map_sec">
        {/* Left: Text */}
        <div className="flex-1 pe-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-2 w-2 rounded-full bg-[#FFEB38]" />
            <span className="text-sm font-inter text-black">Locations We Serve</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-comfortaa font-bold text-black mb-4"
            style={{
              WebkitTextStrokeWidth: '0.22px',
              WebkitTextStrokeColor: '#000'
            }}
          >
            Where We Work
          </h2>
          <p className="mb-8 text-[17px] text-black font-inter max-w-[500px]">
            Based in Standish, MI - we proudly serve nearby towns with reliable asphalt repair, road maintenance, and surface protection services.
          </p>
          <div className="grid grid-cols-2 gap-y-2 gap-x-8 mb-4 max-w-[250px] lg:max-w-[350px]">
            {LOCATIONS.map((loc, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.99905 0.291748C10.5462 0.291748 13.4237 3.23894 13.4237 6.87649C13.4237 9.29762 12.1491 11.4137 10.2505 12.5558L8.70681 14.1946L6.99905 16.0075L5.29128 14.1946L3.74762 12.5558C1.84904 11.4117 0.574417 9.29566 0.574417 6.87649C0.574417 3.23894 3.45186 0.291748 6.99905 0.291748ZM10.1703 13.4749L9.11324 14.5975L6.99905 16.8426L3.82776 13.4749C1.84141 13.915 0.5 14.7559 0.5 15.72C0.5 17.1399 3.40988 18.2917 6.99905 18.2917C10.5882 18.2917 13.5 17.1399 13.5 15.72C13.5 14.7539 12.1567 13.915 10.1703 13.4749ZM6.99905 3.32695C5.08711 3.32695 3.53772 4.91496 3.53772 6.87454C3.53772 8.83412 5.08711 10.4221 6.99905 10.4221C8.91098 10.4221 10.4604 8.83412 10.4604 6.87454C10.4604 4.91496 8.91098 3.32695 6.99905 3.32695Z" fill="black" />
                </svg>

                <span className={loc.bold ? "" : ""}>{loc.name}</span>
              </div>
            ))}
          </div>
          <h5 className="italic text-gray-600 italic pt-4">And beyond more….</h5>
        </div>
        {/* Right: Map */}
        <div className="flex-1 flex justify-center pt-6 md:pt-0 w-full md:w-[auto]">
          <div className="relative w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/mapimg.png" // Replace with your actual map image path
              alt="Service Area Map"
              width={500}
              height={320}
              className="w-full h-auto"
            />
            {/* Example: Pin marker */}
            <div className="absolute left-[55%] top-[35%] -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center">
                <svg width="123" height="123" viewBox="0 0 123 123" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[80px] h-[80px] md:w-[auto] md:h-[auto]">
                  <rect x="0.5" y="0.791748" width="122" height="122" rx="61" fill="#FFEB38" fillOpacity="0.31" />
                  <circle cx="61.5" cy="61.7917" r="32" fill="#FFEB38" fillOpacity="0.54" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M61.4985 47.7917C66.9557 47.7917 71.3826 52.2125 71.3826 57.6689C71.3826 61.3005 69.4216 64.4746 66.5007 66.1878L64.1259 68.6461L61.4985 71.3654L58.8712 68.6461L56.4963 66.1878C53.5754 64.4717 51.6145 61.2976 51.6145 57.6689C51.6145 52.2125 56.0413 47.7917 61.4985 47.7917ZM66.3774 67.5665L64.7511 69.2504L61.4985 72.618L56.6196 67.5665C53.5637 68.2266 51.5 69.488 51.5 70.9342C51.5 73.0639 55.9767 74.7917 61.4985 74.7917C67.0203 74.7917 71.5 73.0639 71.5 70.9342C71.5 69.485 69.4334 68.2266 66.3774 67.5665ZM61.4985 52.3446C58.5571 52.3446 56.1734 54.7266 56.1734 57.6659C56.1734 60.6053 58.5571 62.9873 61.4985 62.9873C64.44 62.9873 66.8236 60.6053 66.8236 57.6659C66.8236 54.7266 64.44 52.3446 61.4985 52.3446Z" fill="black" />
                </svg>

                <span className="bg-white px-3 py-1 rounded-full mt-2 text-black text-sm font-inter shadow">Pinconning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
