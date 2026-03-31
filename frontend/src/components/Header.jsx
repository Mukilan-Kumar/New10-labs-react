import { useNavigate } from 'react-router-dom';
import { FiMapPin, FiSearch, FiPhone, FiHome, FiGift } from 'react-icons/fi';
import { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tests?search=${searchQuery}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 text-white py-1.5 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <span className="flex items-center gap-2">
            <FiGift size={16} /> Blood Sample @ Home clinic & work
          </span>
          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-1">
              <FiPhone size={14} /> 9360264347
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img 
              src="/New10labs-logo.png" 
              alt="New10Labs Logo" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>

          {/* Location - Fixed, Non-editable */}
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <FiMapPin className="text-blue-600" />
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
              <p className="text-sm font-semibold">Chennai 600102</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl relative">
            <div className="relative w-full">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for Tests & Packages"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-blue-600 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all"
              />
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.open('https://wa.me/919360264347', '_blank')}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title="Contact Support"
            >
              <FiPhone size={20} className="text-blue-600" />
              <span className="text-sm font-medium">Support</span>
            </button>

            <button
              onClick={() => navigate('/home-visit')}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title="Book Home Visit"
            >
              <FiHome size={20} className="text-teal-600" />
              <span className="text-sm font-medium">Home Visit</span>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search tests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800 outline-none"
            />
          </div>
        </div>

        {/* Mobile Location - Fixed, Non-editable */}
        <div className="lg:hidden mt-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <FiMapPin className="text-blue-600" />
            <div className="text-left">
              <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
              <p className="text-sm font-semibold">Chennai 600102</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
