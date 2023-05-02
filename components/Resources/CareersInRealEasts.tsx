import Image from "next/image";
import React from "react";
import { Button } from "../Buttons";

export const CareersInRealEasts = () => {
  return (
    <section className="mt-8 lg:mt-[79px] bg-sp-solid-pink-500 ">
      <div className="container mx-auto px-4 pt-[59px] pb-[101px] grid lg:grid-cols-7 gap-x-[62px]">
        <div className="col-span-4 hidden lg:inline-block h-[550px] rounded-3xl relative overflow-hidden">
          <Image
            alt="hero image"
            src="/image/home/hero-xlarge.png"
            className="object-cover w-full h-full"
            fill
          />
        </div>
        <div className="col-span-3 flex flex-col justify-center text-sp-solid-pink-400">
          <h1 className="text-4xl font-semibold mt-[40px] md:mt-0 text-sp-solid-blue-800">
            Careers in Real Estate
          </h1>
          <p className="text-base mt-[32px] text-sp-solid-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="w-full h-[230px] relative rounded-2xl mt-8 md:mt-0 md:hidden overflow-hidden">
            <Image
              alt="hero image"
              src="/image/home/hero-xlarge.png"
              className="object-cover w-full h-full"
              fill
            />
          </div>
          <h1 className="text-4xl font-semibold mt-[40px] text-sp-black">
            We’re always on the hunt for passionate individuals
          </h1>
          <p className="text-base mt-[32px] text-sp-solid-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div>
            <Button
              label="Send us your resume"
              type="blue"
              className="text-base font-medium mt-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
