import React from 'react';

interface SpeakerCardProps {
  number: number;
  description: string;
  isReversed?: boolean;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ number, description, isReversed = false }) => {
  return (
    <div 
      className={`flex flex-col md:flex-row items-center gap-6 mb-8 ${isReversed ? 'md:flex-row-reverse' : ''} animate-fadeIn hover:transform hover:scale-[1.02] transition-all duration-300`}
    >
      <div className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-[#e62b1e] to-[#ff3b2f] rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-all duration-300">
        <span className="text-white font-bold text-xl">
          Speaker<br />{number}
        </span>
      </div>
      <div className="flex-1 p-6 rounded-xl bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700">
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;