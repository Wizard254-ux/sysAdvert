const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Facial Treatments",
      description: "Rejuvenating facial services including deep cleansing, anti-aging treatments, and customized skincare routines.",
      iconPlaceholder: "/face2.png"
    },
    {
      id: 2,
      title: "Hair Styling & Color",
      description: "Professional hair cutting, styling, coloring, and treatments to transform and maintain your perfect look.",
      iconPlaceholder: "/hair.png"
    },
    {
      id: 3,
      title: "Nail Care Services",
      description: "Complete manicure and pedicure services with gel polish, nail art, and therapeutic hand and foot treatments.",
      iconPlaceholder: "/nail1.png"
    },
    {
      id: 4,
      title: "Spa & Wellness",
      description: "Relaxing massage therapy, body treatments, and wellness packages designed to refresh and revitalize.",
      iconPlaceholder: "/spa.png"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-600 text-sm font-medium mb-2 tracking-wide">
            Premium Beauty Services
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Transform Your Look, Renew Your Spirit
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="relative bg-white flex justify-center items-center flex-col rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Purple/Pink decorative element for first and last items */}
              {(index === 0 || index === 3) && (
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-tl-3xl rounded-br-2xl opacity-80"></div>
              )}
              
              {/* Image container with gradient background */}
              <div className="mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center ">
                  <img 
                    src={service.iconPlaceholder} 
                    alt={service.title}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative dots */}
        <div className="flex justify-center mt-16 space-x-2">
          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;