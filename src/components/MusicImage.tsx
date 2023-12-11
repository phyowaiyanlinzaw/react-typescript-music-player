import { FC } from "react";

const MusicImage: FC<{
  imageName: string;
  width: string;
  height: string;
  maxWidth?: string;
  maxHeight?: string;
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
  id: string;
}> = ({ imageName, width, height, maxWidth, onClick, id }) => {
  return (
    <img
      src={`${imageName}`}
      alt="album cover"
      style={{
        width: `${width}`,
        maxWidth: `${maxWidth}`,
        height: `${height}`,
        borderRadius: "10px",
        border: "1px solid black",
        boxShadow: "0px 0px 10px 0px #134e4a",
      }}
      onClick={onClick}
      id={id}
    />
  );
};

export default MusicImage;
