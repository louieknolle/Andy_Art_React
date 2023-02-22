import React, { useRef, useEffect } from "react";
import collection2img1 from "../img/1Collection2.jpg";
import collection2img2 from "../img/2Collection2.jpg";
import collection2img3 from "../img/3Collection2.jpg";
import collection2img4 from "../img/4Collection2.jpg";

function CollectionContent() {
  const collectionTwoImages = [
    collection2img1,
    collection2img2,
    collection2img3,
    collection2img4,
  ];

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
      <div id="collection2Content" className="content" ref={scrollContainerRef}>
        <div className="innerImages">
          {collectionTwoImages.map((img) => (
            <img key={img} src={img} alt={img} className="collectionImage" />
          ))}
        </div>
      </div>
    </>
  );
}

export default CollectionContent;
