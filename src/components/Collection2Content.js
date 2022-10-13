import React from 'react';

const collectionTwoImages = [
  '../img/1Collection2.jpg',
  '../img/2Collection2.jpg',
  '../img/3Collection2.jpg',
  '../img/4Collection2.jpg'
];

function Collection2Content() {
  return (
    <>
      <div className="collection2Content">
        {collectionTwoImages.map((img) => (
          <img key={img} src={collectionTwoImages} alt={img} className="collectionTwoImage" />
        ))}
    </div>
    </>
  );
}

export default Collection2Content;