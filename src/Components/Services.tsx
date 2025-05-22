import React from 'react';
import { Palette, Smartphone, Flower } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, bgColor }) => {
  return (
    <div className="flex items-start gap-4 mt-6">
      <div className={`p-4 rounded-lg ${bgColor}`}>
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-lg text-navy-900">{title}</h3>
        <p className="text-gray-600 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="w-full bg-white md:py-16 py-0 mb-6 md:mb-0 ">
      <div className=" mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side - Website mockups for beauty businesses */}
       <div className="lg:w-1/2 mb-10 lg:mb-0 bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-xl">
 <div className="relative">
   {/* Main website mockup */}
   <div className="bg-white rounded-lg shadow-xl overflow-hidden transform rotate-2">
     <div className="bg-gradient-to-r from-pink-400 to-purple-500 h-16 flex items-center px-4">
       <div className="flex space-x-2">
         <div className="w-3 h-3 bg-white/30 rounded-full"></div>
         <div className="w-3 h-3 bg-white/30 rounded-full"></div>
         <div className="w-3 h-3 bg-white/30 rounded-full"></div>
       </div>
       <div className="flex-1 text-center">
         <div className="bg-white/20 rounded px-4 py-1 inline-block">
           <span className="text-white text-sm font-medium " style={{fontFamily: 'Volkhov, serif'}}>BeautyStudio.com</span>
         </div>
       </div>
     </div>
<div className="p-6">
 <div className="text-center mb-6">
   <div className="text-2xl font-bold text-gray-800 mb-2" style={{fontFamily: 'Volkhov, serif'}}>Luxury Spa & Beauty</div>
   <div className="text-gray-600">Premium Beauty Services</div>
 </div>
 <div className="grid grid-cols-3 gap-4 mb-6">
   <div className="bg-pink-100 rounded p-3 text-center">
     <img src="/facial.png" alt="Facial treatment" className="w-12 h-12 rounded-full mx-auto mb-2 object-cover" />
     <div className="text-xs text-gray-700">Facial</div>
   </div>
   <div className="bg-purple-100 rounded p-3 text-center">
     <img src="/massage.png" alt="Massage therapy" className="w-12 h-12 rounded-full mx-auto mb-2 object-cover" />
     <div className="text-xs text-gray-700">Massage</div>
   </div>
   <div className="bg-blue-100 rounded p-3 text-center">
     <img src="/nail1.png" alt="Nail service" className="w-12 h-12 rounded-full mx-auto mb-2 object-cover" />
     <div className="text-xs text-gray-700">Nails</div>
   </div>
 </div>
 <div className="bg-pink-500 text-white text-center py-2 rounded font-medium">
   Book Appointment
 </div>
</div>
   </div>
   
   {/* Mobile mockup */}
 <div className="absolute -bottom-4 -right-4 w-24 h-40 bg-white rounded-lg shadow-lg transform -rotate-12 overflow-hidden">
 <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-8"></div>
 <div className="p-2 space-y-1">
   <div className="flex space-x-1 mb-2">
     <img src="/facial.png" alt="Facial" className="w-4 h-4 rounded object-cover" />
     <img src="/massage.png" alt="Massage" className="w-4 h-4 rounded object-cover" />
     <img src="/nail1.png" alt="Nails" className="w-4 h-4 rounded object-cover" />
   </div>
   <div className="h-2 bg-gray-200 rounded w-full"></div>
   <div className="h-2 bg-gray-200 rounded w-3/4"></div>
   <div className="h-4 bg-pink-400 rounded w-full mt-2"></div>
 </div>
</div>
 </div>
</div>
          
          {/* Right side - Content */}
          <div className="lg:w-1/2 lg:pl-12 ">
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4" style={{fontFamily: 'Volkhov, serif'}}>
                Transform Your Beauty<br />Business Online
              </h2>
            </div>
            
            <div className="space-y-6">
              <ServiceCard 
                icon={<Palette size={24} className="text-white" />}
                title="Custom Website Design"
                description="We create stunning, brand-focused websites tailored specifically for beauty salons, spas, and cosmetic businesses that reflect your unique style and attract clients."
                bgColor="bg-pink-500"
              />
              
              <ServiceCard 
                icon={<Smartphone size={24} className="text-white" />}
                title="Mobile-Responsive Development"
                description="Your website will look perfect on all devices. We ensure seamless user experience across smartphones, tablets, and desktops for maximum client engagement."
                bgColor="bg-purple-500"
              />
              
           <ServiceCard 
              icon={<Flower size={24} className="text-white" />}
              title="Spa Treatment Packages"
              description="Luxurious spa experiences including aromatherapy massages, hot stone treatments, and rejuvenating body wraps designed to restore balance and tranquility."
              bgColor="bg-purple-600"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute right-0 bottom-0 opacity-10">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(24)].map((_, i) => (
            <div 
              key={i} 
              className={`w-6 h-6 ${Math.random() > 0.5 ? 'text-pink-200' : 'text-transparent'}`}
            >
              ✨
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;