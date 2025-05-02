import React from 'react';
import { MapPin } from 'lucide-react';

interface MapSectionProps {
  title?: string;
  venueName?: string;
  openTime?: string;
  mapLink?: string;
}

export function MapSection({
    title = "Venue", venueName = "Sri Baduga Museum", openTime = "12.00 WIB", mapLink = "https://maps.google.com/?q=Sri+Baduga+Museum"
}) {
    return (
        <section id="venue" className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-white text-4xl md:text-5xl font-bold block">{title}</h2><br/>
                    <p className="text-white text-2xl md:text-3xl">
                        Get ready to experience the Main Event TEDxTelkom University at
                    </p><br/>
                    <p className="text-white text-4xl md:text-5xl font-bold block">{venueName}</p><br/>
                    <p className="text-white text-2xl md:text-3xl">Open Gate | {openTime}</p>
                </div>

                <div className="container mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mt-8">
    <div className="rounded-lg w-full h-auto overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6056582749943!2d107.60091337438318!3d-6.937643493062329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e899f41b0e7d%3A0xc6af38b146fd23ac!2sSri%20Baduga%20Museum!5e0!3m2!1sen!2sid!4v1746176211035!5m2!1sen!2sid" 
        width="100%" 
        height="600" 
        className="border-0"
        style={{ minHeight: "300px" }} 
        loading="lazy"
        title="Sri Baduga Museum Map"
        allowFullScreen>
      </iframe>
    </div>
    <div className="flex items-center justify-center p-4">
      <img 
        src="/map/map-1.png" 
        alt="TEDx Stage" 
        className="max-w-full h-auto object-contain rounded-lg shadow-md"
      />
    </div>
  </div>
</div>
            </div>
        </section>
    );
}

export default MapSection;