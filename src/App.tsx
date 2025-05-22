import { useState } from 'react';
import './index.css';
import Services from './Components/Services'
import ServicesSection from './Components/ServiceSection'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer';
import BeautyBusinessesCarousel from './Components/whyChooseUs'


export default function TruckRoutingApp() {
  const [activeTab, setActiveTab] = useState('home');
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    
    // Smooth scroll to specific sections
    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    // Map tabs to section IDs
    switch(tab) {
      case 'home':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'services':
        scrollToSection('services-section');
        break;
      case 'portfolio':
        scrollToSection('portfolio-section');
        break;
      case 'testimonials':
        scrollToSection('testimonials-section');
        break;
      case 'contact':
        scrollToSection('contact-section');
        break;
      default:
        break;
    }
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header / Navigation */}
      <header className=" px-1 py-6 stciky top-0 sticky z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center  md:mb-0">
            <h1 className="md:text-3xl text-xl font-bold text-navy-900">Spa<span className="text-blue-900">pro.</span></h1>
            <div className="h-3 w-3 bg-yellow-500 rounded-full ml-1 mb-2"></div>
          </div>
          
         <nav className="flex flex-row justify-center sm:gap-1 ">
  <button 
    onClick={() => handleTabChange('home')}
    className={`w-18 sm:w-24 h-8 sm:h-10 rounded text-xs sm:text-base transition-all border ${
      activeTab === 'home' 
        ? 'bg-gray-100 border-gray-300 font-medium' 
        : 'hover:bg-gray-50 border-transparent'
    }`}
        >
          Home
        </button>
        
        <button 
          onClick={() => handleTabChange('services')}
          className={`w-18 sm:w-24 h-8 sm:h-10 rounded text-xs sm:text-base transition-all border ${
            activeTab === 'services' 
              ? 'bg-gray-100 border-gray-300 font-medium' 
              : 'hover:bg-gray-50 border-transparent'
          }`}
        >
          Services
        </button>

        <button 
          onClick={() => handleTabChange('portfolio')}
          className={`w-18 sm:w-24 h-8 sm:h-10 rounded text-xs sm:text-base transition-all border ${
            activeTab === 'portfolio' 
              ? 'bg-gray-100 border-gray-300 font-medium' 
              : 'hover:bg-gray-50 border-transparent'
          }`}
        >
          Features
        </button>

        <button 
          onClick={() => handleTabChange('testimonials')}
          className={`w-18 sm:w-24 h-8 sm:h-10 rounded text-xs sm:text-base transition-all border ${
            activeTab === 'testimonials' 
              ? 'bg-gray-100 border-gray-300 font-medium' 
              : 'hover:bg-gray-50 border-transparent'
          }`}
        >
          Reviews
        </button>

        <button 
          onClick={() => handleTabChange('contact')}
          className={`w-18 sm:w-24 h-8 sm:h-10 rounded text-xs sm:text-base transition-all border ${
            activeTab === 'contact' 
              ? 'bg-gray-100 border-gray-300 font-medium' 
              : 'hover:bg-gray-50 border-transparent'
          }`}
        >
          Contact
        </button>
      </nav>

        </div>
      </header>
      
      {/* Main Content */}
      <main className="">
        {/* Hero Section */}
        <section id="home-section" className="relative overflow-hidden ">
       <div className="max-w-7xl mx-auto px-4 py-2 md:py-4">
  <div className="max-w-7xl mx-auto px-4 py-1 md:py-2">
    <div className="flex flex-col lg:flex-row items-end justify-between">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 mb-4 md:mb-8 lg:mb-0 z-10">
        <div className="text-purple-500 font-bold mb-1 text-sm md:text-lg lg:text-xl tracking-wide">
          CUSTOM WEB SOLUTIONS FOR BEAUTY BUSINESSES
        </div>
       
          
   <div className="font-bold text-navy-900 leading-tight flex flex-col space-y-1 md:space-y-2">
 <div className="relative inline-block">
   <span style={{fontFamily: 'Volkhov, serif'}} className="text-2xl md:text-4xl lg:text-5xl">Design,</span>
   <div className="absolute -bottom-1.5 md:-bottom-2 lg:-bottom-3 left-0 w-1/2 md:w-1/2 lg:w-2/3 h-1.5 md:h-2 lg:h-3 bg-blue-500 rounded-sm"></div>
 </div>
 <div className="relative inline-block ml-3 md:ml-8 lg:ml-12">
   <span style={{fontFamily: 'Volkhov, serif'}} className="text-2xl md:text-4xl lg:text-5xl">Develop</span>
   <div className="absolute -bottom-1.5 md:-bottom-2 lg:-bottom-3 left-0 w-1/2 md:w-1/2 lg:w-2/3 h-1.5 md:h-2 lg:h-3 bg-blue-500 rounded-sm"></div>
 </div>
 <div className="relative inline-block ml-6 md:ml-16 lg:ml-24">
   <span style={{fontFamily: 'Volkhov, serif'}} className="text-2xl md:text-4xl lg:text-5xl">Deliver</span>
   <div className="absolute -bottom-1.5 md:-bottom-2 lg:-bottom-3 left-0 w-1/2 md:w-1/2 lg:w-2/3 h-1.5 md:h-2 lg:h-3 bg-blue-500 rounded-sm"></div>
 </div>
