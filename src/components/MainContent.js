import React from 'react';
// import { useState, useEffect, useRef } from "react";
import Collection1Content from './Collection1Content';
// import Collection2Content from './Collection2Content';


function MainContent() {
  // const scrollContainerRef = React.useRef(null);
  // const [scrollX, setScrollX] = React.useState(0);
	
  
  // React.useEffect(() => {
  //   const handleScrollEvent = ({wheelDeltaY}) => {
  //     scrollContainerRef.current.scrollLeft =  scrollContainerRef.current.scrollLeft + wheelDeltaY
  //   };
  //   window.addEventListener('wheel', handleScrollEvent);

  //   return () => {
  //     window.removeEventListener('wheel', handleScrollEvent);
  //   };
  // }, []);

  return (
    <>
      <div id='mainContent'>
        <main>
          <Collection1Content />
          {/* <Collection2Content /> */}
        </main>
      </div>
    </>
  );
}

export default MainContent;