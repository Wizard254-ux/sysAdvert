import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const BeautyBusinessesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const businesses = [
    {
      id: 1,
      name: "Elegance Beauty Spa",
      type: "Premium Spa & Wellness",
      image: "/beauty.png",
      description: "Elevated their online presence with a stunning website and booking system, resulting in 40% more appointments.",
      rating: 5,
      location: "Westlands, Nairobi"
    },
    {
      id: 2,
      name: "Mavazi Hair Studio",
      type: "Modern Hair Salon",
      image: "/beauty1.png",
      description: "Transformed their business with e-commerce integration, now selling products online and increasing revenue by 60%.",
      rating: 5,
      location: "Karen, Nairobi"
    },
    {
      id: 3,
      name: "Glow Medical Spa",
      type: "Medical Spa & Aesthetics",
      image: "/beauty2.png",
      description: "Professional website design and SEO optimization brought in 3x more local clients within 6 months.",
      rating: 5,
      location: "Kilimani, Nairobi"
    },
    {
      id: 4,
      name: "Nyota Nails & Beauty",
      type: "Nail Salon & Spa",
      image: "/beauty6.png",
      description: "Streamlined operations with online booking and client management system, improving customer satisfaction.",
      rating: 5,
      location: "Mombasa, Kenya"
    },
    {
      id: 5,
      name: "Uzuri Cosmetics",
      type: "Beauty Boutique",
      image: "/beauty.png",
      description: "Custom e-commerce platform helped them expand from Nairobi to nationwide, increasing sales by 200%.",
      rating: 5,
      location: "CBD, Nairobi"
    },
    {
      id: 6,
      name: "Amani Wellness Center",
      type: "Holistic Beauty & Wellness",
      image: "/beauty4.png",
      description: "Integrated wellness booking platform and educational content increased client retention by 45%.",
      rating: 5,
      location: "Kisumu, Kenya"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % businesses.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + businesses.length) % businesses.length);
  };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Get visible businesses (3 at a time)
  const getVisibleBusinesses = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % businesses.length;
      visible.push(businesses[index]);
    }
    return visible;
  };

  return (
    <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Beauty Businesses Trust InspireHub
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how we've helped beauty businesses transform their online presence and grow their revenue with custom web solutions.
          </p>
        </div>
        
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getVisibleBusinesses().map((business) => (
                <div 
                  key={business.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Business Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={business.image} 
                      alt={business.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{business.name}</h3>
                      <p className="text-sm opacity-90">{business.type}</p>
                    </div>
                  </div>
                  
                  {/* Business Content */}
                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(business.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-blue-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">{business.location}</span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {business.description}
                    </p>
                    
                 
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 z-10"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 z-10"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {businesses.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-pink-500 scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl p-2 shadow-md">
            <div className="text-3xl font-bold text-pink-500 mb-2">50+</div>
            <div className="text-gray-600">Kenyan Beauty Businesses Served</div>
          </div>
          <div className="bg-white rounded-xl p-2 shadow-md">
            <div className="text-3xl font-bold text-purple-500 mb-2">95%</div>
            <div className="text-gray-600">Client Satisfaction Rate</div>
          </div>
          <div className="bg-white rounded-xl p-2 shadow-md">
            <div className="text-3xl font-bold text-blue-500 mb-2">60%</div>
            <div className="text-gray-600">Average Revenue Increase</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautyBusinessesCarousel;