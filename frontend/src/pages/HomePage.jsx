import { motion } from 'framer-motion';
import { FiHome, FiActivity, FiPackage, FiUserCheck } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import TestCard from '../components/TestCard';
import PackageCard from '../components/PackageCard';
import HealthConcerns from '../components/HealthConcerns';
import TrustSection from '../components/TrustSection';
import { useState, useEffect } from 'react';
import api from '../services/api';

export default function HomePage() {
  const navigate = useNavigate();
  const [tests, setTests] = useState([]);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [testsRes, packagesRes] = await Promise.all([
        api.get('/tests'),
        api.get('/packages')
      ]);
      setTests(testsRes.data.slice(0, 8));
      setPackages(packagesRes.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Hero />

      {/* Frequently Booked Tests */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              Frequently Booked Tests
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Most popular diagnostic tests with up to 77% discount
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Loading tests...</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {tests.map((test) => (
                  <TestCard key={test.id} test={test} />
                ))}
              </div>
              <div className="text-center">
                <button
                  onClick={() => navigate('/tests')}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  View All Tests
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Popular Health Packages */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              Popular Health Packages
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Comprehensive health checkup packages at best prices
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Loading packages...</p>
            </div>
          ) : (
            <div className="relative">
              {/* Left Arrow */}
              <button
                onClick={() => {
                  const container = document.getElementById('packages-scroll-container');
                  if (container) {
                    container.scrollBy({ left: -300, behavior: 'smooth' });
                  }
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-xl rounded-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hover:scale-110 border-2 border-gray-200 dark:border-gray-700"
                aria-label="Scroll left"
              >
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => {
                  const container = document.getElementById('packages-scroll-container');
                  if (container) {
                    container.scrollBy({ left: 300, behavior: 'smooth' });
                  }
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-xl rounded-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hover:scale-110 border-2 border-gray-200 dark:border-gray-700"
                aria-label="Scroll right"
              >
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Scrollable Container */}
              <div 
                id="packages-scroll-container"
                className="overflow-x-auto pb-4 scrollbar-hide px-12"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="flex gap-6 py-2" style={{ minWidth: 'min-content' }}>
                  {packages.map((pkg) => (
                    <div key={pkg.id} className="flex-shrink-0 w-[280px] h-[510px]">
                      <PackageCard pkg={pkg} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Health Concerns */}
      <HealthConcerns />

      {/* Trust Section */}
      <TrustSection />

      {/* Doctor Consultation CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 text-center text-white border-2 border-white/30 shadow-2xl"
          >
            <FiUserCheck className="mx-auto mb-6" size={64} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Expert Medical Advice?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Consult with our experienced doctors online. Get personalized health guidance from the comfort of your home.
            </p>
            <button
              onClick={() => navigate('/consultation')}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold"
            >
              Book Online Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
