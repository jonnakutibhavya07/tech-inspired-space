
import { useState, useEffect, useRef } from 'react';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisible = 1;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  
  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Cloud Practitioner',
      organization: 'Amazon',
      year: '2024',
      image: 'https://via.placeholder.com/400x300/1E3A8A/FFFFFF?text=AWS',
    },
    {
      id: 2,
      title: 'RedHat Certified Enterprise Application Developer',
      organization: 'RedHat',
      year: '2024',
      image: 'https://via.placeholder.com/400x300/06B6D4/FFFFFF?text=RedHat',
    },
    {
      id: 3,
      title: 'Project Management Certification',
      organization: 'Coursera',
      year: '2024',
      image: 'https://via.placeholder.com/400x300/1E3A8A/FFFFFF?text=Project+Management',
    },
    {
      id: 4,
      title: 'Automation Anywhere Certified',
      organization: 'Automation Anywhere',
      year: '2023',
      image: 'https://via.placeholder.com/400x300/06B6D4/FFFFFF?text=Automation',
    },
  ];

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certifications.length - maxVisible ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certifications.length - maxVisible : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="certifications" className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="section-title">Certifications</h2>
        <div className="w-20 h-1 bg-primary-accent mx-auto mt-2 mb-8 rounded-full"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Professional certifications and achievements that validate my expertise.
        </p>
      </div>
      
      <div className="relative max-w-4xl mx-auto" ref={containerRef}>
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (containerWidth / maxVisible)}px)`,
              width: `${certifications.length * 100}%` 
            }}
          >
            {certifications.map((cert) => (
              <div 
                key={cert.id} 
                className="px-4" 
                style={{ width: `${100 / certifications.length}%` }}
              >
                <div className="glass-card bg-white p-6 h-full flex flex-col rounded-xl overflow-hidden shadow-lg">
                  <div className="aspect-video mb-6 overflow-hidden rounded-lg">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <Award size={24} className="text-primary-accent mr-3" />
                    <h3 className="text-xl font-display font-semibold text-primary">{cert.title}</h3>
                  </div>
                  
                  <div className="mt-auto">
                    <p className="text-gray-600">{cert.organization}</p>
                    <p className="text-primary-accent font-medium">{cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={prevSlide}
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10 focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="text-primary" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10 focus:outline-none"
          aria-label="Next slide"
        >
          <ChevronRight size={24} className="text-primary" />
        </button>
        
        <div className="flex justify-center mt-8 space-x-2">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full focus:outline-none transition-colors ${
                index === currentIndex ? 'bg-primary-accent' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
