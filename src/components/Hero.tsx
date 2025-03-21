
import { ArrowDown, Github, Linkedin, Download, Code } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-hero-pattern bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      
      {/* Animated Gradient Orb */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-primary-accent/20 to-primary/20 rounded-full blur-3xl animate-floating opacity-70"></div>
      <div className="absolute bottom-1/4 -left-24 w-80 h-80 bg-gradient-to-tr from-primary/20 to-primary-accent/20 rounded-full blur-3xl animate-floating opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary-accent/10 text-primary-accent text-sm font-medium">
              Computer Science & Engineering Student
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-primary">
            Jonnakuti <span className="text-primary-accent">Bhavya Sri</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Computer Science and Engineering student passionate about full-stack development, cloud computing, and AI-powered solutions.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a href="https://preview--tech-inspired-space.lovable.app/#about" className="btn-primary">
              <span className="flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </span>
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6 mb-16">
            <a href="https://github.com/bhavyasri-portfolio" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/bhavyasri-j" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={20} />
            </a>
            <a href="https://leetcode.com/bhavyasri" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Code size={20} />
            </a>
          </div>
          
          <a 
            href="#about" 
            className="inline-block animate-bounce bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <ArrowDown size={24} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
