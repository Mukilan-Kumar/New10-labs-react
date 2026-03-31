import { motion } from 'framer-motion';
import { FiActivity, FiClock, FiDroplet } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function TestCard({ test }) {
  const discount = test.mrp > test.price ? Math.round(((test.mrp - test.price) / test.mrp) * 100) : 0;

  const handleBook = () => {
    const message = `Hi, I want to book ${test.name} test (₹${test.price})`;
    window.open(`https://wa.me/919360264347?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700 relative"
    >
      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-0.5 rounded text-xs font-semibold">
          {discount}% OFF
        </div>
      )}

      {/* Test Name */}
      <h3 className="font-semibold text-sm mb-2 text-gray-900 dark:text-white line-clamp-2 min-h-[40px]">
        {test.name}
      </h3>

      {/* Test Details */}
      <div className="space-y-1 mb-3 text-xs text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-1.5">
          <FiActivity size={12} className="text-blue-600" />
          <span>1 Parameters</span>
        </div>
        <div className="flex items-center gap-1.5">
          <FiClock size={12} className="text-teal-600" />
          <span>{test.tat || '1 Day'}</span>
        </div>
      </div>

      {/* Fasting Badge */}
      {test.fastingRequired && (
        <div className="mb-2">
          <span className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-medium rounded">
            Fasting Required
          </span>
        </div>
      )}

      {/* Pricing */}
      <div className="mb-3">
        <div className="flex items-baseline gap-1.5">
          <span className="text-xl font-bold text-gray-900 dark:text-white">₹{test.price}</span>
          {test.mrp > test.price && (
            <span className="text-xs text-gray-500 line-through">₹{test.mrp}</span>
          )}
        </div>
        <p className="text-[10px] text-gray-500 mt-0.5">MRP: ₹{test.mrp} (Incl. of all taxes)</p>
      </div>

      {/* Book Button */}
      <button
        onClick={handleBook}
        className="w-full px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition flex items-center justify-center gap-1.5 font-medium text-sm"
      >
        <FaWhatsapp size={16} />
        Book on WhatsApp
      </button>
    </motion.div>
  );
}
