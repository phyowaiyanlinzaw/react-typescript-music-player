import { Reducer } from "react";

type Songs = {
  id: number;
  title: string;
  artist: string;
  album: string;
  songUrl: string;
  imageUrl: string;
  /*
  {
    "id": 17,
    "title": "Vent",
    "artist": "Baby Keem",
    "album": "The Melodic Blue",
    "songUrl": "songs/vent.mp3",
    "imageUrl": "images/TheMelodicBlue.jpg"
  },
    */
};
type State = {
  songs: Songs[];
  currentSong: number;
  isPlaying: boolean;
};

type Action = {
  type:
    | "song/play"
    | "song/pause"
    | "song/next"
    | "song/prev"
    | "song/choosePlay";
  payload?: any;
};

const reducer: Reducer<State, Action> = (state: State, action: Action) => {
  switch (action.type) {
    case "song/play":
      return { ...state, isPlaying: true };
    case "song/pause":
      return { ...state, isPlaying: false };
    case "song/next":
      return { ...state, currentSong: state.currentSong + 1, isPlaying: true };
    case "song/prev":
      return { ...state, currentSong: state.currentSong - 1, isPlaying: true };
    case "song/choosePlay":
      return {
        ...state,
        currentSong: action.payload.id - 1,
        isPlaying: true,
      };
    default:
      return state;
  }
};

export default reducer;
export type { State, Action };
