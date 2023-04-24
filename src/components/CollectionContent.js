import React, { useRef, useEffect } from "react";
// import Spinner from "./Spinner";
// import { Img } from "react-image";

import { cdPics } from "../imgArrays/cDPics";
import { sahoPics } from "../imgArrays/sahoPics";
import { nRPics } from "../imgArrays/nRPics";
import { subDivPics } from "../imgArrays/subDivPics";
import { constructsPics } from "../imgArrays/constructsPics";

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

  useEffect(() => {
    scrollContainerRef.current.scrollLeft = 0;
  }, [collection]);

  return (
    <>
      <div id="collectionContent" className="content" ref={scrollContainerRef}>
        <div className="innerImages">
          {selectedCollection.map((img) => (
            <img
              key={img}
              src={img}
              alt={img}
              className="collectionImage"
              loading="lazy"
            />
            //            <Img
            //               key={img}
            //               src={img}
            //               alt={img}
            //               className="collectionImage"
            //               loader={<Spinner />} // Replace with your spinner component
            //             />
          ))}
        </div>
      </div>
    </>
  );
}

export default CollectionContent;
