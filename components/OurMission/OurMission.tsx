import Image from "next/image";
import React from "react";
import { Button } from "../Buttons";

export const OurMission = () => {
  return (
    <section className="mt-[79px] bg-unnamed-color ">
      <div className="container mx-auto px-4 pt-[59px] pb-[101px] grid grid-cols-7 gap-x-[62px]">
        <div className="col-span-4 bg-gray-200 h-[550px] rounded-3xl relative overflow-hidden">
          <Image
            alt="hero image"
            src="/image/home/hero-xlarge.png"
            className="object-cover w-full h-full"
            fill
          />
        </div>
        <div className="col-span-3 flex flex-col justify-center text-white">
          <h4 className=" text-sm">Our Mission</h4>
          <div className="w-full bg-white h-[1px] mt-[26px]" />
          <h1 className="text-4xl font-semibold mt-[40px]">
            The Spillane Property Mission
          </h1>
          <p className="text-base mt-[32px] text-unnamed-gray/60">
            Our mission at Spillane Property is to provide exceptional real
            estate services to our clients, while building long-term
            relationships based on trust and integrity. We strive to be the
            premier choice for buying, selling, and investing in real estate, by
            offering knowledgeable guidance, personalized service, and
            innovative solutions. We are dedicated to consistently exceeding our
            clients’ expectations and achieving their real estate goals.
          </p>
          <div>
            <Button
              label="More about us"
              type="pink"
              className="text-base font-medium mt-[56px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
