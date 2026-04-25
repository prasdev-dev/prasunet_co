"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI assistant. I can help you with information about Prasunet, our services, and answer any questions you might have. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase().trim();

    // Company Information - More Accurate and Detailed
    if (message.includes('founded') || message.includes('when') || message.includes('established') || message.includes('started') || message.includes('how old') || message.includes('since when')) {
      return "Prasunet was founded in 2020 by Pramod Prajapat, a visionary entrepreneur with extensive experience in technology and business development. The company was established with the mission to bridge the gap between traditional businesses and cutting-edge digital technologies.";
    }

    if (message.includes('pramod') || message.includes('founder') || message.includes('ceo') || message.includes('leader') || message.includes('who is') || message.includes('who founded')) {
      return "Pramod Prajapat is the Founder and CEO of Prasunet. With a strong background in technology and business strategy, he leads the company with a vision to democratize access to advanced digital solutions for businesses worldwide.";
    }

    if (message.includes('location') || message.includes('headquarters') || message.includes('office') || message.includes('based') || message.includes('where are you')) {
      return "Prasunet operates globally with a strategic presence across multiple countries. Our headquarters is designed to serve international clients effectively, with development centers and support teams positioned to provide 24/7 service coverage.";
    }

    if (message.includes('mission') || message.includes('vision') || message.includes('goal')) {
      return "Our mission is to empower businesses with innovative technology solutions that drive sustainable growth and operational excellence. We envision being the global leader in digital transformation, making advanced technology accessible to organizations of all sizes.";
    }

    if (message.includes('values') || message.includes('culture') || message.includes('principles')) {
      return "Prasunet is guided by three core values: Innovation (embracing cutting-edge technologies), Integrity (upholding the highest ethical standards), and Excellence (delivering superior quality in everything we do). Our culture fosters collaboration, continuous learning, and client success.";
    }

    // Services - More Comprehensive
    if (message.includes('service') || message.includes('services') || message.includes('what do you do') || message.includes('offer') || message.includes('solutions') || message.includes('provide') || message.includes('what can you') || message.includes('what are your') || message.includes('tell me about your') || message.includes('what services') || message.includes('what do you offer') || message.includes('what do you provide')) {
      return "We offer comprehensive technology solutions including: Web Development, Mobile App Development, AI & Machine Learning, Cloud Services (AWS, Azure, GCP), Cybersecurity, UI/UX Design, Blockchain, IoT, DevOps, Digital Marketing, ERP/CRM, and Custom Software Development. Each service is tailored to meet specific business needs.";
    }

    if (message.includes('web development') || message.includes('website') || message.includes('web app')) {
      return "Our web development services include custom website development, e-commerce platforms, progressive web apps (PWAs), and enterprise web applications. We use modern technologies like React, Next.js, Node.js, Python, and ensure responsive, scalable, secure, and high-performance solutions with SEO optimization.";
    }

    if (message.includes('mobile') || message.includes('app') || message.includes('ios') || message.includes('android')) {
      return "We develop native and cross-platform mobile applications for iOS and Android. Our expertise includes React Native, Flutter, Swift, Kotlin, and native development. We create high-performance apps with excellent UX, offline capabilities, and seamless integration with backend systems.";
    }

    if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('machine learning') || message.includes('ml')) {
      return "Our AI and ML services include intelligent automation, predictive analytics, natural language processing (NLP), computer vision, recommendation systems, and custom AI solutions. We help businesses leverage AI for data-driven decision making, process automation, and competitive advantage.";
    }

    if (message.includes('cloud') || message.includes('aws') || message.includes('azure') || message.includes('gcp') || message.includes('google cloud')) {
      return "We provide comprehensive cloud services including cloud migration, multi-cloud architecture, serverless computing, containerization (Docker, Kubernetes), DevOps automation, and managed cloud services. We're certified in AWS, Azure, and Google Cloud platforms.";
    }

    if (message.includes('cybersecurity') || message.includes('security') || message.includes('protection')) {
      return "Our cybersecurity services include threat assessment, vulnerability testing, penetration testing, compliance auditing (GDPR, HIPAA, SOC 2), incident response planning, security implementation, and ongoing monitoring. We hold ISO 27001 certification and follow industry best practices.";
    }

    if (message.includes('ui') || message.includes('ux') || message.includes('design') || message.includes('interface')) {
      return "Our UI/UX design services focus on creating intuitive, user-centered digital experiences. We conduct user research, create wireframes and prototypes, design responsive interfaces, and ensure accessibility compliance. Our designs drive user engagement and business results.";
    }

    if (message.includes('blockchain') || message.includes('crypto') || message.includes('web3')) {
      return "We develop blockchain solutions including smart contracts, decentralized applications (dApps), NFT platforms, DeFi solutions, and blockchain integration. Our expertise covers Ethereum, Hyperledger, and other blockchain frameworks with secure, scalable implementations.";
    }

    if (message.includes('iot') || message.includes('internet of things') || message.includes('embedded')) {
      return "Our IoT services include connected device development, sensor integration, IoT platform development, data analytics for IoT, and edge computing solutions. We help businesses create smart, connected ecosystems for improved efficiency and insights.";
    }

    if (message.includes('devops') || message.includes('ci/cd') || message.includes('automation')) {
      return "Our DevOps services include CI/CD pipeline setup, infrastructure as code, container orchestration, monitoring and logging, automated testing, and deployment automation. We help teams deliver software faster and more reliably.";
    }

    // Experience and Expertise - More Specific
    if (message.includes('experience') || message.includes('years') || message.includes('how long') || message.includes('since')) {
      return "Since our founding in 2020, we've successfully delivered over 500 projects across 50+ countries, serving clients from startups to Fortune 500 companies. Our team has 5+ years of combined experience with 98% client satisfaction rate and 99.9% uptime guarantee.";
    }

    if (message.includes('certification') || message.includes('certified') || message.includes('qualified')) {
      return "We're ISO 27001 certified for information security management. Our team holds certifications in AWS (Solutions Architect, Developer), Microsoft Azure, Google Cloud Professional, CISSP, CISM, and various other industry-recognized credentials.";
    }

    if (message.includes('clients') || message.includes('customers') || message.includes('companies')) {
      return "We serve clients across diverse industries including healthcare, finance, retail, manufacturing, education, logistics, government, and technology sectors. Our clients range from innovative startups to established enterprises worldwide.";
    }

    // Contact and Support - More Detailed
    if (message.includes('contact') || message.includes('reach') || message.includes('phone') || message.includes('email') || message.includes('support') || message.includes('call') || message.includes('talk') || message.includes('speak')) {
      return "You can reach us through: 📧 Email: info@prasunet.com | 📞 Phone: Available on our contact page | 💬 Live chat: You're using it right now! | 📝 Contact form: On our website | 🌐 Website: prasunet.com. Our support team is available 24/7 for urgent matters.";
    }

    if (message.includes('pricing') || message.includes('cost') || message.includes('quote') || message.includes('fee') || message.includes('rate') || message.includes('price') || message.includes('how much') || message.includes('budget')) {
      return "Our pricing is customized based on project scope, complexity, timeline, and specific requirements. We offer flexible engagement models: Fixed-price projects, Time & Materials, Retainer agreements, and Dedicated team arrangements. Contact us for a detailed consultation and personalized quote.";
    }

    // Career and Team - More Information
    if (message.includes('career') || message.includes('job') || message.includes('work') || message.includes('join') || message.includes('hiring')) {
      return "We're always looking for talented individuals! Current openings include Software Developers, AI/ML Engineers, Cloud Architects, Cybersecurity Specialists, UI/UX Designers, DevOps Engineers, and Project Managers. Visit our Careers page for current opportunities and internship programs.";
    }

    if (message.includes('team') || message.includes('size') || message.includes('employees') || message.includes('people')) {
      return "Our diverse team consists of over 200 professionals including software developers, AI specialists, cloud engineers, cybersecurity experts, designers, project managers, and business analysts. We pride ourselves on having a multicultural, talented team with expertise across multiple domains.";
    }

    // Industries - More Specific
    if (message.includes('industry') || message.includes('sector') || message.includes('healthcare')) {
      return "We serve clients across various industries: 🏥 Healthcare (telemedicine, patient management), 💰 Finance (fintech, banking solutions), 🛒 Retail & E-commerce, 🏭 Manufacturing (Industry 4.0), 📚 Education (e-learning platforms), 🚚 Logistics & Supply Chain, 🏛️ Government, and 🖥️ Technology sectors.";
    }

    // Technology Stack
    if (message.includes('technology') || message.includes('tech stack') || message.includes('tools') || message.includes('framework')) {
      return "Our technology stack includes: Frontend (React, Next.js, Vue.js, Angular), Backend (Node.js, Python, Java, .NET), Mobile (React Native, Flutter), Cloud (AWS, Azure, GCP), Databases (PostgreSQL, MongoDB, Redis), AI/ML (TensorFlow, PyTorch), and DevOps tools (Docker, Kubernetes, Jenkins).";
    }

    // Process and Methodology
    if (message.includes('process') || message.includes('methodology') || message.includes('approach') || message.includes('workflow')) {
      return "Our development process follows agile methodologies with: 1) Discovery & Planning, 2) Design & Architecture, 3) Development & Testing, 4) Deployment & Launch, 5) Support & Maintenance. We emphasize transparency, regular communication, and iterative delivery to ensure project success.";
    }

    // Default responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon')) {
      return "Hello! 👋 Welcome to Prasunet. I'm your AI assistant, here to help you learn about our comprehensive technology solutions and services. How can I assist you today?";
    }

    if (message.includes('thank') || message.includes('thanks') || message.includes('appreciate')) {
      return "You're very welcome! 😊 I'm glad I could help. If you have any more questions about Prasunet, our services, or how we can help transform your business, feel free to ask. We're here to support your digital journey!";
    }

    if (message.includes('bye') || message.includes('goodbye') || message.includes('see you')) {
      return "Goodbye! 👋 It was great chatting with you. Don't hesitate to reach out anytime you need information about Prasunet or our services. Have a wonderful day!";
    }

    // Generic fallback - More Helpful
    return "Thank you for your question! 🤔 For the most accurate and detailed information, I recommend reaching out to our expert team directly. You can contact us through our website's contact form at prasunet.com, email us at info@prasunet.com, or call our support team. We're always happy to discuss your specific needs and provide personalized solutions tailored to your business requirements.";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const messageToProcess = inputValue; // Store the message before clearing
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(messageToProcess);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 z-50 w-14 h-14 bg-gradient-to-r from-indigo-600 to-pink-600 text-white p-0 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden relative"
        style={{ right: '2rem' }}
        aria-label="Open chat"
      >
        <video
          src="/chatbot.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <MessageCircle size={20} className="text-white" />
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 z-50 w-80 h-[400px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Prasunet Assistant</h3>
                  <p className="text-sm text-indigo-100">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-indigo-200 transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[280px]">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'bot'
                        ? 'bg-gradient-to-r from-indigo-500 to-pink-500 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {message.sender === 'bot' ? <Bot size={12} /> : <User size={12} />}
                    </div>
                    <div className={`rounded-2xl px-3 py-2 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-xs leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex space-x-2 max-w-[80%]">
                    <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot size={12} className="text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl px-3 py-2">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-3">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 border border-gray-300 rounded-full px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  disabled={isTyping}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white p-2 rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send size={14} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
