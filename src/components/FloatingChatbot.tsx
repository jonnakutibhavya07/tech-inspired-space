
import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi there! 👋 I\'m Bhavya\'s AI assistant. How can I help you with information about her skills, projects, or experience?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = { type: 'user', text: inputValue };
    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      let botResponse = '';
      
      const userQuery = inputValue.toLowerCase();
      
      if (userQuery.includes('skill') || userQuery.includes('technologies') || userQuery.includes('programming')) {
        botResponse = 'Bhavya has expertise in C, C++, JavaScript, Java as programming languages, and is proficient with the MERN stack (MongoDB, Express.js, React.js, Node.js), Flask API, and RESTful APIs. She also has knowledge in Data Structures, Algorithms, Operating Systems, OOPs, DBMS, SQL, and PostgreSQL.';
      } else if (userQuery.includes('project')) {
        botResponse = 'Bhavya has worked on several projects including E-LEARN, a full-stack course-selling website with CRUD operations, and an Online Food Ordering System that boosted customer engagement by 35% with secure Stripe payment integration.';
      } else if (userQuery.includes('education') || userQuery.includes('academic')) {
        botResponse = 'Bhavya is pursuing B.Tech in Computer Science and Engineering at KL University (2022-2026) with a CGPA of 9.5. She completed her higher education at Sri Chaitanya Junior College with 94.2% and secondary education at Sri Chaitanya Olympiad School with 92%.';
      } else if (userQuery.includes('certification') || userQuery.includes('certificate')) {
        botResponse = 'Bhavya holds several certifications including AWS Certified Cloud Practitioner, RedHat Certified Enterprise Application Developer, Project Management Certification, and is Automation Anywhere Certified.';
      } else if (userQuery.includes('experience') || userQuery.includes('work')) {
        botResponse = 'Bhavya served as an NCC Cadet with the 10 Andhra Girls Battalion (2022-2025), achieving a B Certificate after 50+ hours of training & drills. She led community service initiatives and mobilized peers for outreach programs.';
      } else if (userQuery.includes('contact') || userQuery.includes('reach') || userQuery.includes('email')) {
        botResponse = 'You can contact Bhavya through the contact form on this website, or connect with her on GitHub, LinkedIn, or LeetCode. You can also download her resume for more information.';
      } else {
        botResponse = 'I\'m here to help you learn more about Bhavya\'s skills, projects, education, certifications, or experience. Feel free to ask about any of these areas!';
      }
      
      setMessages(prevMessages => [...prevMessages, { type: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="glass-card bg-white mb-4 w-[350px] max-h-[500px] rounded-2xl shadow-xl overflow-hidden animate-fade-in">
          <div className="bg-primary p-4 flex justify-between items-center">
            <h3 className="text-white font-medium">Bhavya's AI Assistant</h3>
            <button 
              onClick={toggleChatbot}
              className="text-white hover:text-gray-200"
              aria-label="Close chatbot"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="h-[350px] overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg rounded-bl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Ask me anything..."
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-accent focus:border-primary-accent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary-accent hover:text-primary"
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
      
      <button
        onClick={toggleChatbot}
        className={`w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all ${isOpen ? 'bg-primary-accent' : 'animate-pulse'}`}
        aria-label="Toggle chatbot"
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
};

export default FloatingChatbot;
