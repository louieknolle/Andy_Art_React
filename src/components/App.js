import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../index.css";
import SharedLayout from "./SharedLayout";
import CollectionContent from "./CollectionContent";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<CollectionContent />} />
          <Route
            path="saho"
            element={<CollectionContent />}
            collection="saho"
          />
          <Route
            path="subDivisions"
            element={<CollectionContent />}
            collection="subDivisions"
          />
          <Route
            path="constructs"
            element={<CollectionContent />}
            collection="constructs"
          />
          <Route
            path="noisyRelations"
            element={<CollectionContent />}
            collection="noisyRelations"
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
