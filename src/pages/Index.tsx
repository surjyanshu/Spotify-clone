
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';
import MainContent from '../components/MainContent';

const Index = () => {
  const [currentSong, setCurrentSong] = useState({
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20",
    image: "/placeholder.svg"
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(45);
  const [volume, setVolume] = useState(75);

  return (
    <div className="h-screen bg-black text-white flex flex-col overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent 
          setCurrentSong={setCurrentSong}
          setIsPlaying={setIsPlaying}
        />
      </div>
      <Player 
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        volume={volume}
        setVolume={setVolume}
      />
    </div>
  );
};

export default Index;
