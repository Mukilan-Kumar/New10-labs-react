import { Link, useNavigate } from 'react-router-dom';
import { FiMapPin, FiSearch, FiPhone, FiHome } from 'react-icons/fi';
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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <span>🩺 Blood Sample @ Home clinic & work</span>
            </div>
            <a href="tel:9360264347" className="flex items-center gap-1 hover:underline font-medium">
              <FiPhone size={14} />
              <span>9360264347</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 via-pink-500 to-blue-600 rounded-full flex items-center justify-center relative shadow-md">
              <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">N10</span>
              </div>
            </div>
            <div>
              <div className="font-bold text-xl leading-tight">
                <span className="text-gray-800">New</span>
                <span className="text-red-500">10</span>
                <span className="text-gray-800">labs</span>
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wide">DIAGNOSTIC CENTRE</div>
            </div>
          </Link>

          {/* Location */}
          <div className="hidden md:flex items-center gap-2 text-sm">
            <FiMapPin className="text-gray-500" size={18} />
            <div>
              <div className="text-xs text-gray-500">Location</div>
              <div className="font-semibold text-gray-800">Chennai 600102</div>
            </div>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md hidden lg:block">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search for Tests & Packages"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
              />
            </div>
          </form>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-cyan-600 transition">
              <FiPhone size={18} />
              <span className="text-sm font-medium">Support</span>
            </button>
            <Link
              to="/home-visit"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition font-medium text-sm"
            >
              <FiHome size={18} />
              <span>Home Visit</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
