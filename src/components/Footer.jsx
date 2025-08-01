
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8">
          {/* Clinic Info */}
          <div>
            <h3 className="text-2xl sm:text-xl font-bold mb-4">
              <span className="text-primary">Maxcare</span> Pain Clinic
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
              Providing specialized pain management services with compassionate care and modern treatment approaches.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl sm:text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="break-words">07777106344</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="break-words">admin@berkshirepainclinic.co.uk</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="break-words">Berkshire, UK</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl sm:text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm sm:text-base">
              <a href="/about" className="block text-gray-300 hover:text-primary transition-colors">
                About Dr. Ram Dhotarkar
              </a>
              <a href="/services" className="block text-gray-300 hover:text-primary transition-colors">
                Our Services
              </a>
              <a href="/faqs" className="block text-gray-300 hover:text-primary transition-colors">
                FAQs
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Maxcare Pain Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
