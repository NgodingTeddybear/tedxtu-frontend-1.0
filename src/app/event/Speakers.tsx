'use client';
import React, { useState } from 'react';

// Example usage component to show how to use with event images
const SpeakerShowcase = () => {
  const speakers = [
    {
      number: 1,
      description: "Mr. Arvin An inspirational student of Telkom University is here to understand how we deal with FOMO, help us grow, and make us realize something. The ambience is relaxed but the material can make us feel called and focused on becoming someone who develops, makes an impact, and is able to spark the spirit of the dreamer.",
      eventImageSrc: '/pembicara/arvin.jpg' // Replace with actual image path
    },
    {
      number: 2,
      description: "Mr. Dion, an inspirational illustrator who built the illustration class. Bringing the experience of the story told at the TEDxTelkom University Main Event. Present to dive in and lead us into another version of ourselves. What if we have another character? Which version do we choose to appear at the beginning, then which character comes to help us when we are angry? And other emotions. A warm read with illustrations that spark our imagination.",
      eventImageSrc: "/pembicara/dion.jpg", // Replace with actual image path
      isReversed: true
    },
    {
      number: 3,
      description: "Ms. Tanya is not just a young businesswoman, but she lives to know the direction of her business journey. Being a Telkom University student with a passion for business made her discover things that could change her life. Starting from knowing business risks, making a structured reference and goal in building a sustainable business, to how she calculates it all.",
      eventImageSrc: "/pembicara/tanya.jpg", // Replace with actual image path
    },
    {
      number: 4,
      description: "Recognized as one of the best psychologists in Bandung by People's Choice, Ms. Kori brings a perspective on how we process and develop through our imperfections. How do we unleash our potential from discomfort? Knowing and understanding ourselves to dare to be ourselves and utilize imperfections as perfection.",
      eventImageSrc: "/pembicara/kori.jpg", // Replace with actual image path
      isReversed: true
    },
    {
      number: 5,
      description: "Mr. Gamma an Informatics lecturer at Telkom university as well as an AI researcher who has extraordinary technical experience in his field. The topics discussed are very relevant to our lives today. Motorcycle club? Klitih? And Artificial Intelligence. Mr. Gamma discussed how this AI can be utilized by us as a society to carry out active collaboration in making solutions to the problem of klitih or this dangerous motorcycle gang so that the case can be mitigated to be tracked with the help of AI.",
      eventImageSrc: "/pembicara/gama.jpg" // Replace with actual image path
    }
  ];

interface SpeakerCardProps {
  number: number;
  description: string;
  isReversed?: boolean;
  eventImageSrc?: string; // URL to the speaker event image
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ 
  number, 
  description, 
  isReversed = false,
  eventImageSrc 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`flex flex-col lg:flex-row items-center gap-8 ${isReversed ? 'lg:flex-row-reverse' : ''} group cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Speaker Image Card - Now uses event image as background */}
      <div className="flex-shrink-0 relative">
        <div 
          className={`w-48 h-48 rounded-3xl flex items-center justify-center transform transition-all duration-500 ease-out shadow-2xl
            ${isHovered ? 'rotate-6 scale-110 shadow-red-500/30' : 'rotate-3'} 
            hover:shadow-red-500/40 relative overflow-hidden bg-cover bg-center`}
          style={{
            backgroundImage: eventImageSrc ? `url(${eventImageSrc})` : 'linear-gradient(135deg, #e62b1e, #ff3b2f, #ff6b5a)'
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300"></div>
          
          {/* Enhanced overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br from-[#e62b1e]/60 via-[#ff3b2f]/40 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
          
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-white/30 rounded-full transition-all duration-1000 ${isHovered ? 'animate-ping' : ''}`}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + i * 12}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* TEDx-style red accent at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#e62b1e] to-[#ff3b2f]"></div>
        </div>
        
        {/* Glowing ring effect */}
        <div className={`absolute inset-0 rounded-3xl border-2 border-red-400/50 transition-all duration-500 ${isHovered ? 'scale-125 opacity-100' : 'scale-100 opacity-0'}`}></div>
      </div>

      {/* Description Card */}
      <div className="flex-1 relative group-hover:translate-y-[-4px] transition-all duration-500">
        <div className="p-8 rounded-2xl shadow-2xl backdrop-blur-sm relative overflow-hidden min-h-[140px] flex items-center">
          {/* Animated border effect */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[#e62b1e]/20 via-transparent to-[#ff3b2f]/20 opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`}></div>
          
          {/* Background shimmer effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ${isHovered ? 'translate-x-full' : '-translate-x-full'}`}></div>
          
          <div className="relative z-10 w-full">
            <p className="font-raleway text-white-200 leading-relaxed text-lg font-medium tracking-wide text-justify">
              {description}
            </p>
            
            {/* Animated accent line */}
            <div className={`mt-4 h-1 bg-gradient-to-r from-[#e62b1e] to-[#ff3b2f] rounded-full transition-all duration-700 ${isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
          </div>
        </div>
        
        {/* Outer glow effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 blur-xl transition-opacity duration-500 -z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(230, 43, 30, 0.3); }
          50% { box-shadow: 0 0 40px rgba(230, 43, 30, 0.6); }
        }
        
        .group:hover .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-white text-center mb-16">Featured Speakers</h1>
        {speakers.map((speaker, index) => (
          <SpeakerCard
            key={index}
            number={speaker.number}
            description={speaker.description}
            isReversed={speaker.isReversed}
            eventImageSrc={speaker.eventImageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default SpeakerShowcase;