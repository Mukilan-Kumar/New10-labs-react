import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiActivity, FiSearch } from 'react-icons/fi';

export default function Hero() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-200 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 mb-4">
              <FiActivity className="text-blue-600" size={18} />
              <span>India's Trusted Diagnostic Lab</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="text-blue-600">Home Collections</span>
              <br />
              <span className="text-gray-900">Made Easy</span>
            </h1>

            <p className="text-base text-gray-700 mb-6 max-w-xl">
              Book diagnostic tests from the comfort of your home. NABL certified labs, accurate reports, and free home sample collection.
            </p>

            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
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
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                />
              </div>
            </div>

            {/* Book Home Visit Button */}
            <button
              onClick={() => navigate('/home-visit')}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 font-medium text-sm"
            >
              <FiHome size={18} />
              Book Home Visit
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=700&h=500&fit=crop"
                alt="Healthcare Professional"
                className="w-full h-[380px] object-cover"
              />
              
              {/* Floating Badge - Quality Testing */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute top-6 left-4 bg-white rounded-xl shadow-lg p-3 max-w-[160px]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center text-xl">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-xs">Quality Testing</p>
                    <p className="text-[10px] text-gray-500">Accurate Results</p>
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
