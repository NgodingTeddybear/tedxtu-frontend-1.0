'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const galleryImages = [
  '/gallery/gallery-1.jpg',
  '/gallery/gallery-2.jpg',
  '/gallery/gallery-3.jpg',
  '/gallery/gallery-4.jpg',
  '/gallery/gallery-5.jpg',
  '/gallery/gallery-6.jpg',
  '/gallery/gallery-7.jpg',
  '/gallery/gallery-8.jpg',
  '/gallery/gallery-9.jpg',
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const getVisibleCount = useCallback(() => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth >= 1280) return 4;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }, []);

  const [visibleCount, setVisibleCount] = useState(4);

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
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      navigate('next');
    }, 4000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlay]);

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
    <div className="w-full bg-black min-h-screen">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6">
        {/* Header with animations */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 animate-pulse">
            Gallery from Main Event
          </h2>
          <div className="w-32 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Main Gallery Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={() => navigate('prev')}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button 
            onClick={() => navigate('next')}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>

          {/* Images Container */}
          <div className="overflow-hidden mx-20">
            <div 
              className={`flex gap-6 transition-all duration-700 ease-in-out ${
                isTransitioning ? 'transform scale-95 opacity-80' : 'transform scale-100 opacity-100'
              }`}
            >
              {getVisibleImages().map(({ index, url }, idx) => (
                <div 
                  key={`${index}-${currentIndex}`}
                  className={`flex-1 transform transition-all duration-700 cursor-pointer ${
                    isTransitioning 
                      ? 'translate-y-2 opacity-90' 
                      : 'translate-y-0 opacity-100 hover:scale-105'
                  }`}
                  style={{ 
                    animationDelay: `${idx * 100}ms`,
                    transitionDelay: `${idx * 50}ms`
                  }}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={url}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-80 lg:h-96 object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      {/* <p className="text-lg font-semibold">Image {index + 1}</p> */}
                      <p className="text-sm text-gray-300">Click to view full size</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center mt-12 gap-8">
          {/* Auto-play toggle */}
          {/* <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300 border border-white/20"
          >
            {isAutoPlay ? <Pause size={20} /> : <Play size={20} />}
            <span>{isAutoPlay ? 'Pause' : 'Play'}</span>
          </button> */}

          {/* Dots Indicator */}
          <div className="flex gap-3">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="w-full bg-white/20 rounded-full h-1">
            <div 
              className="bg-red-500 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / galleryImages.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Full-size Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full">
            <img
              src={galleryImages[selectedImage]}
              alt={`Gallery image ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;