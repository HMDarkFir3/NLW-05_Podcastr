//React
import React, { createContext } from "react";

//Interface
interface PlayerContextData {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episode: Episode) => void;
  togglePlay: () => void;
  setPlayingState: (state: boolean) => void;
}

interface Episode {
  title: string;
  members: string;
  thumbnail: string;
  url: string;
  duration: number;
}

export const PlayerContext = createContext({} as PlayerContextData);
