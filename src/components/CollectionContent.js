import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { cdPics } from "../cDPics";
import { sahoPics } from "../sahoPics";
import { nRPics } from "../nRPics";
import { subDivPics } from "../subDivPics";
import { constructsPics } from "../constructsPics";

function CollectionContent() {
  const { collection } = useParams();
  const [selectedCollection, setSelectedCollection] = useState(cdPics);
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
    switch (collection) {
      case "saho":
        setSelectedCollection(sahoPics);
        break;
      case "subDivisions":
        setSelectedCollection(subDivPics);
        break;
      case "noisyRelations":
        setSelectedCollection(nRPics);
        break;
      case "constructs":
        setSelectedCollection(constructsPics);
        break;
      default:
        setSelectedCollection(cdPics);
    }
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
