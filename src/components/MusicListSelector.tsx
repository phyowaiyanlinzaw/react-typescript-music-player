import { FC, MouseEvent } from "react";
import MusicImage from "./MusicImage";

type Songs = {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
  songUrl: string;
};

const MusicListSelector: FC<{
  songs: Songs[];
  onClick: (e: MouseEvent<HTMLImageElement>) => void;
}> = ({ songs, onClick }) => {
  return (
    <>
      {songs.map((song) => (
        <div key={song.id}>
          {/* <img
            src={song.imageUrl}
            alt={song.title}
            style={{
              width: "100px",
              height: "100px",
            }}
            id={`${song.id}`}
            onClick={onClick}
          /> */}
          <MusicImage
            imageName={song.imageUrl}
            width="100px"
            height="100px"
            onClick={onClick}
            id={`${song.id}`}
          />
        </div>
      ))}
    </>
  );
};

export default MusicListSelector;
