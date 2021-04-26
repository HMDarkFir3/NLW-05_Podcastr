//React
import { useContext } from "react";

//Context
import { PlayerContext } from "../contexts/PlayerContext";

export const usePlayer = () => {
  return useContext(PlayerContext);
};
