import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiCalendar, FiClock, FiMapPin, FiUser, FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function HomeVisitPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    date: '',
    time: '',
    testType: 'blood-test'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi, I want to book a home visit:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Address: ${formData.address}
Date: ${formData.date}
Time: ${formData.time}
Test Type: ${formData.testType}`;
    
    window.open(`https://wa.me/919360264347?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-100 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
              <span className="text-blue-600">Home Visit</span> Booking
            </h1>
            <p className="text-gray-600">
              Book diagnostic tests from the comfort of your home. NABL certified labs, accurate reports, and free home sample collection.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-lg p-4 shadow-md text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <FiHome className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-sm">Home Collection</h3>
              <p className="text-xs text-gray-600">Free sample collection at your doorstep</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <FiCalendar className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-sm">Flexible Timing</h3>
              <p className="text-xs text-gray-600">Choose your convenient time slot</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <FiClock className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-sm">Quick Reports</h3>
              <p className="text-xs text-gray-600">Get reports within 24-48 hours</p>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Book Your Home Visit</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <FiUser className="inline mr-1" size={14} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <FiPhone className="inline mr-1" size={14} />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FiMail className="inline mr-1" size={14} />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FiMapPin className="inline mr-1" size={14} />
                  Full Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your complete address"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <FiCalendar className="inline mr-1" size={14} />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <FiClock className="inline mr-1" size={14} />
                    Preferred Time *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    <option value="6:00 AM - 8:00 AM">6:00 AM - 8:00 AM</option>
                    <option value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</option>
                    <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                    <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</option>
                    <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
                    <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Test Type *
                </label>
                <select
                  name="testType"
                  value={formData.testType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="blood-test">Blood Test</option>
                  <option value="urine-test">Urine Test</option>
                  <option value="health-package">Health Package</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition flex items-center justify-center gap-2 font-medium"
              >
                <FaWhatsapp size={20} />
                Book via WhatsApp
              </button>

              <p className="text-xs text-gray-500 text-center">
                By booking, you agree to our terms and conditions. Our team will contact you to confirm the booking.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="font-semibold text-lg mb-3">Need Help?</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="tel:9360264347" className="flex items-center gap-1 text-blue-600 hover:underline">
                <FiPhone size={14} />
                9360264347
              </a>
              <a href="mailto:mukilan021@gmail.com" className="flex items-center gap-1 text-blue-600 hover:underline">
                <FiMail size={14} />
                mukilan021@gmail.com
              </a>
              <a href="https://wa.me/919360264347" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-green-600 hover:underline">
                <FaWhatsapp size={14} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
