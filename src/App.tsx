import songs from "./constants/songs.json";
import MusicContainer from "./components/MusicContainer";
import MusicImage from "./components/MusicImage";
import MusicInfo from "./components/MusicInfo";
import MusicController from "./components/MusicController";
import { MouseEvent, useReducer } from "react";
import reducer, { State } from "./reducer/reducer";
import MusicListSelector from "./components/MusicListSelector";

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    songs: songs,
    isPlaying: false,
    currentSong: 0,
  });

  const { songs: ourSongs, isPlaying, currentSong } = state as State;
  const playingSong = ourSongs[currentSong];
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MusicContainer>
        <div
          style={{
            width: "100%",
            border: "none",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <MusicImage
            imageName={playingSong.imageUrl}
            width="300px"
            height="300px"
            maxWidth="300px"
            maxHeight="300px"
            id={`${playingSong.id}`}
          />
        </div>
        <MusicInfo artist={playingSong.artist} song={playingSong.title} />
        <MusicController
          song={playingSong.songUrl}
          onNext={() => {
            dispatch({ type: "song/next" });
          }}
          onPrevious={() => {
            dispatch({ type: "song/prev" });
          }}
          onPlay={() => {
            dispatch({ type: "song/play" });
          }}
          onPause={() => {
            dispatch({ type: "song/pause" });
          }}
          isPlaying={isPlaying}
          totalSongs={songs.length}
          currentSong={currentSong}
        />
      </MusicContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #222222",
          borderRadius: "10px",
          padding: "10px",
          width: "100%",
          gap: "10px",
          marginTop: "10px",
          marginBottom: "10px",
          maxWidth: "700px",
          overflowX: "scroll",
          maxHeight: "150px",
          boxShadow: "0px 0px 10px 0px #134e4a",
        }}
      >
        <MusicListSelector
          songs={ourSongs}
          onClick={(e: MouseEvent<HTMLImageElement>) => {
            console.log(e.currentTarget.id);
            dispatch({
              type: "song/choosePlay",
              payload: {
                id: parseInt(e.currentTarget.id),
              },
            });
          }}
        />
      </div>
    </div>
  );
}
