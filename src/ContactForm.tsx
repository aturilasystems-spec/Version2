import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

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

      {/* Contact Form Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
              <p className="text-xl opacity-90">
                Ready to transform your business with AI automation? Let's start the conversation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="animate-fade-in-up">
                  <h2 className="text-2xl font-bold mb-6 text-cyan-200">Contact Information</h2>
                  <p className="text-lg opacity-90 leading-relaxed mb-8">
                    We're here to help you unlock the power of AI automation. Reach out to us through 
                    any of the channels below, and our team will get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-cyan-400 w-12 h-12 rounded-full flex items-center justify-center">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                      <p className="opacity-90">hello@aturilasystems.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                      <p className="opacity-90">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-cyan-300 w-12 h-12 rounded-full flex items-center justify-center">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Visit Us</h3>
                      <p className="opacity-90">123 Innovation Drive<br />Tech City, TC 12345</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-8">
                  <h3 className="text-xl font-bold mb-4 text-cyan-200">Why Choose Aturila Systems?</h3>
                  <ul className="space-y-2 opacity-90">
                    <li>• Expert team with 10+ years of AI experience</li>
                    <li>• 98% client satisfaction rate</li>
                    <li>• 24/7 support and monitoring</li>
                    <li>• Custom solutions tailored to your needs</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-cyan-200">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 opacity-90">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 opacity-90">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 opacity-90">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2 opacity-90">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 opacity-90">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 opacity-90">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200 resize-none"
                      placeholder="Tell us about your project, goals, and how we can help transform your business with AI automation..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-cyan-600 py-4 px-6 rounded-lg font-semibold hover:bg-cyan-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </form>

                <p className="text-sm opacity-70 mt-4 text-center">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
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

export default ContactForm;