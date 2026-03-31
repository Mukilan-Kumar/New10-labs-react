import { motion } from 'framer-motion';
import { FiPackage, FiCheck } from 'react-icons/fi';
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

  // Parse includes string into array
  const testsList = pkg.includes ? pkg.includes.split(',').map(t => t.trim()) : [];

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all border border-blue-200 dark:border-blue-700 h-full flex flex-col relative"
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-3 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1">
          ⭐ POPULAR
        </div>
      )}

      {/* Package Header */}
      <div className="mb-3">
        <h3 className="font-bold text-lg mb-0.5 text-blue-600 dark:text-blue-400">
          {pkg.name}
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-400">Includes Tests</p>
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
              <span className="text-gray-700 dark:text-gray-300">{test}</span>
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
      <div className="mb-2 pt-2 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-baseline gap-1.5 mb-0.5">
          <span className="text-xl font-bold text-gray-900 dark:text-white">₹{pkg.price}</span>
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
          className="w-full px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition flex items-center justify-center gap-1.5 font-medium text-sm"
        >
          <FaWhatsapp size={16} />
          Book on WhatsApp
        </button>
        <button
          onClick={() => setShowTests(!showTests)}
          className="w-full px-3 py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md transition text-xs font-medium"
        >
          📋 View Tests Included
        </button>
      </div>

      {/* Tests Modal */}
      {showTests && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowTests(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold mb-4">{pkg.name} - Tests Included</h3>
            <div className="space-y-2">
              {testsList.map((test, index) => (
                <div key={index} className="flex items-start gap-2">
                  <FiCheck className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm">{test}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowTests(false)}
              className="mt-4 w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
