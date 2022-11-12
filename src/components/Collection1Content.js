import React, { useRef, useEffect } from "react";
import collection1img1 from "../img/1Collection1.jpg";
import collection1img2 from "../img/2Collection1.jpg";
import collection1img3 from "../img/3Collection1.jpg";
import collection1img4 from "../img/4Collection1.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Collection1Content() {
  const collectionOneImages = [
    collection1img1,
    collection1img2,
    collection1img3,
    collection1img4,
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
      <div
        id="collection1Content"
        className="content"
        ref={scrollContainerRef}
      >
        {collectionOneImages.map((img) => (
          // <img key={img} src={img} alt={img} className="collectionImage" />
          <LazyLoadImage src={img} alt={img} key={img} className="collectionImage" />
        ))}
      </div>
      <div className="caption">
        <p>This is collection 1, cool.</p>
      </div>
    </>
  );
}

export default Collection1Content;