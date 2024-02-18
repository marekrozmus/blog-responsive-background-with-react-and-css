import React from "react";
import mobileBackground from "./assets/mobile.jpg";
import tabletBackground from "./assets/tablet.jpg";
import desktopBackground from "./assets/desktop.jpg";
import "./App.css";
import BackgroundSet from "./components/BackgroundSet";

function App() {
  const mainDivRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <p className="pt-4">CSS class with media queries</p>
      <div className="h-48 w-96 bg-simple-set" />
      <p className="pt-4">Tailwind with breakpoint</p>
      <div
        className="
        bg-no-repeat
        bg-contain
        bg-center
        bg-[url('./assets/mobile.jpg')]
        sm:bg-[url('./assets/tablet.jpg')]
        lg:bg-[url('./assets/desktop.jpg')]
        h-48 w-96"
      />
      <p className="pt-4">Tailwind dynamic classes won't work</p>
      <div
        className={`
        bg-no-repeat
        bg-contain
        bg-center
        bg-[url('${mobileBackground}')]
        sm:bg-[url('${tabletBackground}')]
        lg:bg-[url('${desktopBackground}')]
        h-48 w-96`}
      />
      <p className="pt-4">Reusable React component</p>
      <div
        ref={mainDivRef}
        className="
        bg-no-repeat
        bg-contain
        bg-center
        h-48 w-96">
        <BackgroundSet
          parentRef={mainDivRef}
          mobileImageSrc={mobileBackground}
          tabletImageSrc={tabletBackground}
          desktopImageSrc={desktopBackground}
        />
      </div>
      <p className="pt-4">Inline CSS</p>
      <div
        className="
        bg-no-repeat
        bg-contain
        bg-center
        h-48 w-96"
        style={{
          backgroundImage: `url('${mobileBackground}')`,
        }}
      />
    </>
  );
}

export default App;
