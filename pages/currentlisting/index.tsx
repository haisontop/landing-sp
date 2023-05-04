import {
  Footer,
  Header,
  SearchBar,
  SingupProperty,
  UniqSalesProcces,
} from "@/components";
import { PropertyCard } from "@/components/Cards/PropertyCard";
import builder from "@builder.io/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function getStaticProps() {
  builder.init("bc22dc3b592c4fb7860d855ad1b2c528");

  const secondaryLinks = await builder.getAll("secondary-nav", {
    // You can use options for queries, sorting, and targeting here
    // https://github.com/BuilderIO/builder/blob/main/packages/core/docs/interfaces/GetContentOptions.md
  });

  return {
    props: {
      secondaryLinks: secondaryLinks || null,
    },
    revalidate: 5,
  };
}


const index = ({ secondaryLinks }: { secondaryLinks: any }) => {
  const properties = [1234567, 1234567, 1234567, 1234567, 1234567, 1234567];
  return (
    <div>
      <Header secondaryLinks={secondaryLinks} />
      <div className="bg-[#EEF0F4] pb-80">
        <div className="bg-sp-pink h-20 lg:h-24" />
        <div className="container px-4 mx-auto">
          <div className="flex justify-center lg:justify-between mx-4 -mt-20 lg:-mt-16 pt-6 border-t border-[#E6BFBF]">
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
            <div className="max-w-4xl hidden lg:inline-block">
              <SearchBar />
            </div>
          </div>
          <div className="flex justify-center lg:justify-between items-center mt-14 lg:mt-4 px-4">
            <h1 className="text-4xl font-bold text-sp-solid-blue-800 hidden lg:inline-block">
              Auctions & Opens this Weekend
            </h1>
            <h2 className="text-center text-base text-sp-solid-gray-800">
              Showing{" "}
              <Link href="" className="underline">
                Upcoming Auctions First
              </Link>
            </h2>
          </div>
          <div className="container mx-auto">
            <section className="mt-10">
              <div className=" flex flex-col lg:grid lg:grid-cols-4 gap-6 lg:gap-4">
                <div className="col-span-2">
                  <PropertyCard
                    id={123456}
                    type="feature"
                    className="col-span-2 row-span-2"
                  />
                </div>
                {properties.map((property) => (
                  <PropertyCard
                    type="vertical"
                    id={property}
                    key={property}
                    size="small"
                  />
                ))}
              </div>
              <div className="w-full flex justify-center">
                <button className=" border-2 border-sp-solid-blue-800 py-4 px-10 mt-14 inline-block lg:hidden rounded-xl font-semibold text-xl">
                  View More
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <section className=" -mt-64">
          <div className=" flex flex-col lg:grid grid-cols-12 gap-4 px-4">
            <div className="col-span-8">
              <h1 className="text-2xl font-semibold text-sp-solid-blue-800 mb-8 text-center lg:text-left px-10 lg:px-0">
                You might also be interested in
              </h1>
              <PropertyCard
                id={123456}
                type="feature"
                className="col-span-2 row-span-2"
              />
            </div>
            <div className=" col-span-4">
              <h1 className="text-2xl font-semibold text-sp-solid-blue-800 mb-8 hidden lg:inline-block">
                Stay in the loop
              </h1>
              <SingupProperty />
            </div>
          </div>
        </section>
        <UniqSalesProcces />
      </div>
      <div className="mt-[67px] lg:mt-28" />
      <Footer />
    </div>
  );
};

export default index;
