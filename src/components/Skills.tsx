
import { useState } from 'react';
import { Code, Database, Server, GitBranch, Terminal, Monitor, Users, MessageSquare } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'languages', name: 'Languages' },
    { id: 'tech', name: 'Technologies' },
    { id: 'courses', name: 'Coursework' },
    { id: 'tools', name: 'Tools' },
    { id: 'soft', name: 'Soft Skills' },
  ];
  
  const skills = [
    { 
      id: 1, 
      name: 'C', 
      category: 'languages', 
      icon: <Code size={20} />,
    },
    { 
      id: 2, 
      name: 'C++', 
      category: 'languages', 
      icon: <Code size={20} />,
    },
    { 
      id: 3, 
      name: 'JavaScript', 
      category: 'languages', 
      icon: <Code size={20} />,
    },
    { 
      id: 4, 
      name: 'Java', 
      category: 'languages', 
      icon: <Code size={20} />,
    },
    { 
      id: 5, 
      name: 'MongoDB', 
      category: 'tech', 
      icon: <Database size={20} />,
    },
    { 
      id: 6, 
      name: 'Express.js', 
      category: 'tech', 
      icon: <Server size={20} />,
    },
    { 
      id: 7, 
      name: 'React.js', 
      category: 'tech', 
      icon: <Monitor size={20} />,
    },
    { 
      id: 8, 
      name: 'Node.js', 
      category: 'tech', 
      icon: <Server size={20} />,
    },
    { 
      id: 9, 
      name: 'Flask API', 
      category: 'tech', 
      icon: <Server size={20} />,
    },
    { 
      id: 10, 
      name: 'RESTful APIs', 
      category: 'tech', 
      icon: <Server size={20} />,
    },
    { 
      id: 11, 
      name: 'Data Structures', 
      category: 'courses', 
      icon: <Code size={20} />,
    },
    { 
      id: 12, 
      name: 'Algorithms', 
      category: 'courses', 
      icon: <Code size={20} />,
    },
    { 
      id: 13, 
      name: 'Operating Systems', 
      category: 'courses', 
      icon: <Terminal size={20} />,
    },
    { 
      id: 14, 
      name: 'OOPs', 
      category: 'courses', 
      icon: <Code size={20} />,
    },
    { 
      id: 15, 
      name: 'DBMS', 
      category: 'courses', 
      icon: <Database size={20} />,
    },
    { 
      id: 16, 
      name: 'SQL', 
      category: 'courses', 
      icon: <Database size={20} />,
    },
    { 
      id: 17, 
      name: 'PostgreSQL', 
      category: 'courses', 
      icon: <Database size={20} />,
    },
    { 
      id: 18, 
      name: 'Git', 
      category: 'tools', 
      icon: <GitBranch size={20} />,
    },
    { 
      id: 19, 
      name: 'GitHub', 
      category: 'tools', 
      icon: <GitBranch size={20} />,
    },
    { 
      id: 20, 
      name: 'Docker', 
      category: 'tools', 
      icon: <Server size={20} />,
    },
    { 
      id: 21, 
      name: 'AWS CDK', 
      category: 'tools', 
      icon: <Server size={20} />,
    },
    { 
      id: 22, 
      name: 'Linux', 
      category: 'tools', 
      icon: <Terminal size={20} />,
    },
    { 
      id: 23, 
      name: 'Power BI', 
      category: 'tools', 
      icon: <Monitor size={20} />,
    },
    { 
      id: 24, 
      name: 'Leadership', 
      category: 'soft', 
      icon: <Users size={20} />,
    },
    { 
      id: 25, 
      name: 'Teamwork', 
      category: 'soft', 
      icon: <Users size={20} />,
    },
    { 
      id: 26, 
      name: 'Event Management', 
      category: 'soft', 
      icon: <MessageSquare size={20} />,
    },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="w-20 h-1 bg-primary-accent mx-auto mt-2 mb-8 rounded-full"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          My technical toolkit and expertise in various technologies and domains.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category.id 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {filteredSkills.map((skill) => (
          <div 
            key={skill.id} 
            className="glass-card bg-white p-4 flex flex-col items-center text-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="w-12 h-12 rounded-full bg-primary-accent/10 flex items-center justify-center mb-3">
              <span className="text-primary-accent">{skill.icon}</span>
            </div>
            <h3 className="font-medium text-gray-900">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
