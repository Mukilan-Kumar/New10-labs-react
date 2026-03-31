import { motion } from 'framer-motion';
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
    <div className="min-h-screen bg-white">
      <Hero />

      {/* Frequently Booked Tests */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
              Frequently Booked Tests
            </h2>
            <p className="text-gray-600 text-sm">
              Most popular diagnostic tests with up to 77% discount
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Loading tests...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
                {tests.map((test) => (
                  <TestCard key={test.id} test={test} />
                ))}
              </div>
              <div className="text-center">
                <button
                  onClick={() => navigate('/tests')}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  View All Tests
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Popular Health Packages */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
              Popular Health Packages
            </h2>
            <p className="text-gray-600 text-sm">
              Comprehensive health checkup packages at best prices
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
              <p className="mt-4 text-gray-600">Loading packages...</p>
            </div>
          ) : (
            <div className="relative">
              {/* Scrollable Container */}
              <div 
                id="packages-scroll-container"
                className="overflow-x-auto pb-4 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="flex gap-4 md:gap-6" style={{ minWidth: 'min-content' }}>
                  {packages.map((pkg) => (
                    <div key={pkg.id} className="flex-shrink-0 w-[280px]">
                      <PackageCard pkg={pkg} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* Doctor Consultation CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center text-white border border-white/20"
          >
            <div className="text-5xl mb-4">👨‍⚕️</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Need Expert Medical Advice?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Consult with our experienced doctors online. Get personalized health guidance from the comfort of your home.
            </p>
            <button
              onClick={() => navigate('/consultation')}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold shadow-lg"
            >
              Book Online Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
