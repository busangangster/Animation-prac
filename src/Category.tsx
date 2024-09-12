import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Category = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null); // 타입 명시

  const handleClick = () => {
    setIsExpanded((prev) => !prev);
  };

  // 컴포넌트 외부 클릭 시 축소
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const movieImg = [
    "https://via.placeholder.com/200x300?text=Movie+2",
    "https://via.placeholder.com/200x300?text=Movie+2",
    "https://via.placeholder.com/200x300?text=Movie+2",
    "https://via.placeholder.com/200x300?text=Movie+2",
    "https://via.placeholder.com/200x300?text=Movie+2",
    "https://via.placeholder.com/200x300?text=Movie+2",
    "https://via.placeholder.com/200x300?text=Movie+2",
    "https://via.placeholder.com/200x300?text=Movie+2",
    "https://via.placeholder.com/200x300?text=Movie+2",
    "https://via.placeholder.com/200x300?text=Movie+2",
    "https://via.placeholder.com/200x300?text=Movie+2",
    "https://via.placeholder.com/200x300?text=Movie+2",
  ];

  return (
    <div className="flex flex-col bg-black h-screen overflow-y-auto">
      <header className="sticky top-0 bg-transparent z-10">
        <Navbar />
      </header>

      <div className="mt-[40px] flex justify-end items-end w-[1800px]">
        <div
          ref={searchRef}
          className={`flex items-center transition-all duration-400 ${
            isExpanded
              ? "w-[300px] border border-white p-2 rounded"
              : "w-[50px]"
          }`}
        >
          <div className="flex items-center">
            <svg
              onClick={handleClick}
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`cursor-pointer transition-transform duration-400 ${
                isExpanded ? "translate-x-[-50px] " : ""
              }`}
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <line
                x1="16"
                y1="16"
                x2="22"
                y2="22"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            <input
              type="text"
              placeholder="제목, 사람, 장르"
              className={`bg-transparent border-none outline-none text-white text-lg transition-all duration-400 ${
                isExpanded ? "w-[200px] opacity-100" : "w-0 opacity-0"
              }`}
            />
          </div>
        </div>
      </div>

      <div className="h-[300px] w-[1700px] flex-shrink-0 mb-[100px] ml-[100px]">
        <h3 className="text-white mb-[20px] text-[27px]">카테고리</h3>

        <Swiper
          slidesPerView={8}
          // spaceBetween={}
          // slidesOffsetBefore={50} // 시작할 때 한 칸 걸쳐 보이도록 설정
          navigation
          pagination={{ clickable: true }}
          // style={{ padding: "0 0" }} // 슬라이더 여백 조정
        >
          {movieImg.map((img, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <img
                src={img}
                alt={`Movie ${index + 1}`}
                className="rounded-lg shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="h-[300px] w-[1700px] flex-shrink-0 mb-[100px] ml-[100px]">
        <h3 className="text-white mb-[20px] text-[27px]">카테고리</h3>
        <Swiper
          slidesPerView={8}
          // spaceBetween={}
          // slidesOffsetBefore={50} // 시작할 때 한 칸 걸쳐 보이도록 설정
          navigation
          pagination={{ clickable: true }}
          // style={{ padding: "0 0" }} // 슬라이더 여백 조정
        >
          {movieImg.map((img, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <img
                src={img}
                alt={`Movie ${index + 1}`}
                className="rounded-lg shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="h-[300px] w-[1700px] flex-shrink-0 mb-[100px] ml-[100px]">
        <h3 className="text-white mb-[20px] text-[27px]">카테고리</h3>
        <Swiper
          slidesPerView={8}
          // spaceBetween={}
          // slidesOffsetBefore={50} // 시작할 때 한 칸 걸쳐 보이도록 설정
          navigation
          pagination={{ clickable: true }}
          // style={{ padding: "0 0" }} // 슬라이더 여백 조정
        >
          {movieImg.map((img, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <img
                src={img}
                alt={`Movie ${index + 1}`}
                className="rounded-lg shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
