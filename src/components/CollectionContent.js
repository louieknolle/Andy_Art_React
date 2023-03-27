import React, { useRef, useEffect, useState } from "react";
import { cdPics } from "../cDPics";
import { sahoPics } from "../sahoPics";
import { nRPics } from "../nRPics";
import { subDivPics } from "../subDivPics";
import { constructsPics } from "../constructsPics";

function CollectionContent({ collection }) {
  // const params = useParams();
  // const { collection } = params;
  const [selectedCollection, setSelectedCollection] = useState(cdPics);
  const scrollContainerRef = useRef(null);

  console.log(collection);

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
