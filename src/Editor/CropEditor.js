import React from "react";

import { Image } from "../Theme/Elements";

const cropHandlerStyles = {
  width: "20px",
  height: "5px"
};

function getCropHanlderPositions(imgDimension) {}

export default function CropEditor({
  cropStyle,
  src,
  frameDimension,
  children
}) {
  const styles = {};
  return (
    <div className="crop-container" style={styles.container}>
      <div className="crop-handle top" />
      <div className="crop-handle right" />
      <div className="crop-handle bottom" />
      <div className="crop-handle left" />
      {children}
    </div>
  );
}
