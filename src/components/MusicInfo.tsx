import { FC } from "react";

const MusicInfo: FC<{ artist: string; song: string }> = ({ artist, song }) => {
  return (
    <div
      style={{
        marginTop: "10px",
        textAlign: "center",
        width: "100%",
        border: "none",
      }}
    >
      <h3
        style={{
          margin: "0px",
          color: "#f0fdfa",
        }}
      >
        {song}
      </h3>
      <p
        style={{
          margin: "0px",
          color: "#f0fdfa",
        }}
      >
        {artist}
      </p>
    </div>
  );
};

export default MusicInfo;
