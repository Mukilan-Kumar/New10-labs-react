import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiActivity, FiSearch } from 'react-icons/fi';

export default function Hero() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-100 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 mb-6 shadow-sm">
              <FiActivity className="text-cyan-500" size={16} />
              <span>India's Trusted Diagnostic Lab</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Home Collections
              </span>
              <br />
              <span className="text-gray-900">Made Easy</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Book diagnostic tests from the comfort of your home. NABL certified labs, accurate reports, and free home sample collection.
            </p>

            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search for tests or packages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && searchQuery) {
                      navigate(`/tests?search=${searchQuery}`);
                    }
                  }}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 bg-white focus:border-cyan-500 focus:outline-none shadow-lg"
                />
              </div>
            </div>

            {/* Book Home Visit Button */}
            <button
              onClick={() => navigate('/home-visit')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-xl transition-all flex items-center gap-2 font-semibold"
            >
              <FiHome size={20} />
              Book Home Visit
            </button>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-6 mt-12 max-w-md">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-3">
                  <FiHome className="text-white" size={24} />
                </div>
                <p className="font-semibold text-gray-900">Home Visit</p>
                <p className="text-sm text-gray-500">Available</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center mb-3">
                  <FiActivity className="text-white" size={24} />
                </div>
                <p className="font-semibold text-gray-900">Chennai</p>
                <p className="text-sm text-gray-500">600102</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop"
                alt="Healthcare Professional"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              
              {/* Floating Badge - Quality Testing */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 left-4 bg-white rounded-2xl shadow-xl p-4 max-w-[180px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Quality Testing</p>
                    <p className="text-xs text-gray-500">Accurate Results</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Home Visit */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-8 right-4 bg-white rounded-2xl shadow-xl p-4 max-w-[180px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <FiHome className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Home Visit</p>
                    <p className="text-xs text-gray-500">Safe & Convenient</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
