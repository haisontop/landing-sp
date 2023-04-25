import Image from "next/image";
import React from "react";

const StepOne = () => {
  return (
    <div className="grid grid-cols-2 gap-x-4 h-[674px]">
      <div className="rounded-3xl bg-sp-solid-gray-500">
        <div className="py-8 border-b border-sp-solid-gray-600">
          <h2 className="px-16 text-base font-medium">Step 1 - Positioning</h2>
        </div>
        <div className="p-16 flex flex-col h-5/6 justify-end">
          <h1 className="text-3xl font-bold w-6/12">
            Title of step one will go here.
          </h1>
          <p className="text-sp-black/70 text-base my-10 w-9/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div>
          <button className="text-base underline text-sp-blue">Learn More About Us</button>
          </div>
        </div>
      </div>
      <div className="relative rounded-3xl overflow-hidden">
        <Image
          alt="house image"
          src="/image/search/webaliser-_TPTXZd9mOo-unsplash.png"
          className="object-cover object-center w-full"
          fill
        />
        <div className="absolute bottom-0 text-white p-16 bg-gradient-to-t w-full from-black/50 to-black/0">
            <h1 className="text-3xl font-bold w-3/5">We find ideal market fit.</h1>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
