import {
    Button,
  Footer,
  Header,
  OurMission,
  SearchBar,
  SingupProperty,
  UniqSalesProcces,
} from "@/components";
import { PropertyCard } from "@/components/Cards/PropertyCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const index = () => {
  const properties = [1234567, 1234567, 1234567, 1234567];
  return (
    <div>
      <Header secondaryLinks={[]} />
      <div className="bg-[#EEF0F4] pb-32">
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
                  Recently Sold.
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
                Recently Sold First
              </Link>
            </h2>
          </div>
          <div className="container px-4 mx-auto">
            <section className="mt-10">
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
                  <PropertyCard
                    id={123456}
                    type="feature"
                    className="col-span-2 row-span-2"
                  />
                </div>
                <div className="col-span-2 bg-sp-solid-blue-700 rounded-2xl text-white">
                  <p className="px-10 pt-10 text-xl font-medium">
                    “Donna was simply amazing to work with. She guided me
                    through the process in a super simple and supportive way. I
                    never felt like I was pressured.”{" "}
                  </p>
                  <p className="text-xl font-medium mt-4 mx-10">Kim - Seller</p>
                  <div className="grid grid-cols-2 border border-sp-solid-blue-500 mt-8">
                    <div className="border-r border-x-sp-solid-blue-500">
                      <h1 className="text-3xl font-bold p-10 text-center">
                        Sold for $1,200,000.
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold p-10 text-center">
                        Sold in <br /> 20 Days.
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-between p-10 items-center">
                    <Button label="Read full Case Study" type="pink" className="text-black font-medium" />
                    <h1 className="text-white font-bold text-5xl">S.</h1>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-6">
                {properties.map((property) => (
                  <PropertyCard type="vertical" id={property} key={property} size="small" />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <UniqSalesProcces />
      </div>
      <div className="mt-28" />
      <OurMission />
      <Footer />
    </div>
  );
};

export default index;
