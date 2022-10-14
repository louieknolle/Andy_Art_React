import React from 'react';
import Collection1Content from './Collection1Content';
// import Collection2Content from './Collection2Content';
import '../styles/maincontent.css';

function MainContent() {
  return (
    <>
      <div className='mainContent'>
        <main>
          <Collection1Content />
          {/* <Collection2Content /> */}
        </main>
      </div>
    </>
  );
}

export default MainContent;