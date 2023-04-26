import {
  Footer,
  Header,
  SearchBar,
  SingupProperty,
  UniqSalesProcces,
} from "@/components";
import { PropertyCard } from "@/components/Cards/PropertyCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const index = () => {
  const properties = [1234567, 1234567, 1234567, 1234567, 1234567, 1234567];
  return (
    <div>
      <Header secondaryLinks={[]} />
      <div className="bg-[#EEF0F4] pb-80">
      <div className="bg-sp-pink h-24" />
        <div className="container px-4 mx-auto">
          <div className="flex justify-between mx-4 -mt-16 pt-6 border-t border-[#E6BFBF]">
            <div>
              <div className="flex gap-x-3 items-center">
                <div>
                  <Image
                    alt="small logo"
                    width={22}
                    height={22}
                    src={"/image/current-listing/SmallSquare-dark.png"}
                  />
                </div>
                <h1 className="text-base font-medium text-sp-black">
                  For Sale
                </h1>
              </div>
            </div>
            <div className=" max-w-4xl">
              <SearchBar />
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 px-4">
            <h1 className="text-4xl font-bold text-sp-solid-blue-800">
              Auctions & Opens this Weekend
            </h1>
            <h2 className="text-center text-base text-sp-black">
              Showing{" "}
              <Link href="" className="underline">
                Upcoming Auctions First
              </Link>
            </h2>
          </div>
          <div className="container px-4 mx-auto">
            <section className="mt-10">
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2">
                  <PropertyCard
                    id={123456}
                    type="feature"
                    className="col-span-2 row-span-2"
                  />
                </div>
                {properties.map((property) => (
                  <PropertyCard type="vertical" id={property} key={property} size="small" />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <section className=" -mt-64">
          <div className="grid grid-cols-12 gap-x-4 px-4">
            <div className="col-span-8">
              <h1 className="text-2xl font-semibold text-sp-solid-blue-800 mb-8">
                You might also be interested in
              </h1>
              <PropertyCard
                id={123456}
                type="feature"
                className="col-span-2 row-span-2"
              />
            </div>
            <div className=" col-span-4">
              <h1 className="text-2xl font-semibold text-sp-solid-blue-800 mb-8">
                Stay in the loop
              </h1>
              <SingupProperty />
            </div>
          </div>
        </section>
        <UniqSalesProcces />
      </div>
      <div className="mt-28" />
      <Footer />
    </div>
  );
};

export default index;
