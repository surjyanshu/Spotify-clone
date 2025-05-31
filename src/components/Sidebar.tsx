
import { Home, Search, Library, Plus, Heart, Download } from 'lucide-react';

const Sidebar = () => {
  const playlists = [
    { name: "Liked Songs", count: "397 songs", icon: true },
    { name: "Sirf Gang Talk Chale", creator: "PSYDROP:AIHIK" },
    { name: "Shor", creator: "Surjyanshu" },
    { name: "Escape", creator: "Surjyanshu" },
    { name: "Neshar Bojha", creator: "Surjyanshu" },
    { name: "JJ47", type: "Artist" },
    { name: "JANI", type: "Artist" },
    { name: "Talha Yunus", type: "Artist" },
    { name: "Talha Anjum", type: "Artist" },
    { name: "Wild", creator: "Talhah Yunus, JJ47, Hasan Raheem", playing: true }
  ];

  return (
    <div className="w-64 bg-black flex flex-col h-full">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white">Spotify</h1>
      </div>

      {/* Main Navigation */}
      <nav className="px-6 mb-8">
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center space-x-4 text-white font-bold transition-colors group">
              <Home size={24} />
              <span className="font-medium">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors group">
              <Search size={24} />
              <span className="font-medium">Search</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors group">
              <Library size={24} />
              <span className="font-medium">Your Library</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Your Library Section */}
      <div className="px-6 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-400 text-sm font-medium">Your Library</h3>
          <div className="flex space-x-2">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Plus size={16} />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <Download size={16} />
            </button>
          </div>
        </div>
        
        <button className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group mb-4 w-full">
          <div className="w-6 h-6 bg-gray-300 group-hover:bg-white transition-colors flex items-center justify-center">
            <Plus size={16} className="text-black" />
          </div>
          <span className="font-medium">Create Playlist</span>
        </button>
        
        <button className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group w-full">
          <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
            <Heart size={14} className="text-white" />
          </div>
          <span className="font-medium">Liked Songs</span>
        </button>
      </div>

      {/* Recently played filter */}
      <div className="px-6 mb-4">
        <div className="flex items-center space-x-2 text-xs">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Search size={12} />
          </button>
          <span className="text-gray-400">Recents</span>
          <button className="text-gray-400 hover:text-white transition-colors ml-auto">
            <div className="w-4 h-4 border border-gray-400 rounded flex items-center justify-center">
              <div className="w-1 h-1 bg-gray-400"></div>
              <div className="w-1 h-1 bg-gray-400 ml-0.5"></div>
              <div className="w-1 h-1 bg-gray-400 ml-0.5"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Playlists */}
      <div className="flex-1 overflow-y-auto px-6">
        {playlists.map((item, index) => (
          <div key={index} className="py-2 group">
            <div className="flex items-center space-x-3">
              {item.icon ? (
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center rounded">
                  <Heart size={16} className="text-white" />
                </div>
              ) : (
                <div className="w-12 h-12 bg-gray-700 rounded"></div>
              )}
              <div className="flex-1 min-w-0">
                <p className={`text-sm truncate ${item.playing ? 'text-green-500' : 'text-white group-hover:text-white'}`}>
                  {item.name}
                </p>
                <p className="text-xs text-gray-400 truncate">
                  {item.type ? item.type : `Playlist • ${item.creator || item.count}`}
                </p>
              </div>
              {item.playing && (
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
