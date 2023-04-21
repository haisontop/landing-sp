import React from "react";

interface CardProps {
  className?: string;
  color?: "white" | "blue" | "pink";
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  className = "",
  color = "white",
  children,
}) => {
  let colorClass = "";

  switch (color) {
    case "white":
      colorClass = "bg-white";
      break;
    case "blue":
      colorClass = "bg-sp-blue";
      break;
    case "pink":
      colorClass = "bg-sp-pink";
      break;
  }

  const style = `
        rounded-2xl border shadow-2xl overflow-hidden 
        ${className} 
        ${colorClass !== "" ? colorClass : ""} 
        ${color === "white" ? "border-gray-200" : ""}
        ${color === "blue" ? "text-white border-blue-900" : ""}
        ${color === "pink" ? "border-rose-200" : ""}
  `;

  return <div className={style}>{children}</div>;
};
