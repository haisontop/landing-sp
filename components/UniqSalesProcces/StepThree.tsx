import Image from "next/image";
import React from "react";

const StepThree = () => {
  return (
    <div className="lg:grid grid-cols-2 gap-x-4 lg:h-[674px]">
      <div className="rounded-3xl bg-sp-blue text-white">
        <div className="py-8 border-b border-sp-solid-blue-500">
          <h2 className="px-8 lg:px-16 text-base font-medium">Step 3 - Sell</h2>
        </div>
        <div className="p-8 lg:p-16 flex flex-col h-5/6 justify-end">
          <h1 className="text-3xl font-bold lg:w-6/12">
            Title of step one will go here.
          </h1>
          <p className="text-white/70 text-base my-10 lg:w-9/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div>
            <button className="text-base underline text-white/70">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
      <div className="relative rounded-3xl overflow-hidden hidden lg:inline-block">
        <Image
          alt="house image"
          src="/image/search/IDEA.00_03_10_07.Still003.png"
          className="object-cover object-center w-full"
          fill
        />
        <div className="absolute bottom-0 text-white p-16 bg-gradient-to-t w-full from-black/50 to-black/0">
          <h1 className="text-3xl font-bold w-3/5">
            Right people in the right place.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
