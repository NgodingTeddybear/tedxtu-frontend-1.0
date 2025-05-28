import React from 'react';
import SpeakerCard from './SpeakerCard';

const speakerDescriptions = [
  "Pioneering the future of sustainable technology with groundbreaking innovations in renewable energy and eco-friendly solutions.",
  "Transforming education through digital innovation, making quality learning accessible to communities worldwide.",
  "Revolutionizing healthcare with AI-driven diagnostics and personalized medicine approaches."
];

const Speakers: React.FC = () => {
  return (
    <div className="w-full bg-gray-900">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12 animate-fadeIn">
          Featured Speakers
        </h2>
        
        <div className="space-y-12">
          {speakerDescriptions.map((description, index) => (
            <div key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              <SpeakerCard 
                number={index + 1} 
                description={description} 
                isReversed={index % 2 === 1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;