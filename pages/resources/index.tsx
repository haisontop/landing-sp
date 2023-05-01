import { Header } from "@/components";
import Image from "next/image";
import React from "react";
import resource from "../../fakedata/ResourseFakeDate";
import {
  ResourcesCard,
  resourcesTypes,
} from "@/components/Resources/ResourcesCard";

const index = () => {
  return (
    <>
      <Header secondaryLinks={[]} />

      <div className="bg-sp-solid-gray-500">
        <div className="bg-sp-pink">
          <div className="container mx-auto">
            <div className="flex gap-x-3 items-center border-t-2 border-sp-solid-pink-600  py-6 mx-4">
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
        <div className="container mx-auto px-4 mt-10">
          <div className="grid grid-cols-2 gap-y-8">
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
      </div>
    </>
  );
};

export default index;
