import React from "react";

type Props = {
  itemsLength: number;
  selectedIndex: number;
};

const Dots = ({ itemsLength, selectedIndex }: Props) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="flex gap-1 my-2 justify-center -translate-y-5 mt-10">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={`h-2 w-2 rounded-full transition-all duration-300 bg-sp-solid-blue-800 
              ${!selected ? "opacity-50" : ""} `}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};
export default Dots;
