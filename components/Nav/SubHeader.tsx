import Image from "next/image";
import React from "react";

export const SubHeader = ({text} : {text: string}) => {
  return (
    <div className="bg-sp-pink">
      <div className="container mx-auto">
        <div className="flex gap-x-3 items-center border-t-2 border-sp-solid-pink-600  py-6 mx-4 justify-center lg:justify-start">
          <div>
            <Image
              alt="small logo"
              width={22}
              height={22}
              src={"/image/current-listing/SmallSquare-dark.png"}
            />
          </div>
          <h1 className="text-base font-medium text-sp-black">
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
};
