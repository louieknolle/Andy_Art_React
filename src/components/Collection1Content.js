import React from 'react';
import '../styles/maincontent.css';
import collection1img1 from '../img/1Collection1.jpg';
import collection1img2 from '../img/2Collection1.jpg';
import collection1img3 from '../img/3Collection1.jpg';
import collection1img4 from '../img/4Collection1.jpg';

function Collection1Content() {
  const collectionOneImages = [
    collection1img1,
    collection1img2,
    collection1img3,
    collection1img4,
  ];

  return (
    <>
      <div className="collection1Content">
        {collectionOneImages.map((img) => (
          <img key={img} src={img} alt={img} className="collectionOneImage" />
        ))}
        <div className="caption">
          <p>This is collection 1, cool.</p>
        </div>
      </div>
    </>
  );
}

export default Collection1Content;