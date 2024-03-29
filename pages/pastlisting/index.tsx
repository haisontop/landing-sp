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
  const properties = [1234567, 1234567, 1234567, 1234567];
  return (
    <div>
      <Header secondaryLinks={secondaryLinks} />
      <div className="bg-[#EEF0F4] pb-5  lg:pb-32">
        <div className="bg-sp-pink h-24" />
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
                  Recently Sold.
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
            <h2 className="text-center text-base text-sp-black">
              Showing{" "}
              <Link href="" className="underline">
                Upcoming Auctions First
              </Link>
            </h2>
          </div>
          <div className="container mx-auto">
            <section className="mt-10">
              <div className="flex flex-col lg:grid grid-cols-5 gap-6 lg:gap-4">
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
                  <div className="lg:grid grid-cols-2 border border-sp-solid-blue-500 mt-8 text-sp-pink lg:text-white ">
                    <div className="border-r border-b lg:border-b-0 border-x-sp-solid-blue-500">
                      <h1 className="text-2xl lg:text-3xl font-bold py-5 lg:p-10 text-center">
                        Sold for $1,200,000.
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-2xl lg:text-3xl font-bold py-5 lg:p-10 text-center">
                        Sold in 20 Days.
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-center lg:justify-between p-10 items-center">
                    <Button
                      label="Read full Case Study"
                      type="pink"
                      className="text-black font-medium"
                    />
                    <h1 className="text-white font-bold text-5xl hidden lg:inline-block">
                      S.
                    </h1>
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-4 gap-6 lg:gap-4 mt-6">
                {properties.map((property) => (
                  <PropertyCard
                    type="vertical"
                    id={property}
                    key={property}
                    size="small"
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button className=" border-2 border-sp-solid-blue-800 py-4 px-10 mt-14 inline-block lg:hidden rounded-xl font-semibold text-xl">
          View More
        </button>
      </div>
      <div className="container mx-auto">
        <UniqSalesProcces />
      </div>
      <div className=" mt-[67px] lg:mt-28" />
      <OurMission />
      <Footer />
    </div>
  );
};

export default index;
