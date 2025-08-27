import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Bot, Zap, Target, Users, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import ContactForm from './ContactForm';
import ServicesPage from './ServicesPage';
import PricingPage from './PricingPage';

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  const navigateToPage = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-600 text-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-cyan-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img 
              src="/Aturila_Systems_Ltd_Logo_copy-removebg-preview copy.png" 
              alt="Aturila Systems" 
             className="h-8 w-auto"
            />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:text-cyan-300 transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => navigateToPage('/services')}
                className="hover:text-cyan-300 transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => navigateToPage('/pricing')}
                className="hover:text-cyan-300 transition-colors duration-200"
              >
                Pricing
              </button>
              <button 
                onClick={() => navigateToPage('/contact')}
                className="bg-white text-cyan-600 px-6 py-2 rounded-full hover:bg-cyan-100 transition-all duration-200 transform hover:scale-105"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-fade-in">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left hover:text-cyan-300 transition-colors duration-200"
                >
                  Home
                </button>
                <button 
                  onClick={() => navigateToPage('/services')}
                  className="text-left hover:text-cyan-300 transition-colors duration-200"
                >
                  Services
                </button>
                <button 
                  onClick={() => navigateToPage('/pricing')}
                  className="text-left hover:text-cyan-300 transition-colors duration-200"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => navigateToPage('/contact')}
                  className="bg-white text-cyan-600 px-6 py-2 rounded-full w-fit hover:bg-cyan-100 transition-all duration-200"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Automate Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200">
                  Business with AI
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Transform your business with cutting-edge AI automation systems. 
               Streamline operations, boost efficiency, and unlock unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => navigateToPage('/contact')}
                  className="bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
                >
                  Get Started Today
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Industry Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Our Industry</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-200">The Future is Automated</h3>
                <p className="text-lg mb-6 opacity-90 leading-relaxed">
                  Artificial Intelligence and its use in automation is revolutionizing how businesses operate across every industry. 
                  What once required hours of manual work can now be completed in minutes with intelligent systems that 
                  learn, adapt, and improve over time.
                </p>
                <p className="text-lg mb-6 opacity-90 leading-relaxed">
                  From processing invoices and managing customer inquiries to analyzing market trends and scheduling appointments, 
                  AI-powered automation handles repetitive tasks with unprecedented accuracy and speed. This transformation 
                  allows human workers to focus on creative problem-solving, strategic thinking, and building meaningful 
                  relationships with customers.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="AI Automation Technology"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <h4 className="text-xl font-bold mb-4 text-cyan-200">Efficiency Revolution</h4>
                <p className="opacity-90 leading-relaxed">
                  Tasks that traditionally took days can now be completed in hours. AI systems work continuously 
                  without breaks, ensuring consistent productivity around the clock.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <h4 className="text-xl font-bold mb-4 text-cyan-200">Error Reduction</h4>
                <p className="opacity-90 leading-relaxed">
                  Automated systems eliminate human error in repetitive tasks, ensuring consistent quality 
                  and accuracy in data processing, calculations, and routine operations.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <h4 className="text-xl font-bold mb-4 text-cyan-200">Scalable Growth</h4>
                <p className="opacity-90 leading-relaxed">
                  As your business grows, automated systems scale effortlessly. Handle increased workloads 
                  without proportionally increasing staff, making growth more sustainable and profitable.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center animate-fade-in-up">
              <p className="text-lg opacity-90 leading-relaxed max-w-3xl mx-auto">
                Businesses that embrace AI automation today will be the leaders of tomorrow. By integrating 
                intelligent systems into your operations, you're not just improving efficiency – you're future-proofing 
                your organization for the digital age ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us?</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                With over a decade of experience in AI and automation, we're your trusted partner 
                for your digital transformation. Our team of experts delivers cutting-edge solutions 
                that drive real results.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-400 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                    <p className="opacity-90">Industry-leading AI specialists and automation engineers</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                    <p className="opacity-90">98% client satisfaction with measurable ROI improvements</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-300 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                    <p className="opacity-90">Round-the-clock monitoring and support for all our solutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="AI Technology"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-l from-cyan-600 to-blue-500">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We specialize in creating custom AI automation systems that revolutionize how businesses operate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="bg-cyan-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Bot size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Process Automation</h3>
              <p className="opacity-90 leading-relaxed">
                Automate repetitive tasks and workflows with intelligent AI systems that learn and adapt to your business needs.
              </p>
            </div>

            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="bg-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Custom Website Designs</h3>
              <p className="opacity-90 leading-relaxed">
                Create stunning, responsive websites tailored to your brand with modern design principles and seamless user experiences.
              </p>
            </div>

            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="bg-cyan-300 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Enhanced Marketing Solutions</h3>
              <p className="opacity-90 leading-relaxed">
                Automate your outreach to leads using AI for automatic personalized emails that convert prospects into customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl opacity-90">
                Let's discuss how AI automation can revolutionize your operations
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Mail size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="opacity-90">hello@aturilasystems.com</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Phone size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="opacity-90">+1 (555) 123-4567</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="bg-cyan-300 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                  <p className="opacity-90">123 Innovation Drive<br />Tech City, TC 12345</p>
                </div>
              </div>
              
              <div className="text-center">
                <button 
                  onClick={() => navigateToPage('/contact')}
                  className="bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto group"
                >
                  Contact Us Today
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cyan-900 py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <img 
              src="/Aturila_Systems_Ltd_Logo_copy-removebg-preview copy.png" 
              alt="Aturila Systems" 
              className="h-8 w-auto mb-4 md:mb-0"
            />
            <div className="text-center md:text-right opacity-90">
              <p>&copy; 2025 Aturila Systems. All rights reserved.</p>
              <p className="text-sm mt-1">Empowering businesses through AI automation</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
    </Routes>
  );
}

export default App;