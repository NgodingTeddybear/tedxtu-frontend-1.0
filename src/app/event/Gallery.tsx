import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// You'll need to define this array with your actual images
const galleryImages = [
  '/gallery/gallery-1.jpg',
  '/gallery/gallery-2.jpg',
  '/gallery/gallery-3.jpg',
  '/gallery/gallery-4.jpg',
  '/gallery/gallery-5.jpg',
  '/gallery/gallery-6.jpg',
  '/gallery/gallery-7.jpg',
  '/gallery/gallery-8.jpg',
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const getVisibleCount = useCallback(() => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1280) return 4;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }, []);

  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getVisibleCount]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay || selectedImage !== null) return;

    const interval = setInterval(() => {
      navigate('next');
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlay, selectedImage]);

  const navigate = useCallback((direction: 'prev' | 'next') => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    } else {
      newIndex = (currentIndex + 1) % galleryImages.length;
    }

    setCurrentIndex(newIndex);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  }, [currentIndex, isTransitioning]);

  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % galleryImages.length;
      images.push({ index, url: galleryImages[index] });
    }
    return images;
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setCurrentIndex(index);
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  return (
    <div className="w-full bg-black py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animations */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 font-[family-name:var(--font-cinzel-decorative)]">
            Gallery from Main Event
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Gallery Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons - Hidden on mobile for swipe gestures */}
          <button
            onClick={() => navigate('prev')}
            disabled={isTransitioning}
            className="absolute -left-8 sm:-left-10 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-2 sm:p-3 md:p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 hidden sm:block"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>

          <button
            onClick={() => navigate('next')}
            disabled={isTransitioning}
            className="absolute -right-8 sm:-right-10 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-2 sm:p-3 md:p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 hidden sm:block"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>

          {/* Images Container */}
          <div className="overflow-hidden px-0 sm:px-12 md:px-16 lg:px-20">
            <div
              className={`flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 transition-all duration-700 ease-in-out ${isTransitioning ? 'transform scale-95 opacity-80' : 'transform scale-100 opacity-100'
                }`}
            >
              {getVisibleImages().map(({ index, url }, idx) => (
                <div
                  key={`${index}-${currentIndex}`}
                  className={`w-full flex-shrink-0 transform transition-all duration-700 cursor-pointer ${isTransitioning
                      ? 'translate-y-2 opacity-90'
                      : 'translate-y-0 opacity-100 hover:scale-105'
                    }`}
                  style={{
                    animationDelay: `${idx * 100}ms`,
                    transitionDelay: `${idx * 50}ms`,
                    width: `${100 / visibleCount}%`
                  }}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative group overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl mx-1.5 sm:mx-0">
                    <div className="aspect-[3/4] w-full">
                      <img
                        src={url}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <p className="text-xs sm:text-sm text-gray-300">Click to view full size</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots - Visible only on mobile */}
          <div className="flex justify-center gap-2 mt-6 sm:hidden">
            <button
              onClick={() => navigate('prev')}
              disabled={isTransitioning}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-2 rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('next')}
              disabled={isTransitioning}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-2 rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center mt-8 sm:mt-10 md:mt-12">
          {/* Full Documentation Button */}
          <a
            href="https://flic.kr/s/aHBqjCg6hx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#951900] hover:bg-[#b42000] text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 border border-white/20 backdrop-blur-md text-sm sm:text-base font-[family-name:var(--font-raleway)]"
          >
            <span>Full Documentation</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-1.5 sm:gap-2 md:gap-3 mt-6 sm:mt-8">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-white scale-125 shadow-lg'
                  : 'bg-white/40 hover:bg-white/70'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 sm:mt-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto">
          <div className="w-full bg-white/20 rounded-full h-0.5 sm:h-1">
            <div
              className="bg-red-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / galleryImages.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Full-size Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl">
            <img
              src={galleryImages[selectedImage]}
              alt={`Gallery image ${selectedImage + 1}`}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Mobile navigation in modal */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const newIndex = (selectedImage - 1 + galleryImages.length) % galleryImages.length;
                  setSelectedImage(newIndex);
                }}
                className="pointer-events-auto bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const newIndex = (selectedImage + 1) % galleryImages.length;
                  setSelectedImage(newIndex);
                }}
                className="pointer-events-auto bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
