
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <div className="w-20 h-1 bg-primary-accent mx-auto mt-2 mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know more about me, my background, and what I'm passionate about.
          </p>
        </div>
        
        <div className="glass-card p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-display font-semibold mb-6 text-primary">
                Personal Info
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-accent/10 flex items-center justify-center mr-4">
                    <GraduationCap size={18} className="text-primary-accent" />
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-900">Name</h4>
                    <p className="text-gray-600">Jonnakuti Bhavya Sri</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-accent/10 flex items-center justify-center mr-4">
                    <MapPin size={18} className="text-primary-accent" />
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-gray-600">Vijayawada, Andhra Pradesh, India</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-accent/10 flex items-center justify-center mr-4">
                    <Calendar size={18} className="text-primary-accent" />
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-900">Education</h4>
                    <p className="text-gray-600">B.Tech in Computer Science and Engineering</p>
                    <p className="text-gray-600">CGPA: 9.5</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-display font-semibold mb-6 text-primary">
                Education Timeline
              </h3>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-primary-accent/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-accent"></div>
                  <div className="mb-1 text-primary-accent font-medium">2022 - 2026</div>
                  <h4 className="text-lg font-semibold">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-gray-600">KL University</p>
                  <p className="text-gray-600">CGPA: 9.5</p>
                </div>
                <div className="relative pl-8 border-l-2 border-primary-accent/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-accent"></div>
                  <div className="mb-1 text-primary-accent font-medium">2020 - 2022</div>
                  <h4 className="text-lg font-semibold">Higher Secondary Education</h4>
                  <p className="text-gray-600">Sri Chaitanya Junior College</p>
                  <p className="text-gray-600">Percentage: 94.2%</p>
                </div>
                <div className="relative pl-8 border-l-2 border-primary-accent/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-accent"></div>
                  <div className="mb-1 text-primary-accent font-medium">Until 2020</div>
                  <h4 className="text-lg font-semibold">Secondary Education</h4>
                  <p className="text-gray-600">Sri Chaitanya Olympiad School</p>
                  <p className="text-gray-600">Percentage: 92%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
