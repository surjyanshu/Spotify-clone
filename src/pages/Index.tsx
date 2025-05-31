
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';
import MainContent from '../components/MainContent';
import TopBar from '../components/TopBar';

const Index = () => {
  const [currentSong, setCurrentSong] = useState({
    title: "Wild",
    artist: "Talhah Yunus, JJ47, Hasan Raheem",
    album: "Wild",
    duration: "4:05",
    image: "/placeholder.svg"
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(85); // 1:25
  const [volume, setVolume] = useState(75);

  return (
    <div className="h-screen bg-black text-white flex flex-col overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <TopBar />
          <MainContent 
            setCurrentSong={setCurrentSong}
            setIsPlaying={setIsPlaying}
          />
        </div>
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
