import { Button } from "@/components/Buttons";
import { Tag } from "@/components/Tag";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const IndustrialKnowledge = () => {
  return (
    <div className="lg:grid grid-cols-7 container mx-auto gap-x-36 mt-10 lg:mt-[104px]">
      <div className="col-span-2 flex items-center px-4 lg:px-0">
        <div>
          <h1 className="font-bold text-3xl">Industry Knowledge</h1>
          <p className="text-base text-sp-solid-gray-900 w-3/4 mt-4">
            This is a short description about the list to sell ratio statistic,
            why is this good? Keep to two lines max.
          </p>
          <Button
            label="View more knowledge articles"
            type="blue"
            className="mt-10 font-medium"
          />
        </div>
      </div>
      <div className="col-span-5 lg:grid grid-cols-12 bg-white rounded-2xl mt-6 lg:mt-0 mx-4 lg:mx-0  overflow-hidden gap-x-8">
        <div className="col-span-7 relative overflow-hidden">
            <Image alt="property image" src={"/image/about/pixasquare-4ojhpgKpS68-unsplash.png"} fill className="object-cover" />
        </div>
        <div className="col-span-5">
          <div className="p-8">
            <Tag label="Selling & the buying process" />
            <h1 className="text-3xl mt-4 font-bold">
              Why we don’t take on listings
            </h1>
            <p className="text-[#222222]/60 my-10 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p> 
            <Link href="">
             <p className="underline text-sm font-bold text-sp-solid-blue-800">Keep Reading</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
