import React from 'react';
import { ArrowLeft, Bot, MessageSquare, Phone, Calendar, Globe, Mail, MessageCircle, Zap, Target, Users, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Bot size={32} className="text-white" />,
      title: "AI Chatbots",
      description: "Intelligent conversational agents that handle customer inquiries 24/7",
      details: "Our AI chatbots are designed to understand natural language and provide accurate, helpful responses to your customers. They can handle multiple conversations simultaneously, qualify leads, answer frequently asked questions, and seamlessly transfer complex queries to human agents when needed.",
      features: [
        "Natural language processing for human-like conversations",
        "Integration with your existing CRM and databases",
        "Multi-language support for global reach",
        "Learning capabilities that improve over time",
        "Seamless handoff to human agents when needed"
      ],
      color: "bg-cyan-400"
    },
    {
      icon: <Phone size={32} className="text-white" />,
      title: "AI Voice Calling Agents",
      description: "Automated voice agents that make and receive calls with natural conversation",
      details: "Revolutionary AI-powered voice agents that can conduct phone conversations indistinguishable from human interactions. Perfect for lead qualification, appointment scheduling, customer surveys, and follow-up calls. These agents work around the clock to ensure no opportunity is missed.",
      features: [
        "Natural-sounding voice synthesis",
        "Real-time conversation processing",
        "Call recording and transcription",
        "Integration with your phone systems",
        "Customizable conversation flows and scripts"
      ],
      color: "bg-blue-400"
    },
    {
      icon: <Calendar size={32} className="text-white" />,
      title: "Automatic Appointment Setters",
      description: "Smart scheduling systems that book appointments without human intervention",
      details: "Eliminate the back-and-forth of appointment scheduling with our intelligent booking systems. These tools automatically find optimal meeting times, send confirmations, handle rescheduling requests, and integrate with popular calendar platforms to streamline your scheduling process.",
      features: [
        "Calendar integration with Google, Outlook, and more",
        "Automatic time zone detection and conversion",
        "Reminder notifications via email and SMS",
        "Rescheduling and cancellation handling",
        "Buffer time management between appointments"
      ],
      color: "bg-cyan-300"
    },
    {
      icon: <Globe size={32} className="text-white" />,
      title: "Custom Website Design",
      description: "Stunning, responsive websites tailored to your brand and business needs",
      details: "We create beautiful, high-performing websites that not only look amazing but also drive conversions. Each website is custom-designed to reflect your brand identity, optimized for search engines, and built with the latest web technologies to ensure fast loading times and excellent user experience.",
      features: [
        "Responsive design for all devices",
        "Search engine optimization (SEO)",
        "Fast loading speeds and performance optimization",
        "Content management system integration",
        "Analytics and conversion tracking setup"
      ],
      color: "bg-blue-500"
    },
    {
      icon: <Mail size={32} className="text-white" />,
      title: "Automated Email Outreach",
      description: "Personalized email campaigns that nurture leads and drive conversions",
      details: "Transform your email marketing with AI-powered personalization. Our systems analyze prospect data to create highly targeted, personalized email sequences that feel individually crafted. Automated follow-ups, A/B testing, and performance tracking ensure maximum engagement and conversion rates.",
      features: [
        "AI-powered email personalization",
        "Automated follow-up sequences",
        "A/B testing for optimal performance",
        "Deliverability optimization",
        "Detailed analytics and reporting"
      ],
      color: "bg-cyan-500"
    },
    {
      icon: <MessageCircle size={32} className="text-white" />,
      title: "Automated Social Media DMs",
      description: "Intelligent direct messaging systems for social media engagement",
      details: "Expand your reach with automated yet personalized direct messaging across social media platforms. Our systems identify potential customers, craft relevant messages, and manage conversations to build relationships and generate leads while maintaining authentic engagement.",
      features: [
        "Multi-platform support (LinkedIn, Instagram, Twitter)",
        "Prospect identification and targeting",
        "Personalized message crafting",
        "Conversation management and tracking",
        "Compliance with platform guidelines"
      ],
      color: "bg-blue-300"
    }
  ];

  const benefits = [
    {
      icon: <Zap size={24} className="text-cyan-400" />,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and free up your team for strategic work"
    },
    {
      icon: <Target size={24} className="text-blue-400" />,
      title: "Better Results",
      description: "AI-powered precision leads to higher conversion rates and ROI"
    },
    {
      icon: <Users size={24} className="text-cyan-300" />,
      title: "Enhanced Customer Experience",
      description: "24/7 availability and instant responses improve customer satisfaction"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-600 text-white">
      {/* Header */}
      <header className="bg-cyan-900/95 backdrop-blur-lg shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img 
              src="/Aturila_Systems_Ltd_Logo_copy-removebg-preview copy.png" 
              alt="Aturila Systems" 
              className="h-8 w-auto"
            />
            
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 hover:text-cyan-300 transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              Back to Home
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Comprehensive AI automation solutions designed to transform your business operations 
              and accelerate growth through intelligent technology.
            </p>
            <div className="mt-12">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-lg font-medium">
                Scroll down to explore our services
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-200">Our Mission</h2>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed italic">
              Our mission is to help businesses reach their full potential through integrating 
              efficient digital systems within their operations and marketing departments, achieving limitless growth whilst heading into the future of modern technology.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-12 items-center`}>
                <div className="lg:w-1/2 animate-fade-in-up">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                    <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-lg opacity-90 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-base opacity-80 leading-relaxed">
                      {service.details}
                    </p>
                  </div>
                </div>
                
                <div className="lg:w-1/2 animate-fade-in-up">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h4 className="text-xl font-bold mb-6 text-cyan-200">Key Features</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="opacity-90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Our Services?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our expert team delivers cutting-edge AI automation solutions that drive measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="opacity-90 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our proven process ensures successful implementation of AI automation solutions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="opacity-90">We analyze your current processes and identify automation opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Strategy</h3>
              <p className="opacity-90">We develop a customized automation strategy tailored to your business goals</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Implementation</h3>
              <p className="opacity-90">Our experts build and deploy your custom AI automation solutions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Optimization</h3>
              <p className="opacity-90">We monitor, refine, and optimize your systems for maximum performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-600 to-blue-500">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Transform your business with our comprehensive AI automation solutions. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Today
            </button>
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
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
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

export default ServicesPage;