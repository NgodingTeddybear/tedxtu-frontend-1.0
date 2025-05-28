import React from 'react';
import { Play } from 'lucide-react';
export function EventSection(): React.JSX.Element {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>
                <video
                    className="w-full h-full object-cover opacity-50"
                    autoPlay
                    muted
                    loop
                    playsInline
                    // poster="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg"
                >
                    <source
                        src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
                        type="video/mp4" />
                </video>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto py-12 px-4 sm:px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold py-3 px-3 text-white mb-6 animate-fadeIn">
                    Main Event TEDxTelkomUniversity 2025
                </h1>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                    Join us for an extraordinary journey of ideas worth spreading
                </p>
                <button
                    className="group inline-flex items-center gap-2 bg-[#e62b1e] hover:bg-[#ff3b2f] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 animate-fadeIn"
                    onClick={() => alert('Video playback would start here')}
                    style={{ animationDelay: '0.4s' }}
                >
                    {/* <Play size={24} className="group-hover:scale-110 transition-transform" /> */}
                    <span>Watch Teaser</span>
                </button>
            </div>
        </div>
    );
}

export default EventSection;
