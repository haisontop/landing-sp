import {
  Footer,
  Header,
  Search,
  SearchItem,
  SearchServices,
  UniqSalesProcces,
} from "@/components";
import builder from "@builder.io/react";
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

  return (
    <div>
      <Header secondaryLinks={secondaryLinks} />
      <div className=" bg-[#EEF0F4] pb-80">
        <div className="bg-sp-pink h-10" />
        <div
          className={`-mt-10 
            md:max-w-4xl bg-white md:px-6 md:py-3 rounded-2xl mx-4 md:mx-auto`}
        >
          <Search category={"Sold"} />
        </div>
        <h2 className="text-center mt-12 text-base text-sp-black">
          Showing{" "}
          <Link href="" className="underline">
            Upcoming Auctions First
          </Link>
        </h2>
        <SearchItem />
      </div>
      <div className=" -mt-72">
        <SearchServices />
      </div>
      <UniqSalesProcces />
      <div className="mt-[67px] md:mt-28" />
      <Footer />
    </div>
  );
};

export default index;
