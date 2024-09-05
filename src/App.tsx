// App.jsx
// import React from "react";
import Navbar from "./Navbar";
import CircleCarousel from "./CircleCarousel";
import LandingPage from "./LandingPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 상단 네브바 */}
      <header className="sticky top-0 bg-white z-10">
        <Navbar />
      </header>

      {/* 메인 콘텐츠 영역 */}
      <main className="w-hull h-screen">
        {/* <CircleCarousel /> */}
        <LandingPage />
      </main>
    </div>
  );
}

export default App;
