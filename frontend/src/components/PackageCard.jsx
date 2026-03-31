import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

export default function PackageCard({ pkg }) {
  const [showTests, setShowTests] = useState(false);
  const discount = pkg.mrp > pkg.price ? Math.round(((pkg.mrp - pkg.price) / pkg.mrp) * 100) : 0;
  const isPopular = pkg.name.includes('99') || pkg.name.includes('89');

  const handleBook = () => {
    const message = `Hi, I want to book ${pkg.name} package (₹${pkg.price})`;
    window.open(`https://wa.me/919360264347?text=${encodeURIComponent(message)}`, '_blank');
  };

  const testsList = pkg.includes ? pkg.includes.split(',').map(t => t.trim()) : [];

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all border border-blue-200 h-full flex flex-col relative"
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-3 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-md">
          ⭐ POPULAR
        </div>
      )}

      {/* Package Header */}
      <div className="mb-3 mt-1">
        <h3 className="font-bold text-lg mb-0.5 text-blue-600">
          {pkg.name}
        </h3>
        <p className="text-xs text-gray-600">Includes Tests</p>
      </div>

      {/* Discount Badge */}
      {discount > 0 && (
        <div className="mb-2">
          <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded">
            Save {discount}%
          </span>
        </div>
      )}

      {/* Test List */}
      <div className="mb-3 flex-grow">
        <div className="space-y-1.5">
          {testsList.slice(0, 4).map((test, index) => (
            <div key={index} className="flex items-start gap-1.5 text-xs">
              <FiCheck className="text-green-600 mt-0.5 flex-shrink-0" size={14} />
              <span className="text-gray-700 leading-tight">{test}</span>
            </div>
          ))}
          {testsList.length > 4 && (
            <button
              onClick={() => setShowTests(!showTests)}
              className="text-blue-600 text-xs font-medium hover:underline"
            >
              +{testsList.length - 4} more tests
            </button>
          )}
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-2 pt-2 border-t border-gray-200 mt-auto">
        <div className="flex items-baseline gap-1.5 mb-0.5">
          <span className="text-xl font-bold text-gray-900">₹{pkg.price}</span>
          {pkg.mrp > pkg.price && (
            <span className="text-xs text-gray-500 line-through">₹{pkg.mrp}</span>
          )}
        </div>
        <p className="text-[10px] text-gray-500">MRP: ₹{pkg.mrp} (Incl. of all taxes)</p>
      </div>

      {/* Buttons */}
      <div className="space-y-1.5">
        <button
          onClick={handleBook}
          className="w-full px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors flex items-center justify-center gap-1.5 font-medium text-sm"
        >
          <FaWhatsapp size={16} />
          Book on WhatsApp
        </button>
        <button
          onClick={() => setShowTests(!showTests)}
          className="w-full px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors text-xs font-medium"
        >
          📋 View Tests Included
        </button>
      </div>

      {/* Tests Modal */}
      {showTests && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowTests(false)}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto" 
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900">{pkg.name} - Tests Included</h3>
            <div className="space-y-2">
              {testsList.map((test, index) => (
                <div key={index} className="flex items-start gap-2">
                  <FiCheck className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-700">{test}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowTests(false)}
              className="mt-4 w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition-colors"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
