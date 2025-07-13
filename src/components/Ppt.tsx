import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const basePath = import.meta.env.PROD ? '/realsync_web' : '';
  
  // Array delle slide (esporta ogni slide come immagine)
  const slides = [
    `${basePath}/slides/slide1.jpg`,
    `${basePath}/slides/slide2.jpg`,
    `${basePath}/slides/slide3.jpg`,
    `${basePath}/slides/slide4.jpg`,
    `${basePath}/slides/slide5.jpg`,
    `${basePath}/slides/slide6.jpg`,
    `${basePath}/slides/slide7.jpg`,
    `${basePath}/slides/slide8.jpg`,
    `${basePath}/slides/slide9.jpg`,
    `${basePath}/slides/slide10.jpg`,
    `${basePath}/slides/slide11.jpg`,
    `${basePath}/slides/slide12.jpg`,
    `${basePath}/slides/slide13.jpg`,
    `${basePath}/slides/slide14.jpg`,
    // Aggiungi tutte le tue slide
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="presentation" className="py-20 bg-realsync-gray">
      <div className="container mx-auto px-6">
        {/* <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"> */}
          <div className="p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-realsync-navy">
              RealSync Presentation
            </h2>
            
            {/* Slide Viewer */}
            <div className="w-full h-[450px] md:h-[500px] lg:h-[600px] relative bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={slides[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-contain"
              />
              
              {/* Navigation Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                disabled={currentSlide === slides.length - 1}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Slide Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full">
                {currentSlide + 1} / {slides.length}
              </div>
            </div>
            
            {/* Slide Dots Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-realsync-teal' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <div className="text-center mt-6">
              {/* <p className="text-realsync-darkgray">
                Navigate through the presentation using the arrows or dots
              </p> */}
            </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Presentation;