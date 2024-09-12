import React from "react";

interface CardProps {
  angle: number;
  radius: number;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ angle, radius, children }) => {
  const radians = (angle * Math.PI) / 180;
  const x = radius * Math.cos(radians);
  const y = radius * Math.sin(radians);

  return (
    <div
      className="absolute"
      style={{
        transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`, // 카드가 세워져서 반원 형태로 배치됨
        transformOrigin: "bottom center", // 카드 중심을 하단으로 설정
        width: "100px",
        height: "200px",
        backgroundColor: "#4A90E2",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
