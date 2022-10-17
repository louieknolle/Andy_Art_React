import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PacmanLoader from "react-spinners/PacmanLoader";
import '../index.css'; 
import SharedLayout from "./SharedLayout";
import Collection1Content from "./Collection1Content";
import Collection2Content from "./Collection2Content";
import Collection3Content from "./Collection3Content";
import Collection4Content from "./Collection4Content";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";
import collection1img1 from '../img/1Collection1.jpg';
import collection1img2 from '../img/2Collection1.jpg';
import collection1img3 from '../img/3Collection1.jpg';
import collection1img4 from '../img/4Collection1.jpg';
import collection2img1 from '../img/1Collection2.jpg';
import collection2img2 from '../img/2Collection2.jpg';
import collection2img3 from '../img/3Collection2.jpg';
import collection2img4 from '../img/4Collection2.jpg';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgs = [
      collection1img1,
      collection1img2,
      collection1img3,
      collection1img4,
      collection2img1,
      collection2img2,
      collection2img3,
      collection2img4
  ]
    cacheImages(imgs);
  }, []);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);
    setIsLoading(false);
  }

  return (
    <div>
    { isLoading
    ?
    <div>
      <PacmanLoader />
    </div>
    :
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<SharedLayout />} >
            <Route index element={<Collection1Content />} />
            <Route path='collection2' element={<Collection2Content />} />
            <Route path='collection3' element={<Collection3Content />} />
            <Route path='collection4' element={<Collection4Content />} />
            <Route path='blog' element={<Blog />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Route>

        </Routes>
      </BrowserRouter>}

    </div>
  );
}

export default App;
