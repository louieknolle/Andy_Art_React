import React, { useRef, useEffect } from "react";

import { cdPics } from "../cDPics";
import { sahoPics } from "../sahoPics";
import { nRPics } from "../nRPics";
import { subDivPics } from "../subDivPics";
import { constructsPics } from "../constructsPics";

function CollectionContent({ collection = "chromatic" }) {
  const pictureArrays = {
    saho: sahoPics,
    subDivisions: subDivPics,
    noisyRelations: nRPics,
    constructs: constructsPics,
    chromatic: cdPics,
  };

  const selectedCollection = pictureArrays[collection];

  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const handleScrollEvent = ({ wheelDeltaY }) => {
      scrollContainerRef.current.scrollLeft =
        scrollContainerRef.current.scrollLeft + wheelDeltaY;
    };
    window.addEventListener("wheel", handleScrollEvent);

    return () => {
      window.removeEventListener("wheel", handleScrollEvent);
    };
  }, []);

  return (
    <>
      <div id="collection1Content" className="content" ref={scrollContainerRef}>
        <div className="innerImages">
          {selectedCollection.map((img) => (
            <img key={img} src={img} alt={img} className="collectionImage" />
          ))}
        </div>
      </div>
    </>
  );
}

export default CollectionContent;
