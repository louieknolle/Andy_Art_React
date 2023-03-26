import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../index.css";
import SharedLayout from "./SharedLayout";
import CollectionContent from "./CollectionContent";
import Collection2Content from "./Collection2Content";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<CollectionContent />} />
          <Route path="saho" element={<CollectionContent />} saho={true} />
          <Route
            path="subdivisions"
            element={<CollectionContent />}
            subDivisions={true}
          />
          <Route
            path="constructs"
            element={<CollectionContent />}
            constructs={true}
          />
          <Route
            path="noisyrelations"
            element={<CollectionContent />}
            noisyRelations={true}
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
