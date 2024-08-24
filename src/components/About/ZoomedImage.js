import React, { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { CrossMark, InnerZoomBox } from "./About.styled";

export default function ZoomedImage({ aboutImg, setIsClickedToZoom }) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);
  return (
    <div className="wrapper">
      <InnerZoomBox>
        <CrossMark onClick={() => setIsClickedToZoom(false)}>X</CrossMark>
        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
          <img
            alt="That wanaka tree, alone in the water near mountains"
            src={aboutImg}
            width="960"
          />
        </ControlledZoom>
      </InnerZoomBox>
    </div>
  );
}
