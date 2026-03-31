import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiActivity, FiSearch } from 'react-icons/fi';

export default function Hero() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/BLLOD SAMPLE.jpg',
    '/BLLOD SAMPLE (1).jpg'
  ];

  // Image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tests?search=${searchQuery}`);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-teal-100 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 md:py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-teal-400/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4 flex items-center gap-2 w-fit">
              <FiActivity size={16} />
              <span>India's Trusted Diagnostic Lab</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 bg-clip-text text-transparent">
                Home Collections
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Made Easy</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
              Book diagnostic tests from the comfort of your home. NABL certified labs, accurate reports, and free home sample collection.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mb-8">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search for tests or packages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all shadow-lg"
                />
              </div>
            </form>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/home-visit')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                <FiHome size={20} />
                Book Home Visit
              </button>
            </div>

            {/* Quality Highlights */}
            <div className="grid grid-cols-2 gap-6 mt-12 max-w-md">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <FiHome className="text-white" size={28} />
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Home Visit</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Available</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                  <FiActivity className="text-white" size={28} />
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Chennai</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">600102</p>
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
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
              {/* Crossfading Images */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <img
                    src={images[currentImageIndex]}
                    alt="Blood Sample Testing"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-4 -left-2 md:top-8 md:-left-4 bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-2xl p-3 md:p-4 max-w-[160px] md:max-w-[200px] border-2 border-teal-200 dark:border-teal-800"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-teal-400 to-cyan-500 dark:bg-teal-900 rounded-lg md:rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg">
                  ✓
                </div>
                <div>
                  <p className="font-semibold text-xs md:text-sm">Quality Testing</p>
                  <p className="text-[10px] md:text-xs text-gray-500">Accurate Results</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-4 -right-2 md:bottom-8 md:-right-4 bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-2xl p-3 md:p-4 max-w-[160px] md:max-w-[200px] border-2 border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-400 to-cyan-500 dark:bg-blue-900 rounded-lg md:rounded-xl flex items-center justify-center">
                  <FiHome size={20} className="text-white md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="font-semibold text-xs md:text-sm">Home Visit</p>
                  <p className="text-[10px] md:text-xs text-gray-500">Safe & Convenient</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
