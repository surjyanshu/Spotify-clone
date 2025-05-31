
import { useState } from 'react';
import { Play, MoreHorizontal } from 'lucide-react';

interface MainContentProps {
  setCurrentSong: (song: any) => void;
  setIsPlaying: (playing: boolean) => void;
}

const MainContent = ({ setCurrentSong, setIsPlaying }: MainContentProps) => {
  const [greeting, setGreeting] = useState(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  });

  const recentlyPlayed = [
    { id: 1, title: 'Liked Songs', image: '/placeholder.svg', type: 'playlist' },
    { id: 2, title: 'Discover Weekly', image: '/placeholder.svg', type: 'playlist' },
    { id: 3, title: 'Daily Mix 1', image: '/placeholder.svg', type: 'playlist' },
    { id: 4, title: 'Chill Hits', image: '/placeholder.svg', type: 'playlist' },
    { id: 5, title: 'Rock Classics', image: '/placeholder.svg', type: 'playlist' },
    { id: 6, title: 'Pop Rising', image: '/placeholder.svg', type: 'playlist' },
  ];

  const newReleases = [
    { id: 1, title: 'After Hours', artist: 'The Weeknd', image: '/placeholder.svg' },
    { id: 2, title: 'Future Nostalgia', artist: 'Dua Lipa', image: '/placeholder.svg' },
    { id: 3, title: 'Fine Line', artist: 'Harry Styles', image: '/placeholder.svg' },
    { id: 4, title: 'Positions', artist: 'Ariana Grande', image: '/placeholder.svg' },
    { id: 5, title: 'Folklore', artist: 'Taylor Swift', image: '/placeholder.svg' },
  ];

  const handlePlaySong = (song: any) => {
    setCurrentSong({
      title: song.title,
      artist: song.artist || 'Various Artists',
      album: song.title,
      duration: '3:20',
      image: song.image
    });
    setIsPlaying(true);
  };

  return (
    <div className="flex-1 bg-gradient-to-b from-gray-900 to-black overflow-y-auto">
      <div className="p-8">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-8 text-white">{greeting}</h1>

        {/* Recently Played Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {recentlyPlayed.map((item) => (
            <div 
              key={item.id}
              className="bg-gray-800 bg-opacity-50 rounded flex items-center hover:bg-opacity-70 transition-all cursor-pointer group"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-16 h-16 rounded-l"
              />
              <span className="px-4 font-medium text-white">{item.title}</span>
              <div className="ml-auto pr-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => handlePlaySong(item)}
                  className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 hover:scale-105 transition-all"
                >
                  <Play size={20} className="text-black ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* New Releases Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">New releases for you</h2>
            <button className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
              See all
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {newReleases.map((album) => (
              <div 
                key={album.id}
                className="bg-gray-900 bg-opacity-50 p-4 rounded-lg hover:bg-opacity-70 transition-all cursor-pointer group"
              >
                <div className="relative mb-4">
                  <img 
                    src={album.image} 
                    alt={album.title}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                  <button 
                    onClick={() => handlePlaySong(album)}
                    className="absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-green-400 hover:scale-105 transition-all transform translate-y-2 group-hover:translate-y-0"
                  >
                    <Play size={20} className="text-black ml-1" />
                  </button>
                </div>
                <h3 className="font-medium text-white mb-2 truncate">{album.title}</h3>
                <p className="text-gray-400 text-sm truncate">{album.artist}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Charts Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Charts</h2>
            <button className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
              See all
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {newReleases.map((item, index) => (
              <div 
                key={`chart-${item.id}`}
                className="bg-gray-900 bg-opacity-50 p-4 rounded-lg hover:bg-opacity-70 transition-all cursor-pointer group"
              >
                <div className="relative mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                  <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    #{index + 1}
                  </div>
                  <button 
                    onClick={() => handlePlaySong(item)}
                    className="absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-green-400 hover:scale-105 transition-all transform translate-y-2 group-hover:translate-y-0"
                  >
                    <Play size={20} className="text-black ml-1" />
                  </button>
                </div>
                <h3 className="font-medium text-white mb-2 truncate">{item.title}</h3>
                <p className="text-gray-400 text-sm truncate">{item.artist}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainContent;
