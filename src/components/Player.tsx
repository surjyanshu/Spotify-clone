
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, Heart } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

interface PlayerProps {
  currentSong: {
    title: string;
    artist: string;
    album: string;
    duration: string;
    image: string;
  };
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  currentTime: number;
  setCurrentTime: (time: number) => void;
  volume: number;
  setVolume: (volume: number) => void;
}

const Player = ({ 
  currentSong, 
  isPlaying, 
  setIsPlaying, 
  currentTime, 
  setCurrentTime,
  volume,
  setVolume 
}: PlayerProps) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const totalDuration = 200; // 3:20 in seconds

  return (
    <div className="h-24 bg-gray-900 border-t border-gray-800 flex items-center px-4">
      {/* Currently Playing */}
      <div className="flex items-center space-x-4 w-1/4">
        <img 
          src={currentSong.image} 
          alt={currentSong.title}
          className="w-14 h-14 rounded"
        />
        <div className="min-w-0">
          <h4 className="text-white text-sm font-medium truncate">{currentSong.title}</h4>
          <p className="text-gray-400 text-xs truncate">{currentSong.artist}</p>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Heart size={16} />
        </button>
      </div>

      {/* Player Controls */}
      <div className="flex-1 flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-6">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Shuffle size={20} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipBack size={20} />
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
          >
            {isPlaying ? (
              <Pause size={16} className="text-black" />
            ) : (
              <Play size={16} className="text-black ml-0.5" />
            )}
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipForward size={20} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Repeat size={20} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center space-x-2 w-full max-w-md">
          <span className="text-xs text-gray-400 w-10 text-right">
            {formatTime(currentTime)}
          </span>
          <Slider
            value={[currentTime]}
            max={totalDuration}
            step={1}
            onValueChange={(value) => setCurrentTime(value[0])}
            className="flex-1"
          />
          <span className="text-xs text-gray-400 w-10">
            {currentSong.duration}
          </span>
        </div>
      </div>

      {/* Volume Controls */}
      <div className="flex items-center space-x-3 w-1/4 justify-end">
        <Volume2 size={20} className="text-gray-400" />
        <Slider
          value={[volume]}
          max={100}
          step={1}
          onValueChange={(value) => setVolume(value[0])}
          className="w-24"
        />
      </div>
    </div>
  );
};

export default Player;
