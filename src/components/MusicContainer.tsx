import { FC, PropsWithChildren } from "react";

const MusicContainer: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        padding: "10px",
        width: "500px",
        margin: "auto",
        backgroundColor: "#134e4a",
        boxShadow: "0px 0px 10px 0px #134e4a",
      }}
    >
      {children}
    </div>
  );
};

export default MusicContainer;
