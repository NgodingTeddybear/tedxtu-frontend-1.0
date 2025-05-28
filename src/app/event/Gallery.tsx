import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3760323/pexels-photo-3760323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  
  const getVisibleCount = () => {
    if (window.innerWidth >= 1024) return 6;
    if (window.innerWidth >= 768) return 4;
    return 2;
  };

  useEffect(() => {
    const handleResize = () => {
      updateVisibleImages(currentIndex);
    };
    
    window.addEventListener('resize', handleResize);
    updateVisibleImages(currentIndex);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  const updateVisibleImages = (startIndex: number) => {
    const count = getVisibleCount();
    const indices: number[] = [];
    
    for (let i = 0; i < count; i++) {
      const index = (startIndex + i) % galleryImages.length;
      indices.push(index);
    }
    
    setVisibleImages(indices);
  };

  const navigate = (direction: 'prev' | 'next') => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    } else {
      newIndex = (currentIndex + 1) % galleryImages.length;
    }
    setCurrentIndex(newIndex);
    updateVisibleImages(newIndex);
  };

  return (
    <div className="w-full bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12 animate-fadeIn">
          Gallery from Main Event
        </h2>
        
        <div className="relative flex items-center">
          <button 
            onClick={() => navigate('prev')}
            className="absolute left-0 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex overflow-hidden gap-4 mx-12 transition-all">
            {visibleImages.map((imageIndex, idx) => (
              <div 
                key={imageIndex} 
                className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 flex-shrink-0 transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative group">
                  <img
                    src={galleryImages[imageIndex]}
                    alt={`Gallery image ${imageIndex + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => navigate('next')}
            className="absolute right-0 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;