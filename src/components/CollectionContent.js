import React, { useRef, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { cdPics } from "../cDPics";
import { sahoPics } from "../sAHOPics";
import { nRPics } from "../nRPics";
import { subDivPics } from "../subDivPics";
import { constructsPics } from "../constructsPics";

function CollectionContent() {
  const [selectedCollection, setSelectedCollection] = useState("cdPics");
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
          {cdPics.map((img) => (
            <img key={img} src={img} alt={img} className="collectionImage" />
          ))}
        </div>
      </div>
    </>
  );
}

export default CollectionContent;
