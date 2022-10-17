import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import '../index.css'; 
import SharedLayout from "./SharedLayout";
import Collection1Content from "./Collection1Content";
import Collection2Content from "./Collection2Content";
import Collection3Content from "./Collection3Content";
import Collection4Content from "./Collection4Content";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";

function App() {

  return (
    
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
      </BrowserRouter>

    
  );
}

export default App;
