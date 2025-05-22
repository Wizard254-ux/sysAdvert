
const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Website Design & Branding",
      description: "Create stunning, professional websites that reflect your beauty brand's unique identity and attract your ideal clients.",
      iconPlaceholder: "/design-icon.png"
    },
    {
      id: 2,
      title: "Online Booking System",
      description: "Streamline appointments with integrated booking systems that allow clients to schedule services 24/7.",
      iconPlaceholder: "/booking-icon.png"
    },
    {
      id: 3,
      title: "E-commerce Integration",
      description: "Sell beauty products and gift cards online with secure payment processing and inventory management.",
      iconPlaceholder: "/ecommerce-icon.png"
    },
    {
      id: 4,
      title: "SEO & Digital Marketing",
      description: "Boost your online visibility and attract more local clients through search engine optimization and digital marketing.",
      iconPlaceholder: "/seo-icon.png"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-600 text-sm font-medium mb-2 tracking-wide">
            Web Development Services
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Elevate Your Beauty Business Online
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
              
              {/* Icon placeholder with gradient background */}
              <div className="mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center">
                  {/* SVG Icons for each service */}
                  {index === 0 && (
                    <svg className="w-12 h-12 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-12 h-12 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                  )}
                  {index === 3 && (
                    <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                  )}
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