import React from 'react';
import Collection1Content from './Collection1Content';
import Collection2Content from './Collection2Content';

function MainContent() {
  return (
    <>
      <div className='mainContent'>
        <Collection1Content />
        <Collection2Content />
      </div>
    </>
  );
}

export default MainContent;