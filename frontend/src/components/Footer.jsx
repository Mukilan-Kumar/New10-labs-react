import { useNavigate } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const navigate = useNavigate();

  const handleLinkClick = (section) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/New10labs-logo.png" 
                alt="New10Labs Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm mb-4">
              India's most trusted diagnostic laboratory with NABL certified facilities.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => window.alert('About Us\n\nNew10Lab is India\'s trusted diagnostic laboratory providing quality healthcare services.')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('tests')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('packages')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Health Packages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/home-visit')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Book Home Visit
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => handleLinkClick('tests')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Pathology Tests
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('packages')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Health Checkups
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/home-visit')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Home Sample Collection
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/consultation')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Doctor Consultation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.alert('Corporate Wellness\n\nContact us for corporate health packages and wellness programs.')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Corporate Wellness
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FiPhone className="mt-1 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Customer Care</p>
                  <a 
                    href="tel:9360264347"
                    className="hover:text-blue-400 transition-colors"
                  >
                    9360264347
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <FiMail className="mt-1 text-teal-400 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:mukilan021@gmail.com"
                    className="hover:text-blue-400 transition-colors block"
                  >
                    mukilan021@gmail.com
                  </a>
                  <a 
                    href="tel:9360264347"
                    className="hover:text-blue-400 transition-colors block"
                  >
                    +91 9360264347
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <FiMapPin className="mt-1 text-purple-400 flex-shrink-0" />
                <button
                  onClick={() => window.open('https://maps.google.com/?q=152/3,6th Avenue,Anna Nagar East,Chennai', '_blank')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  152/3, 6th Avenue,<br />Anna Nagar East,<br />Chennai - 600 102
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; 2026 New10Lab. All rights reserved.</p>
            <div className="flex gap-6">
              <button 
                onClick={() => alert('🔒 Privacy Policy\n\nYour privacy is important to us. We are committed to protecting your personal information and health data.\n\nKey Points:\n✓ Data encryption\n✓ HIPAA compliant\n✓ Secure storage\n✓ No data sharing without consent\n\nFor full policy, contact: mukilan021@gmail.com')}
                className="hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => alert('📋 Terms of Service\n\nBy using our services, you agree to:\n\n✓ Provide accurate information\n✓ Follow test preparation guidelines\n✓ Payment terms and conditions\n✓ Report collection procedures\n\nFor complete terms, contact: mukilan021@gmail.com')}
                className="hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => alert('💰 Refund Policy\n\nWe offer refunds in the following cases:\n\n✓ Test cancellation before sample collection\n✓ Technical issues with report\n✓ Service not delivered\n\nRefund Process:\n• Request within 24 hours\n• Processed in 5-7 business days\n• Contact: mukilan021@gmail.com')}
                className="hover:text-blue-400 transition-colors"
              >
                Refund Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
