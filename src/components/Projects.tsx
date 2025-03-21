
import { ExternalLink, Github, BarChart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-LEARN',
      description: 'Full-stack course-selling website with CRUD operations for students & teachers.',
      points: [
        'JWT authentication securing access to protected routes.',
        'RESTful API enabling course creation, updates, and purchases.',
      ],
      tech: ['MERN Stack', 'Tailwind CSS', 'JWT', 'RESTful API'],
      github: 'https://github.com',
      demo: 'https://demo-link.com',
      image: 'https://via.placeholder.com/800x600/1E3A8A/FFFFFF?text=E-LEARN',
    },
    {
      id: 2,
      title: 'Online Food Ordering System',
      description: 'A comprehensive food ordering platform with payment integration and admin dashboard.',
      points: [
        'Boosted customer engagement by 35% with a smooth UI.',
        'Integrated secure payment processing via Stripe, reducing payment errors by 40%.',
        'Built an admin dashboard for order management, leading to a 35% increase in customer retention.',
        'Implemented 6-digit token authentication for enhanced security.',
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo-link.com',
      image: 'https://via.placeholder.com/800x600/06B6D4/FFFFFF?text=Food+Ordering',
    },
  ];

  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Projects</h2>
        <div className="w-20 h-1 bg-primary-accent mx-auto mt-2 mb-8 rounded-full"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore my latest projects and applications that demonstrate my skills and expertise.
        </p>
      </div>
      
      <div className="space-y-24">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-8 items-center`}
          >
            <div className="w-full lg:w-1/2 overflow-hidden rounded-xl shadow-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {project.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {project.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary-accent mr-2 mt-1">
                      <BarChart size={16} />
                    </span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="tech-chip"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-accent inline-flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
