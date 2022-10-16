import React from 'react';
import collection2img1 from '../img/1Collection2.jpg';
import collection2img2 from '../img/2Collection2.jpg';
import collection2img3 from '../img/3Collection2.jpg';
import collection2img4 from '../img/4Collection2.jpg';

function Collection2Content() {
  const collectionTwoImages = [
    collection2img1,
    collection2img2,
    collection2img3,
    collection2img4
  ];

  return (
    <>
      <div id="collection2Content" className='content'>
        {collectionTwoImages.map((img) => (
          <img key={img} src={img} alt={img} className="collectionImage" />
        ))}
        <div className="caption">
          <p>This is collection 2, cool.</p>
        </div>
    </div>
    </>
  );
}

export default Collection2Content;