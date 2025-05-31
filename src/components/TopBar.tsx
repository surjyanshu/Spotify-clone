
import { Search, Bell, ChevronDown } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="h-16 bg-black bg-opacity-80 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-6">
      {/* Navigation buttons */}
      <div className="flex items-center space-x-4">
        <button className="w-8 h-8 bg-black bg-opacity-70 rounded-full flex items-center justify-center">
          <span className="text-white text-lg">←</span>
        </button>
        <button className="w-8 h-8 bg-black bg-opacity-70 rounded-full flex items-center justify-center">
          <span className="text-white text-lg">→</span>
        </button>
      </div>

      {/* Search bar */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="w-full bg-gray-800 text-white rounded-full py-3 pl-12 pr-4 text-sm placeholder-gray-400 focus:outline-none focus:bg-gray-700 transition-colors"
          />
        </div>
      </div>

      {/* User section */}
      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-gray-300 transition-colors">
          <Bell size={20} />
        </button>
        <button className="flex items-center space-x-2 bg-black bg-opacity-70 rounded-full px-3 py-1 hover:bg-opacity-90 transition-colors">
          <div className="w-7 h-7 bg-gray-600 rounded-full"></div>
          <span className="text-white text-sm">User</span>
          <ChevronDown size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
