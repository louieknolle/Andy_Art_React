import React from "react";
import { useEffect, useRef } from "react";
import Collection1Content from "./Collection1Content";
import Collection2Content from "./Collection2Content";

export function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        if (
          !(el.scrollLeft === 0 && e.deltaY < 0) &&
          !(
            el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 &&
            e.deltaY > 0
          )
        ) {
          e.preventDefault();
        }
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}

function MainContent() {
  return (
    <>
      <div id="mainContent">
        <main id="main" onWheel={useHorizontalScroll}>
          <Collection1Content />
          <Collection2Content />
        </main>
      </div>
    </>
  );
}

export default MainContent;
