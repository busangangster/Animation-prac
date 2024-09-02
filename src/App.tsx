// App.jsx
import React from "react";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 상단 네브바 */}
      <header className="sticky top-0 bg-white z-10">
        <Navbar />
      </header>

      {/* 메인 콘텐츠 영역 */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-center text-3xl font-bold">메인 콘텐츠</h1>
        {/* 메인 콘텐츠를 여기에 추가 */}
      </main>
    </div>
  );
}

export default App;
