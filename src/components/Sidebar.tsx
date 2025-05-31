
import { Home, Search, Library, Plus, Heart } from 'lucide-react';

const Sidebar = () => {
  const playlists = [
    "My Playlist #1",
    "Liked Songs",
    "Chill Vibes",
    "Workout Mix",
    "Road Trip",
    "Study Focus"
  ];

  return (
    <div className="w-64 bg-black border-r border-gray-800 flex flex-col h-full">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white">Spotify</h1>
      </div>

      {/* Main Navigation */}
      <nav className="px-6 mb-8">
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group">
              <Home size={24} />
              <span className="font-medium">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group">
              <Search size={24} />
              <span className="font-medium">Search</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group">
              <Library size={24} />
              <span className="font-medium">Your Library</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Playlist Section */}
      <div className="px-6 mb-4">
        <button className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group mb-4">
          <div className="w-6 h-6 bg-gray-300 group-hover:bg-white transition-colors flex items-center justify-center">
            <Plus size={16} className="text-black" />
          </div>
          <span className="font-medium">Create Playlist</span>
        </button>
        
        <button className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group">
          <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
            <Heart size={14} className="text-white" />
          </div>
          <span className="font-medium">Liked Songs</span>
        </button>
      </div>

      {/* Playlists */}
      <div className="flex-1 overflow-y-auto px-6">
        <div className="border-t border-gray-800 pt-4">
          {playlists.map((playlist, index) => (
            <div key={index} className="py-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                {playlist}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
