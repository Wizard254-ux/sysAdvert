import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const testimonials = [
    {
      id: 0,
      name: "Grace Wanjiku",
      position: "Owner, Elegance Beauty Spa - Westlands",
      text: "InspireHub transformed our online presence completely. Our website is stunning and the online booking system has increased our appointments by 45%. Our clients love how easy it is to book services now.",
      avatar: "/client.png"
    },
    {
      id: 1,
      name: "David Kimani",
      position: "Manager, Mavazi Hair Studio - Karen",
      text: "The e-commerce integration was a game-changer for us. We can now sell our hair products online and reach customers across Kenya. Our revenue has grown by 70% since launching the website.",
      avatar: "/client1.png"
    },
    {
      id: 2,
      name: "Fatuma Hassan",
      position: "CEO, Nyota Nails & Beauty - Mombasa",
      text: "Professional service and excellent results. InspireHub understood our vision and created a website that perfectly represents our brand. The client management system has streamlined our operations significantly.",
      avatar: "/client2.png"
    },
    {
      id: 3,
      name: "Michael Ochieng",
      position: "Founder, Uzuri Cosmetics - Nairobi CBD",
      text: "Working with InspireHub was the best decision for our business. Their SEO expertise helped us rank #1 for 'cosmetics Nairobi' and we've seen a 200% increase in online orders.",
      avatar: "/client3.png"
    },

  ];

  const handleTestimonialChange = (index: number) => {
    setSelectedTestimonial(index);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 pt-0 px-4 relative py-16 md:py-24">
        
      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center md:mb-9">
          {/* Left Side */}
          <div>
            <p className="text-purple-600 text-sm font-medium tracking-wide uppercase mb-4">
              CLIENT SUCCESS STORIES
            </p>
           <h2
            className="text-[50px] font-bold text-gray-900 leading-[100%] tracking-normal mb-8"
            style={{ fontFamily: 'Volkhov, serif' }}
            >
            What Kenyan Beauty Businesses Say About Us.
            </h2>

            
            {/* Dots Navigation */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    selectedTestimonial === index ? 'bg-pink-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-lg shadow-xl p-8 relative z-10 border-l-4 border-pink-500">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={testimonials[selectedTestimonial].avatar}
                  alt={testimonials[selectedTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-pink-200"
                />
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                    "{testimonials[selectedTestimonial].text}"
                  </p>
                  {/* Star rating */}
                  <div className="flex space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dropdown for testimonial selection */}
            <div className="mt-6 relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors shadow-md"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonials[selectedTestimonial].avatar}
                    alt={testimonials[selectedTestimonial].name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">
                      {testimonials[selectedTestimonial].name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[selectedTestimonial].position}
                    </p>
                  </div>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-20">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={index}
                      onClick={() => handleTestimonialChange(index)}
                      className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-pink-50 transition-colors first:rounded-t-lg last:rounded-b-lg border-b border-gray-100 last:border-b-0"
                    >
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.position}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Background decorative element */}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-100 via-purple-50 to-transparent rounded-tr-3xl opacity-60"></div>
    </div>
  );
}