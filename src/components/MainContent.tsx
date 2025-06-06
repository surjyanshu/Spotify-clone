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
    { id: 1, title: 'Liked Songs', image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300', type: 'playlist', gradient: true },
    { id: 2, title: 'Daily Mix 1', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300', type: 'playlist' },
    { id: 3, title: 'Discover Weekly', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300', type: 'playlist' },
    { id: 4, title: 'Release Radar', image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=300', type: 'playlist' },
    { id: 5, title: 'Your Top Songs 2023', image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300', type: 'playlist' },
    { id: 6, title: 'Chill Hits', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300', type: 'playlist' },
  ];

  const madeForYou = [
    { 
      id: 1, 
      title: 'Daily Mix 1', 
      artist: 'Pritam, Atif Aslam, Vishal-Shekhar and more', 
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300',
      color: 'bg-blue-500'
    },
    { 
      id: 2, 
      title: 'Daily Mix 2', 
      artist: 'Anupam Roy, Zubeen Garg, Kunal...', 
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=300',
      color: 'bg-purple-500'
    },
    { 
      id: 3, 
      title: 'Daily Mix 3', 
      artist: 'Afsiq, Bayaan, Young Stunners and more', 
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300',
      color: 'bg-red-500'
    },
    { 
      id: 4, 
      title: 'Daily Mix 4', 
      artist: 'Arijit Singh, Siddhu Kumar, Sachin-Jigar...', 
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300',
      color: 'bg-orange-500'
    },
  ];

  const jumpBackIn = [
    { id: 1, title: 'Afsanay', artist: 'Album', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300' },
    { id: 2, title: 'Sirf Gang Talk Chale', artist: 'Playlist', image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=300' },
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
    <div className="flex-1 bg-gradient-to-b from-gray-900 via-gray-900 to-black overflow-y-auto">
      <div className="p-8">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-8 text-white">{greeting}</h1>

        {/* Recently Played Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {recentlyPlayed.map((item) => (
            <div 
              key={item.id}
              className="bg-gray-800 bg-opacity-60 rounded flex items-center hover:bg-opacity-80 transition-all cursor-pointer group"
            >
              <div className="relative">
                {item.gradient ? (
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-l flex items-center justify-center">
                    <span className="text-white text-2xl">♥</span>
                  </div>
                ) : (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-16 h-16 rounded-l object-cover"
                  />
                )}
              </div>
              <span className="px-4 font-medium text-white flex-1">{item.title}</span>
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

        {/* Made For You Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Made for Surjyanshu</h2>
            <button className="text-gray-400 hover:text-white text-sm font-bold transition-colors">
              Show all
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {madeForYou.map((mix) => (
              <div 
                key={mix.id}
                className="bg-gray-900 bg-opacity-40 p-4 rounded-lg hover:bg-opacity-60 transition-all cursor-pointer group"
              >
                <div className="relative mb-4">
                  <img 
                    src={mix.image} 
                    alt={mix.title}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                  <button 
                    onClick={() => handlePlaySong(mix)}
                    className="absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-green-400 hover:scale-105 transition-all transform translate-y-2 group-hover:translate-y-0"
                  >
                    <Play size={20} className="text-black ml-1" />
                  </button>
                </div>
                <h3 className="font-bold text-white mb-2 truncate">{mix.title}</h3>
                <p className="text-gray-400 text-sm truncate">{mix.artist}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Jump Back In Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Jump back in</h2>
            <button className="text-gray-400 hover:text-white text-sm font-bold transition-colors">
              Show all
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {jumpBackIn.map((item) => (
              <div 
                key={item.id}
                className="bg-gray-900 bg-opacity-40 p-4 rounded-lg hover:bg-opacity-60 transition-all cursor-pointer group"
              >
                <div className="relative mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
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
