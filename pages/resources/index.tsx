import { Button, CareersInRealEasts, Footer, Header } from "@/components";
import Image from "next/image";
import React from "react";
import resource from "../../fakedata/ResourseFakeDate";
import {
  ResourcesCard,
  resourcesTypes,
} from "@/components/Resources/ResourcesCard";
import Accordions from "@/components/Accordions/Accordions";
import { accordion } from "@/fakedata/AccourdiansFakeData";

const index = () => {
  return (
    <>
      <Header secondaryLinks={[]} />

      <div className="bg-sp-solid-gray-500">
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
                Donna Spillane
              </h1>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-5 lg:mt-10">
          <div className="grid lg:grid-cols-2 lg:gap-y-8">
            {resource.map((rs: resourcesTypes) => (
              <ResourcesCard
                key={rs.id}
                title={rs.title}
                subtitle={rs.subtitle}
                id={rs.id}
                resources={rs.resources}
              />
            ))}
          </div>
        </div>
        <section className="container mx-auto px-4 mt-14 grid lg:grid-cols-6 lg:gap-x-24">
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-sp-black">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 text-base text-sp-black/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
            <div>
              <p className="text-base text-sp-black/80">
                Still have questions?
              </p>
              <Button
                label="Contact Us"
                type="blue"
                className="font-bold mt-4"
              />
            </div>
          </div>
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <Accordions content={accordion} />
          </div>
        </section>
        <CareersInRealEasts />
      </div>
      <Footer />
    </>
  );
};

export default index;
