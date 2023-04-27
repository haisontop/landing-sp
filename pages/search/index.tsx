import {
  Button,
  Footer,
  Header,
  Search,
  SearchBar,
  SearchItem,
  SearchServices,
  UniqSalesProcces,
} from "@/components";
import useSearch from "@/hooks/useSearch";
import Link from "next/link";
import React from "react";

const index = () => {
  const { isFocus } = useSearch();

  return (
    <div>
      <Header secondaryLinks={[]} />
      <div className=" bg-[#EEF0F4] pb-80">
        <div className="bg-sp-pink h-10" />
        <div
          className={`-mt-10 ${
            isFocus ? "md:max-w-4xl" : "md:max-w-3xl"
          } md:mx-auto  transition-all duration-300 bg-white md:px-6 md:py-3 rounded-2xl mx-4`}
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
      <div className="mt-28" />
      <Footer />
    </div>
  );
};

export default index;