</div>
       
       <p className="text-gray-600 my-5 md:my-6 lg:my-8 text-sm md:text-base lg:text-lg max-w-xl">
         Spapro creates stunning, customized websites for beauty salons, spas, 
         and cosmetic businesses. Transform your digital presence with our tailored 
         web solutions that attract clients and grow your beauty business.
       </p>
       
       <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
         <button onClick={()=>handleTabChange('services')} className=" px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-blue-600 text-white font-medium text-sm md:text-base rounded-md hover:bg-blue-800 transition-colors shadow-lg">
           Get Started
         </button>
         <button onClick={()=>handleTabChange('contact')} className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 border border-gray-300 text-gray-700 font-medium text-sm md:text-base rounded-md hover:bg-gray-50 transition-colors">
           Contact Us
         </button>
       </div>
     </div>
     
     {/* Right Content - Tech/Web Development themed */}
    <div className="flex-1 lg:w-1/2 relative hidden md:block bg-[url('/your-image.jpg')] bg-cover bg-center">
<div className="flex-1  relative hidden md:block ">
 <div className='relative flex items-center justify-center'>
   {/* Website mockup containers */}
   <div className="relative z-10">
     {/* Main website mockup */}
     <div className="bg-white rounded-lg shadow-2xl p-3 md:p-4 lg:p-6 transform rotate-3 w-48 h-40 md:w-64 md:h-48 lg:w-80 lg:h-64">
       <div className="bg-gradient-to-r from-pink-400 to-purple-500 h-8 md:h-12 lg:h-16 rounded-t-md mb-2 md:mb-3 lg:mb-4 flex items-center justify-center">
         <span className="text-white text-xs md:text-sm font-medium">Beauty Studio</span>
       </div>
       <div className="space-y-1.5 md:space-y-2 lg:space-y-3">
         {/* Service images row - made bigger */}
         <div className="flex space-x-1 md:space-x-2 justify-center">
           <img src="/facial.png" alt="Facial" className="w-8 h-6 md:w-12 md:h-9 lg:w-16 lg:h-12 rounded object-cover" />
           <img src="/massage.png" alt="Massage" className="w-8 h-6 md:w-12 md:h-9 lg:w-16 lg:h-12 rounded object-cover" />
           <img src="/nails.png" alt="Nails" className="w-8 h-6 md:w-12 md:h-9 lg:w-16 lg:h-12 rounded object-cover" />
         </div>
         <div className="h-1.5 md:h-2 lg:h-3 bg-gray-200 rounded w-3/4"></div>
         <div className="h-1.5 md:h-2 lg:h-3 bg-gray-200 rounded w-1/2"></div>
         <div className="flex space-x-1 md:space-x-2 mt-2 md:mt-3 lg:mt-4">
           <div className="h-4 md:h-6 lg:h-8 bg-pink-400 rounded w-12 md:w-16 lg:w-20 flex items-center justify-center">
             <span className="text-xs text-white hidden lg:block">Book</span>
           </div>
           <div className="h-4 md:h-6 lg:h-8 bg-purple-400 rounded w-12 md:w-16 lg:w-20 flex items-center justify-center">
             <span className="text-xs text-white hidden lg:block">Call</span>
           </div>
         </div>
       </div>
     </div>
     
     {/* Secondary website mockup */}
     <div className="absolute -top-4 md:-top-6 lg:-top-8 -right-4 md:-right-6 lg:-right-8 bg-white rounded-lg shadow-xl p-2 md:p-3 lg:p-4 transform -rotate-6 w-40 h-32 md:w-52 md:h-40 lg:w-64 lg:h-48">
       <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-6 md:h-9 lg:h-12 rounded-t-md mb-1.5 md:mb-2 lg:mb-3 flex items-center justify-center">
         <span className="text-white text-xs font-medium">Spa Mobile</span>
       </div>
       <div className="space-y-1 md:space-y-1.5 lg:space-y-2">
         {/* Bigger service preview images */}
         <div className="flex space-x-1 justify-center">
           <img src="/facial.png" alt="Service" className="w-6 h-6 md:w-6 md:h-5 lg:w-8 lg:h-6 rounded object-cover" />
           <img src="/massage.png" alt="Service" className="w-6 h-6 md:w-6 md:h-5 lg:w-8 lg:h-6 rounded object-cover" />
         </div>
         <div className="h-1 md:h-1.5 lg:h-2 bg-gray-200 rounded w-2/3"></div>
         <div className="h-1 md:h-1.5 lg:h-2 bg-gray-200 rounded w-1/3"></div>
         <div className="h-1 md:h-1.5 lg:h-2 bg-gray-200 rounded w-3/4"></div>
       </div>
     </div>
   </div>
   
   {/* Floating tech elements */}
   <div className="absolute top-0 left-0 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-blue-500 rounded opacity-20 animate-pulse"></div>
   <div className="absolute bottom-6 md:bottom-8 lg:bottom-10 left-4 md:left-6 lg:left-8 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 bg-purple-500 rounded opacity-30 animate-pulse delay-1000"></div>
   <div className="absolute top-8 md:top-12 lg:top-16 right-0 w-5 h-5 md:w-7 md:h-7 lg:w-10 lg:h-10 bg-pink-500 rounded opacity-25 animate-pulse delay-500"></div>
   
   {/* Code brackets decoration */}
   <div className="absolute -bottom-2 md:-bottom-3 lg:-bottom-4 -left-2 md:-left-3 lg:-left-4 text-3xl md:text-4xl lg:text-6xl text-blue-500 opacity-10 font-mono">{"</>"}</div>
   <div className="absolute -top-2 md:-top-3 lg:-top-4 -right-2 md:-right-3 lg:-right-4 text-2xl md:text-3xl lg:text-4xl text-purple-500 opacity-15 font-mono">{"{ }"}</div>
 </div>
</div>
</div>
   </div>
 </div>
</div>
        </section>

        <div id="services-section">
          <Services/>
        </div>
        
        <div id="portfolio-section">
          <ServicesSection/>
        </div>
        
        <BeautyBusinessesCarousel/>
        
        <div id="testimonials-section">
          <Testimonials/>
        </div>
      </main>

      <div id="contact-section">
        <Footer/>
      </div>
     
    </div>
  );
}