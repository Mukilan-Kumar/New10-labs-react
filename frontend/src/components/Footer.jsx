import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/New10labs-logo.png" 
                alt="New10Labs Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm">
              India's most trusted diagnostic laboratory with NABL certified facilities.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/tests" className="hover:text-blue-400">Tests</a></li>
              <li><a href="/packages" className="hover:text-blue-400">Packages</a></li>
              <li><a href="/consultation" className="hover:text-blue-400">Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FiPhone size={16} />
                <a href="tel:9360264347" className="hover:text-blue-400">9360264347</a>
              </div>
              <div className="flex items-center gap-2">
                <FiMail size={16} />
                <a href="mailto:mukilan021@gmail.com" className="hover:text-blue-400">mukilan021@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin size={16} />
                <span>Chennai, 600102</span>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp size={16} />
                <a href="https://wa.me/919360264347" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 New10labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
