import { useState } from 'react';
import { Mail, Phone, User, MessageSquare } from 'lucide-react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      description: ''
    });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="mx-4 bg-gradient-to-tr from-pink-50 to-purple-50 relative">
      {/* Contact Form Section */}
      <div className=" rounded-t-lg px-8 py-12 relative">
        {/* Decorative icon in top right */}
        <div className="absolute top-4 right-4">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-50 to-purple-50  rounded-full flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <span
            className="text-[27px] font-semibold text-gray-700 leading-[54px] tracking-normal mb-8 text-center block"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Ready to Transform Your Beauty Business Online?
          </span>
          <p className="text-gray-600 mb-8">
            Get in touch with us today and let's discuss how we can create the perfect website for your beauty business.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
            {/* Name Input */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            {/* Phone Input */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            {/* Description Textarea */}
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
              <textarea
                name="description"
                placeholder="Tell us about your beauty business and what kind of website you need..."
                value={formData.description}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-white px-8 py-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  INSPire<span className="text-blue-800">hub</span>
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creating stunning websites for beauty businesses across Kenya. Transform your digital presence and grow your business online.
              </p>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2">
                <li><button className="text-gray-600 hover:text-pink-500 text-sm text-left transition-colors">Website Design</button></li>
                <li><button className="text-gray-600 hover:text-pink-500 text-sm text-left transition-colors">E-commerce Development</button></li>
                <li><button className="text-gray-600 hover:text-pink-500 text-sm text-left transition-colors">Online Booking Systems</button></li>
                <li><button className="text-gray-600 hover:text-pink-500 text-sm text-left transition-colors">SEO & Digital Marketing</button></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><button className="text-gray-600 hover:text-pink-500 text-sm text-left transition-colors">About Us</button></li>
                <li><button className="text-gray-600 hover:text-pink-500 text-sm text-left transition-colors">Portfolio</button></li>
                <li><button className="text-gray-600 hover:text-pink-500 text-sm text-left transition-colors">Case Studies</button></li>
                <li><button className="text-gray-600 hover:text-pink-500 text-sm text-left transition-colors">Careers</button></li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact Info</h4>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-600 text-sm">📍 Machakos, Kenya</li>
                <li className="text-gray-600 text-sm">📞 +254 700 123 456</li>
                <li className="text-gray-600 text-sm">✉️ beauty@inspirehub.co.ke</li>
              </ul>
              
        

              {/* Working Hours */}
              <div>
                <p className="text-gray-600 text-sm mb-2 font-medium">Working Hours</p>
                <p className="text-gray-500 text-xs">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-500 text-xs">Sat: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-8 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 InspireHub. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}