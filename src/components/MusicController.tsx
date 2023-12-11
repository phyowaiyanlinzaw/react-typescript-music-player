import { FC, useEffect, useState } from "react";
import { FaBackward, FaPlay, FaForward, FaPause } from "react-icons/fa";

import { useRef } from "react";

const MusicController: FC<{
  song: string;
  isPlaying: boolean;
  totalSongs: number;
  currentSong: number;
  onNext: () => void;
  onPrevious: () => void;
  onPause: () => void;
  onPlay: () => void;
}> = ({
  song,
  isPlaying,
  onNext,
  onPrevious,
  onPause,
  onPlay,
  totalSongs,
  currentSong,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [duration, setDuration] = useState({
    totalTime: 0,
    currentTime: 0,
  });

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onended = () => {
        if (currentSong < totalSongs - 1) {
          onNext();
        }
      };
    }
  }, [onNext]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentSong]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        gap: "10px",
        border: "none",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      <audio
        onTimeUpdate={(e) => {
          setDuration({
            totalTime: e.currentTarget.duration,
            currentTime: e.currentTarget.currentTime,
          });
        }}
        src={`/${song}`}
        controls
        style={{
          width: "100%",
          backgroundColor: "#134e4a",
          color: "#f0fdfa",
          borderRadius: "10px",
          border: "1px solid black",
          boxShadow: "0px 0px 10px 0px #134e4a",
          display: "none",
        }}
        ref={audioRef}
      ></audio>
      <div
        style={{
          width: "100%",
          backgroundColor: "#134e4a",
          color: "#f0fdfa",
          borderRadius: "10px",
          border: "1px solid black",
          boxShadow: "0px 0px 10px 0px #134e4a",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="range"
          min="0"
          max={duration.totalTime}
          step={1}
          value={Math.floor(
            (duration.currentTime / duration.totalTime) * 100
          ).toString()}
          style={{
            width: "100%",
            backgroundColor: "#134e4a",
            color: "#f0fdfa",
            borderRadius: "10px",
            border: "1px solid black",
            boxShadow: "0px 0px 10px 0px #134e4a",
          }}
          onInput={(e) => {
            console.log(e.currentTarget.value);
            audioRef.current!.currentTime = Math.floor(
              (parseInt(e.currentTarget.value) / 100) * duration.totalTime
            );
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          gap: "10px",
          border: "none",
        }}
      >
        <button
          onClick={() => {
            onPrevious();
          }}
          style={{
            backgroundColor: "#134e4a",
            color: "#f0fdfa",
            border: "none",
          }}
          {...(currentSong === 0 && { disabled: true })}
        >
          <FaBackward
            style={{
              color: "#f0fdfa",
              fontSize: "20px",
              display: { currentSong: 0 ? "none" : "block" },
            }}
          />
        </button>
        {isPlaying ? (
          <button
            onClick={() => {
              audioRef.current?.pause();
              onPause();
            }}
            style={{
              backgroundColor: "#134e4a",
              color: "#f0fdfa",
              border: "none",
            }}
          >
            <FaPause
              style={{
                color: "#f0fdfa",
                fontSize: "20px",
              }}
            />
          </button>
        ) : (
          <button
            onClick={() => {
              console.log(audioRef.current?.currentTime);
              audioRef.current?.play();
              onPlay();
            }}
            style={{
              backgroundColor: "#134e4a",
              color: "#f0fdfa",
              border: "none",
            }}
          >
            <FaPlay
              style={{
                color: "#f0fdfa",
                fontSize: "20px",
              }}
            />
          </button>
        )}

        <button
          onClick={() => {
            onNext();
          }}
          style={{
            backgroundColor: "#134e4a",
            color: "#f0fdfa",
            border: "none",
          }}
          {...(currentSong === totalSongs - 1 && { disabled: true })}
        >
          <FaForward
            style={{
              color: "#f0fdfa",
              fontSize: "20px",
              display: { currentSong: totalSongs - 1 ? "none" : "block" },
            }}
          />
        </button>
      </div>
    </div>
  );
};
export default MusicController;
