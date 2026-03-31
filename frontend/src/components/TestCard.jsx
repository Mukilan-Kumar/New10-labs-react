import { motion } from 'framer-motion';
import { FiActivity, FiClock } from 'react-icons/fi';
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
      whileHover={{ y: -4, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all border border-gray-100 relative h-full flex flex-col"
    >
      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-0.5 rounded text-xs font-semibold">
          {discount}% OFF
        </div>
      )}

      {/* Test Name */}
      <h3 className="font-semibold text-sm mb-2 text-gray-900 line-clamp-2 min-h-[40px] pr-12">
        {test.name}
      </h3>

      {/* Test Details */}
      <div className="space-y-1 mb-3 text-xs text-gray-600">
        <div className="flex items-center gap-1.5">
          <FiActivity size={12} className="text-blue-600 flex-shrink-0" />
          <span>1 Parameters</span>
        </div>
        <div className="flex items-center gap-1.5">
          <FiClock size={12} className="text-teal-600 flex-shrink-0" />
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

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Pricing */}
      <div className="mb-3 mt-auto">
        <div className="flex items-baseline gap-1.5">
          <span className="text-xl font-bold text-gray-900">₹{test.price}</span>
          {test.mrp > test.price && (
            <span className="text-xs text-gray-500 line-through">₹{test.mrp}</span>
          )}
        </div>
        <p className="text-[10px] text-gray-500 mt-0.5">MRP: ₹{test.mrp} (Incl. of all taxes)</p>
      </div>

      {/* Book Button */}
      <button
        onClick={handleBook}
        className="w-full px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors flex items-center justify-center gap-1.5 font-medium text-sm"
      >
        <FaWhatsapp size={16} />
        Book on WhatsApp
      </button>
    </motion.div>
  );
}
