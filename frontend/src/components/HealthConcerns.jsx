import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiActivity, FiZap, FiHeart, FiDroplet, FiFilter, FiSun, FiX, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import api from '../services/api';

const colorMap = {
  'IMMUNOLOGY / SEROLOGY': 'bg-gradient-to-br from-blue-500 to-blue-600',
  'CLINICAL BIOCHEMISTRY': 'bg-gradient-to-br from-purple-500 to-purple-600',
  'PATHOLOGY': 'bg-gradient-to-br from-pink-500 to-pink-600',
  'MICROBIOLOGY': 'bg-gradient-to-br from-slate-600 to-slate-700',
  'IMMUNO-HEMATOLOGY': 'bg-gradient-to-br from-orange-500 to-orange-600',
  'HAEMATOLOGY': 'bg-gradient-to-br from-red-500 to-red-600',
  'CLINICAL PATHOLOGY': 'bg-gradient-to-br from-emerald-500 to-emerald-600',
  'MOLECULAR BIOLOGY': 'bg-gradient-to-br from-cyan-500 to-cyan-600',
};

const iconMap = {
  'IMMUNOLOGY / SEROLOGY': <FiActivity size={40} />,
  'CLINICAL BIOCHEMISTRY': <FiZap size={40} />,
  'PATHOLOGY': <FiHeart size={40} />,
  'MICROBIOLOGY': <FiDroplet size={40} />,
  'IMMUNO-HEMATOLOGY': <FiFilter size={40} />,
  'HAEMATOLOGY': <FiActivity size={40} />,
  'CLINICAL PATHOLOGY': <FiFilter size={40} />,
  'MOLECULAR BIOLOGY': <FiSun size={40} />,
};

const nameMap = {
  'IMMUNOLOGY / SEROLOGY': 'IMMUNOLOGY / SEROLOGY',
  'CLINICAL BIOCHEMISTRY': 'General Health',
  'PATHOLOGY': 'Blood Tests',
  'MICROBIOLOGY': 'MICROBIOLOGY',
  'IMMUNO-HEMATOLOGY': 'IMMUNO-HEMATOLOGY',
  'HAEMATOLOGY': 'HAEMATOLOGY',
  'CLINICAL PATHOLOGY': 'Kidney & Urine',
  'MOLECULAR BIOLOGY': 'MOLECULAR BIOLOGY',
};

