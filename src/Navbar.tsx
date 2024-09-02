import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);
  const [buttonText, setButtonText] = useState("MENU");

  const toggleMenu = () => {
    if (menuOpen) {
      // 메뉴 닫을 때
      setAnimateMenu(false); // 닫힘 애니메이션을 실행
      setTimeout(() => {
        setMenuOpen(false); // 애니메이션이 끝난 후에 메뉴를 숨김
        setButtonText("MENU");
      }, 300); // 애니메이션 지속 시간과 맞춤
    } else {
      // 메뉴를 열 때
      setMenuOpen(true); // 메뉴를 먼저 열고
      setTimeout(() => setAnimateMenu(true), 10); // 애니메이션을 약간의 지연 후에 시작
      setButtonText("CLOSE");
    }
  };

  useEffect(() => {
    if (!animateMenu && menuOpen) {
      // 메뉴가 닫히는 애니메이션이 실행될 때
      const timer = setTimeout(() => {
        setMenuOpen(false); // 애니메이션이 끝난 후 메뉴 숨김
      }, 300); // 애니메이션 지속 시간과 일치
      return () => clearTimeout(timer); // 타이머 정리
    }
  }, [animateMenu, menuOpen]);

  return (
    <header className="flex items-center mx-auto mt-[25px] border border-gray-500 w-[1870px] h-[57px]">
      <div className="flex items-center justify-between w-full">
        {/* 로고 */}
        <div className="flex-none ml-[25px]">
          <a href="/" className="text-2xl font-bold">
            Flicker
          </a>
        </div>

        {/* 가운데 버튼 */}
        <div className="flex justify-center items-center">
          <div className="relative flex items-center">
            <div className="w-4 h-4 border border-black rounded-full"></div>
            <div className="w-4 h-4 bg-black border border-black rounded-full absolute left-3"></div>
          </div>
        </div>

        {/* 오른쪽 컨테이너 */}
        <div className="flex-none h-[57px] flex items-center relative">
          {/* 메뉴 항목들 */}
          {(menuOpen || animateMenu) && (
            <div
              className={`absolute right-[200px] flex items-center space-x-4 mr-4 transition-transform duration-300 transform ${
                animateMenu
                  ? "translate-x-0 opacity-100" // 열릴 때 애니메이션
                  : "translate-x-full opacity-0" // 닫힐 때 애니메이션
              }`}
              style={{
                transition: "transform 0.3s ease, opacity 0.3s ease", // 애니메이션 속도 설정
                display: menuOpen || animateMenu ? "flex" : "none", // 애니메이션 중이거나 메뉴가 열려 있을 때만 표시
              }}
            >
              <a
                href="#"
                className="text-black font-semibold whitespace-nowrap"
              >
                For Me
              </a>
              <a
                href="#"
                className="text-black font-semibold whitespace-nowrap"
              >
                Movies
              </a>
              <a
                href="#"
                className="text-black font-semibold whitespace-nowrap"
              >
                Login
              </a>
            </div>
          )}

          {/* MENU 버튼 */}
          <button
            onClick={toggleMenu}
            className="h-full px-[50px] flex items-center justify-center text-black font-semibold hover:bg-black hover:text-white transition-colors"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
