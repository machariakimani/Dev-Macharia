import React from 'react';
import { Monitor, Smartphone, CreditCard, MessageSquare, Zap, Globe, Shield, Palette } from 'lucide-react';
import Mobile from './assets/mobile.jpg';
import sms from './assets/sms.jpg';
import Webdev from './assets/web.jpg';
import payment from './assets/payment2.jpg';

function Services() {

  const openWhatsApp = () => {
    const phoneNumber = '254742310701'; 
    const message = `Hello Macharia! Let's discuss how we can bring my vision to life.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  }
  return (
    <div className="py-6 flex flex-col items-center justify-center gap-6 w-full h-full bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100" id='Services'>
      
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-black mb-2">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600">Services</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-3"></div>
        <p className="text-slate-800 text-lg max-w-2xl mx-auto">
          Transforming ideas into digital reality with cutting-edge technology
        </p>
      </div>

      {/* Services Grid */}
      <div className="lg:flex grid grid-cols-1 md:grid-cols-2 md:gap-x-3 gap-2 max-w-7xl mx-auto px-4">
        
        {/* Web Development Service */}
        <div className="group items-center flex flex-col md:hover:scale-105 transition-transform duration-300 ease-out will-change-transform lg:w-1/4 w-full p-6">
          {/* Optimized Image Container */}
          <div className="relative overflow-hidden p-2 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 ease-out mb-4">
           
            <img 
              src={Webdev} 
              className="h-48 w-full rounded-lg object-cover transition-transform duration-500 ease-out md:group-hover:scale-110" 
              loading="lazy"
              alt="Web Development"
            />
            <div className="absolute top-4 left-4 z-20 p-2 rounded-full bg-blue-400/90 backdrop-blur-sm border border-white/30">
              <Monitor className="w-5 h-5 text-white" />
            </div>
            
          </div>
          
          <h1 className="text-xl text-slate-900 font-bold mb-3 text-center md:group-hover:text-blue-400 transition-colors duration-300">
            Web & Software Development
          </h1>
          
          <p className="text-slate-700 text-sm text-center leading-relaxed mb-4">
            Create stunning, responsive websites and robust software solutions using modern technologies like React, Node.js, and cloud platforms. Full-stack development with SEO optimization and performance focus.
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="flex items-center gap-1 px-3 py-2 rounded-full bg-blue-500 text-white text-xs">
              <Globe className="w-3 h-3" />
              Responsive
            </span>
            <span className="flex items-center gap-1 px-3 py-2 rounded-full bg-purple-500 text-white text-xs">
              <Zap className="w-3 h-3" />
              Fast
            </span>
          </div>
        </div>

        {/* Mobile Development Service */}
        <div className="group items-center flex flex-col md:hover:scale-105 transition-transform duration-300 ease-out will-change-transform w-full lg:w-1/4 p-6">
          <div className="relative p-2 overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 ease-out mb-6">
            
            <img 
              src={Mobile} 
              className="h-48 w-full rounded-lg object-cover transition-transform duration-500 ease-out md:group-hover:scale-110" 
              loading="lazy"
              alt="Mobile Development"
            />
            <div className="absolute top-4 left-4 z-20 p-2 rounded-full bg-green-400/90 backdrop-blur-sm border border-white/30">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
           
          </div>
          
          <h1 className="text-xl text-slate-900 font-bold mb-2 text-center md:group-hover:text-green-400 transition-colors duration-300">
            Mobile Application Development
          </h1>
          
          <p className="text-slate-600 text-sm text-center leading-relaxed mb-4">
            Build powerful native and cross-platform mobile apps for iOS and Android using React Native, Flutter, and native development. App Store ready with exceptional user experience.
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="flex items-center gap-1 px-3 py-2 rounded-full bg-green-400 text-white text-xs">
              <Smartphone className="w-3 h-3" />
              Cross-Platform
            </span>
            <span className="flex items-center gap-1 px-3 py-2 rounded-full bg-blue-500 text-white text-xs">
              <Palette className="w-3 h-3" />
              Native Feel
            </span>
          </div>
        </div>

        {/* Payment Gateway Service */}
        <div className="group items-center flex flex-col md:hover:scale-105 transition-transform duration-300 ease-out will-change-transform w-full lg:w-1/4 p-6">
          <div className="relative overflow-hidden rounded-2xl p-2 bg-white/50 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 ease-out mb-6">
            
            <img 
              src={payment} 
              className="h-48 w-full rounded-lg object-cover transition-transform duration-500 ease-out md:group-hover:scale-110" 
              loading="lazy"
              alt="Payment Gateway"
            />
            <div className="absolute top-4 left-4 z-20 p-2 rounded-full bg-purple-500/90 backdrop-blur-sm border border-white/30">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            
          </div>
          
          <h1 className="text-xl text-slate-900 font-bold mb-3 text-center md:group-hover:text-purple-400 transition-colors duration-300">
            Payment Gateway Integration
          </h1>
          
          <p className="text-slate-600 text-sm text-center leading-relaxed mb-4">
            Seamlessly integrate secure payment solutions including M-Pesa, PayPal, Stripe with PCI compliance. Multi-currency support and real-time transaction processing for your business.
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="flex items-center gap-1 px-3 py-2 rounded-full bg-purple-500 text-white text-xs">
              <Shield className="w-3 h-3" />
              Secure
            </span>
            <span className="flex items-center gap-1 px-3 py-2 rounded-full bg-green-500 text-white text-xs">
              <CreditCard className="w-3 h-3" />
              M-Pesa
            </span>
          </div>
        </div>

        {/* SMS Integration Service */}
        <div className="group items-center flex flex-col md:hover:scale-105 transition-transform duration-300 ease-out will-change-transform w-full lg:w-1/4 p-6">
          <div className="relative overflow-hidden rounded-2xl p-2 bg-white/50 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 ease-out mb-6">
            <img 
              src={sms} 
              className="h-48 w-full rounded-lg object-cover transition-transform duration-500 ease-out md:group-hover:scale-110" 
              loading="lazy"
              alt="SMS Integration"
            />
            <div className="absolute top-4 left-4 z-20 p-2 rounded-full bg-orange-400/90 backdrop-blur-sm border border-white/30">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            
          </div>
          
          <h1 className="text-xl text-slate-900 font-bold mb-3 text-center md:group-hover:text-orange-400 transition-colors duration-300">
            Bulk SMS Integration
          </h1>
          
          <p className="text-slate-600 text-sm text-center leading-relaxed mb-4">
            Implement powerful bulk SMS solutions for marketing campaigns and notifications. Connect with popular SMS gateways, manage contacts, and track delivery rates with comprehensive analytics.
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="flex items-center gap-1 px-3 py-2 rounded-full bg-orange-500 text-white text-xs">
              <MessageSquare className="w-3 h-3" />
              Bulk SMS
            </span>
            <span className="flex items-center gap-1 px-3 py-2 rounded-full bg-blue-500 text-white text-xs">
              <Zap className="w-3 h-3" />
              Analytics
            </span>
          </div>
        </div>

      </div>

      {/* Bottom CTA Section */}
      <div className="text-center mt-5 max-w-4xl mx-auto px-4">
        <div className="relative p-4 rounded-3xl backdrop-blur-sm bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/20 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
          <div className="relative z-10">
            <h3 className="lg:text-3xl text-xl font-bold text-slate-800 mb-4">
              Ready to Transform Your Ideas?
            </h3>
            <p className="text-slate-600 mb-6 lg:text-lg">
              Let's discuss how we can bring your vision to life
            </p>
            <button onClick={openWhatsApp} className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95">
              Get Started Today
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Services;