export default function HealthConcerns() {
  const navigate = useNavigate();
  const [healthConcerns, setHealthConcerns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedConcern, setSelectedConcern] = useState(null);
  const [concernTests, setConcernTests] = useState([]);
  const [loadingTests, setLoadingTests] = useState(false);

  useEffect(() => {
    async function fetchHealthConcerns() {
      try {
        const response = await api.get('/tests');
        const tests = response.data;
        
        // Group by category
        const categoryMap = {};
        tests.forEach(test => {
          const category = test.category || 'GENERAL';
          if (!categoryMap[category]) {
            categoryMap[category] = { category, tests: 0 };
          }
          categoryMap[category].tests++;
        });
        
        const concerns = Object.values(categoryMap).slice(0, 8);
        setHealthConcerns(concerns);
      } catch (error) {
        console.error('Error fetching health concerns:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchHealthConcerns();
  }, []);

  const handleCardClick = async (concern) => {
    setSelectedConcern(concern);
    setLoadingTests(true);
    
    try {
      const response = await api.get('/tests');
      const filtered = response.data.filter(t => t.category === concern.category);
      setConcernTests(filtered);
    } catch (error) {
      console.error('Error fetching tests:', error);
    } finally {
      setLoadingTests(false);
    }
  };

  const closeModal = () => {
    setSelectedConcern(null);
    setConcernTests([]);
  };

  const handleBookTest = (test) => {
    const message = `Hi, I want to book ${test.name} test (₹${test.mrp})`;
    window.open(`https://wa.me/919360264347?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Health Concerns
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find tests based on your health concerns
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {healthConcerns.map((concern, index) => (
              <motion.div
                key={concern.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="cursor-pointer"
                onClick={() => handleCardClick(concern)}
              >
                <div className={`${colorMap[concern.category] || 'bg-gradient-to-br from-gray-500 to-gray-600'} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all aspect-square flex flex-col items-center justify-center text-center`}>
                  <div className="mb-4 flex items-center justify-center opacity-90">
                    {iconMap[concern.category] || <FiActivity size={40} />}
                  </div>
                  <h3 className="font-bold text-base md:text-lg mb-2 leading-tight px-2">
                    {nameMap[concern.category] || concern.category}
                  </h3>
                  <p className="text-sm opacity-90 font-medium">{concern.tests} Tests</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tests Modal */}
      <AnimatePresence>
        {selectedConcern && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col"
              >
                {/* Modal Header */}
                <div className={`${colorMap[selectedConcern.category] || 'bg-gradient-to-br from-gray-500 to-gray-600'} p-6 text-white flex-shrink-0`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="flex-shrink-0">
                        {iconMap[selectedConcern.category] || <FiActivity size={40} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-bold mb-1 truncate">
                          {nameMap[selectedConcern.category] || selectedConcern.category}
                        </h3>
                        <p className="text-sm opacity-90">
                          {selectedConcern.tests} Tests Available
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={closeModal}
                      className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors flex-shrink-0"
                      aria-label="Close"
                    >
                      <FiX size={24} />
                    </button>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 overflow-y-auto flex-1 bg-gray-50 dark:bg-gray-900">
                  {loadingTests ? (
                    <div className="flex items-center justify-center py-12">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                  ) : (
                    <>
                      <h4 className="text-lg font-semibold mb-5 text-gray-900 dark:text-white">
                        Available Tests ({concernTests.length}):
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {concernTests.map((test, index) => {
                          const sellingPrice = test.mrp;
                          const displayOriginalPrice = Math.round(test.mrp * 1.2);
                          const discount = Math.round(((displayOriginalPrice - sellingPrice) / displayOriginalPrice) * 100);

                          return (
                            <motion.div
                              key={test.id}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.03 }}
                              whileHover={{ y: -4 }}
                              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
                            >
                              {/* Test Header */}
                              <div className="mb-3">
                                <h5 className="font-bold text-base text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-[48px]">
                                  {test.name}
                                </h5>
                                {discount > 0 && (
                                  <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded">
                                    {discount}% OFF
                                  </span>
                                )}
                              </div>

                              {/* Test Details */}
                              <div className="space-y-2 mb-4 text-xs text-gray-600 dark:text-gray-400">
                                <div className="flex items-center gap-2">
                                  <FiActivity size={14} className="text-blue-600 flex-shrink-0" />
                                  <span>1 Parameters</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <FiClock size={14} className="text-teal-600 flex-shrink-0" />
                                  <span>{test.tat || '24 Hours'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <FiDroplet size={14} className="text-purple-600 flex-shrink-0" />
                                  <span>Blood</span>
                                </div>
                              </div>

                              {/* Fasting Badge */}
                              {test.fastingRequired && (
                                <div className="mb-3">
                                  <span className="inline-block px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-medium rounded">
                                    Fasting Required
                                  </span>
                                </div>
                              )}

                              {/* Pricing */}
                              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex items-baseline gap-2 mb-3">
                                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                                    ₹{sellingPrice}
                                  </span>
                                  {displayOriginalPrice > sellingPrice && (
                                    <span className="text-sm text-gray-500 line-through">
                                      ₹{displayOriginalPrice}
                                    </span>
                                  )}
                                </div>

                                {/* Book Button */}
                                <button
                                  onClick={() => handleBookTest(test)}
                                  className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                >
                                  <FaWhatsapp size={16} />
                                  Book on WhatsApp
                                </button>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
                  <div className="flex gap-3">
                    <button
                      onClick={closeModal}
                      className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => navigate('/tests')}
                      className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 rounded-lg transition-colors"
                    >
                      View All Tests
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
