import React, { useRef, useEffect, useState } from "react";

import { cdPics } from "../cDPics";
import { sahoPics } from "../sahoPics";
import { nRPics } from "../nRPics";
import { subDivPics } from "../subDivPics";
import { constructsPics } from "../constructsPics";

function CollectionContent({ collection }) {
  const [selectedCollection, setSelectedCollection] = useState(cdPics);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScrollEvent = ({ wheelDeltaY }) => {
      scrollContainerRef.current.scrollLeft =
        scrollContainerRef.current.scrollLeft + wheelDeltaY;
    };
    window.addEventListener("wheel", handleScrollEvent);

    const pictureArrays = {
      saho: sahoPics,
      subDivisions: subDivPics,
      noisyRelations: nRPics,
      constructs: constructsPics,
      default: cdPics,
    };

    setSelectedCollection(pictureArrays[collection] || pictureArrays.default);

    return () => {
      window.removeEventListener("wheel", handleScrollEvent);
    };
  }, [collection]);

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
