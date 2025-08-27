import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calculator, Clock, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function PricingPage() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pricingFeatures = [
    {
      icon: <Calculator size={24} className="text-cyan-400" />,
      title: "Custom Pricing",
      description: "Every project is unique, so our pricing is tailored to your specific needs and requirements"
    },
    {
      icon: <Clock size={24} className="text-blue-400" />,
      title: "Transparent Process",
      description: "Pricing is discussed during your first meeting and finalized when project plans are confirmed"
    },
    {
      icon: <Shield size={24} className="text-cyan-300" />,
      title: "Ongoing Support",
      description: "12-month contracts include hosting, maintenance, updates, and issue resolution"
    }
  ];

  const setupPricing = [
    {
      type: "Small Integrations",
      description: "Single AI chatbots or simple automation tools",
      price: "£300 - £1,500",
      features: [
        "Basic AI chatbot setup",
        "Simple automation workflows",
        "Standard integrations",
        "Initial configuration and testing"
      ]
    },
    {
      type: "Full Projects",
      description: "Comprehensive AI automation systems and custom solutions",
      price: "£1,500 - £8,000",
      features: [
        "Complete automation systems",
        "Custom website development",
        "Multiple AI integrations",
        "Advanced workflow automation",
        "Comprehensive testing and deployment"
      ]
    }
  ];

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
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Pricing</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Flexible pricing tailored to your business needs and project complexity. 
              Every solution is custom-built, so every price is personalized.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              We believe in transparent, fair pricing that reflects the true value and complexity of your project. 
              Rather than one-size-fits-all packages, we work with you to understand your specific needs and 
              provide pricing that matches the scope and scale of your automation requirements.
            </p>
          </div>
        </div>
      </section>

      {/* How Pricing Works */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How Our Pricing Works</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our pricing structure is designed to be transparent and fair, with costs determined by project complexity and scope
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="opacity-90 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Initial Consultation</h3>
              <p className="opacity-90">We discuss your needs, goals, and project requirements in detail</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Project Assessment</h3>
              <p className="opacity-90">We analyze the complexity and scope to determine accurate pricing</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Proposal & Agreement</h3>
              <p className="opacity-90">We present a detailed proposal with transparent pricing breakdown</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Project Delivery</h3>
              <p className="opacity-90">We build and deploy your solution with ongoing support included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Pricing */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Setup Pricing</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              One-time setup costs vary based on project size and complexity. Here's our general pricing structure:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {setupPricing.map((tier, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-cyan-200">{tier.type}</h3>
                <p className="text-lg opacity-90 mb-6">{tier.description}</p>
                <div className="text-3xl font-bold mb-6 text-white">{tier.price}</div>
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="opacity-90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Support */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ongoing Support & Maintenance</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              After your project is complete, we offer comprehensive 12-month contracts to keep your systems running smoothly
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 text-cyan-200">Monthly Support Plans</h3>
                <div className="text-4xl font-bold mb-4">£60 - £500 <span className="text-lg font-normal opacity-70">per month</span></div>
                <p className="text-lg opacity-90">Pricing depends on project size and complexity</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-cyan-200">What's Included</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="opacity-90">24/7 system monitoring and hosting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="opacity-90">Regular software updates and patches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="opacity-90">Issue resolution and bug fixes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="opacity-90">Performance optimization</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-cyan-200">Support Benefits</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="opacity-90">Priority technical support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="opacity-90">System backup and recovery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="opacity-90">Security updates and monitoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="opacity-90">Monthly performance reports</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-cyan-400/20 border border-cyan-400/30 rounded-2xl p-6 text-center">
              <h4 className="text-xl font-bold mb-2 text-cyan-200">12-Month Contract</h4>
              <p className="opacity-90">
                Our support contracts run for 12 months, ensuring your systems remain up-to-date and fully operational. 
                Contract terms and pricing are finalized during the project planning phase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Pricing Works */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-600 to-blue-500">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Our Pricing Model Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-cyan-200">No Hidden Costs</h3>
                <p className="opacity-90 leading-relaxed">
                  Everything is discussed upfront during your consultation. You'll know exactly what you're paying for and why.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-cyan-200">Value-Based Pricing</h3>
                <p className="opacity-90 leading-relaxed">
                  Our pricing reflects the value and complexity of your project, ensuring you get the best return on investment.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-cyan-200">Flexible Solutions</h3>
                <p className="opacity-90 leading-relaxed">
                  Whether you need a simple integration or a comprehensive system, our pricing scales with your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Discuss Your Project?</h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Get a personalized quote based on your specific needs. Our first consultation is always free, 
              and we'll provide transparent pricing before any work begins.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto group"
            >
              Schedule Your Free Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
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

export default PricingPage;