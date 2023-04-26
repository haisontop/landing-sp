import { Header, SearchBar } from "@/components";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div>
      <Header secondaryLinks={[]} />
      <div>
        <div className="container px-4 mx-auto">
          <div className="flex justify-between">
            <div className="flex gap-x-3 items-center">
              <div>
                <Image
                  alt="small logo"
                  width={22}
                  height={22}
                  src={"/image/current-listing/SmallSquare-dark.png"}
                />
              </div>
              <h1 className="text-base font-medium text-sp-black">For Sale</h1>
            </div>
            <div className="w-[688px]">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
