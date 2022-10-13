import React from 'react';

const collOneImages = [
  '../img/1Collection1.jpg',
  '../img/2Collection1.jpg',
  '../img/3Collection1.jpg',
  '../img/4Collection1.jpg'
];

function Collection1Content() {
  return (
    <>
      <div className="collection1Content">
        {collOneImages.map((img) => (
          <img key={img} src={img} alt={img} className="collectionOneImage" />
        ))}
    </div>
    </>
  );
}

export default Collection1Content;