import React from "react";
import { SingupProperty } from "../SingupProperty";
import Image from "next/image";

export const SearchServices = () => {
  return (
    <section className="container mx-auto px-4 mt-5">
      <div className="lg:grid grid-cols-12 gap-x-4">
        <div className="col-span-8 lg:grid grid-cols-12 rounded-2xl overflow-hidden">
          <div className="col-span-7 md:grid grid-cols-2 text-white bg-sp-solid-blue-700">
            <div className=" flex flex-col justify-center items-center text-center border-b border-r border-sp-solid-blue-500 p-20 lg:p-0">
              <div className="w-52">
                <h1 className="font-bold text-2xl">93% Auction Clearance</h1>
                <p className="mt-2.5 text-sm">
                  This is a short description about the days on market
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center  border-b border-sp-solid-blue-500 p-20 lg:p-0">
              <div className="w-52">
                <h1 className="font-bold text-2xl">28 Days on market</h1>
                <p className="mt-2.5 text-sm">
                  This is a short description about the days on market
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center  border-r border-sp-solid-blue-500 p-20 lg:p-0">
              <div className="w-52">
                <h1 className="font-bold text-2xl">100% list to sell ratio</h1>
                <p className="mt-2.5 text-sm">
                  This is a short description about the days on market
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center border-t md:border-t-0 border-sp-solid-blue-500 p-20 lg:p-0">
              <div className="w-52">
                <h1 className="font-bold text-2xl">
                  #1 Auction agent in Newcaslte
                </h1>
                <p className="mt-2.5 text-sm">
                  This is a short description about the days on market
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden col-span-5 w-full h-72 lg:w-auto lg:h-auto">
            <Image
              alt="hero image"
              src={"/image/search/donna-hero.png"}
              fill
              className=" object-cover"
            />
          </div>
        </div>
        <div className="col-span-4 mt-4 lg:mt-0">
          <SingupProperty />
        </div>
      </div>
    </section>
  );
};
