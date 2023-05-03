import { Tag } from "@/components/Tag";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React from "react";

export const AboutBanner = () => {
  return (
    <section className="container px-4 mx-auto mt-8 lg:-mt-8">
      <div className="lg:grid grid-cols-5 gap-x-32">
        <div className="col-span-2 flex flex-col justify-center gap-y-11">
          <h1 className="text-5xl font-bold text-sp-solid-blue-800">
            The Spillane <br /> Property Mission
          </h1>
          <p className="text-base text-sp-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-base text-sp-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="relative w-full h-52 lg:h-[600px] rounded-2xl overflow-hidden col-span-3 shadow-xl shadow-sp-blue/40 mt-9 lg:mt-0">
          <Image
            alt="hero group image"
            src={"/image/home/hero-xlarge.png"}
            className="object-cover"
            fill
          />
          <Tag label="The Spillane Property Team" icon={faUser} className="absolute items-center bottom-6 left-6" /> 
        </div>
      </div>
    </section>
  );
};
