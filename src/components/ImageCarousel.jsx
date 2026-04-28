import { useState } from 'react';

const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure images is an array
  const imageArray = Array.isArray(images) ? images : [images];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="project-page__image-carousel">
      <div className="carousel-container">
        {/* Main Image Display */}
        <div className="carousel-image-wrapper">
          <img 
            src={imageArray[currentIndex]} 
            alt={`${title} - ${currentIndex + 1}`} 
            className="project-page__image" 
          />
        </div>

        {/* Navigation Arrows - Only show if multiple images */}
        {imageArray.length > 1 && (
          <>
            <button 
              className="carousel-arrow carousel-arrow--left"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button 
              className="carousel-arrow carousel-arrow--right"
              onClick={goToNext}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}

        {/* Dot Indicators - Only show if multiple images */}
        {imageArray.length > 1 && (
          <div className="carousel-dots">
            {imageArray.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'carousel-dot--active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;