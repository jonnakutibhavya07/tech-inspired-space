
import { Award, Users, Heart } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Work Experience & Extra-Curriculars</h2>
        <div className="w-20 h-1 bg-primary-accent mx-auto mt-2 mb-8 rounded-full"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          My professional journey and extracurricular activities that have shaped my skills and character.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="glass-card bg-white p-8 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <div className="w-24 h-24 rounded-full bg-primary-accent/10 flex items-center justify-center">
                <Award size={40} className="text-primary-accent" />
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-display font-semibold text-primary mb-2">
                NCC Cadet
              </h3>
              <p className="text-gray-600 italic mb-4">
                10 Andhra Girls Battalion (2022 – 2025)
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-accent mr-3 mt-1">
                    <Award size={18} />
                  </span>
                  <span className="text-gray-600">
                    Achieved B Certificate after 50+ hours of training & drills.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-accent mr-3 mt-1">
                    <Users size={18} />
                  </span>
                  <span className="text-gray-600">
                    Led community service initiatives and mobilized peers for outreach programs.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-accent mr-3 mt-1">
                    <Heart size={18} />
                  </span>
                  <span className="text-gray-600">
                    Developed discipline, leadership skills, and team coordination through rigorous training.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
