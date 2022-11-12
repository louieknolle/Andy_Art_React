import React, { useRef, useEffect, useState } from "react";
// import {
//   ref,
//   getDownloadURL,
//   list,
// } from "firebase/storage";
import storage from "../firebase";
// import collection1img1 from "../img/1Collection1.jpg";
// import collection1img2 from "../img/2Collection1.jpg";
// import collection1img3 from "../img/3Collection1.jpg";
// import collection1img4 from "../img/4Collection1.jpg";

function Collection1Content() {
  // const collectionOneImages = [
  //   collection1img1,
  //   collection1img2,
  //   collection1img3,
  //   collection1img4,
  // ];
  // const [imageUrls, setImageUrls] = useState([]);
  const scrollContainerRef = useRef(null);

  const imagesListRef = ref(storage, "collection1/");

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
    list(imagesListRef, { maxResults: 4 }).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <>
      <div
        id="collection1Content"
        className="content"
        ref={scrollContainerRef}
      >
        {imageUrls.map((url) => {
        return <img src={url} key={url} alt='fine art screenprint' className='collectionImage' />;
      })}
      </div>
      <div className="caption">
        <p>This is collection 1, cool.</p>
      </div>
    </>
  );
}

export default Collection1Content;
