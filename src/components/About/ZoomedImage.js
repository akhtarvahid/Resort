import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ZoomedImage({ aboutImg }) {
  return (
    <Zoom>
      <img
        alt="That Wanaka Tree, New Zealand by Laura Smetsers"
        src={aboutImg}
        width="500"
      />
    </Zoom>
  );
}
