
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-display font-bold mb-2">
              Bhavya <span className="text-primary-accent">Sri</span>
            </h3>
            <p className="text-white/70">Computer Science & Engineering Student</p>
          </div>
          
          <div>
            <button 
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} className="text-white" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/70 flex items-center justify-center">
            Made with <Heart size={16} className="mx-2 text-red-400" /> by Jonnakuti Bhavya Sri
          </p>
          <p className="text-white/50 text-sm mt-2">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
