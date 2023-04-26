import {
  Button,
  Footer,
  Header,
  SearchBar,
  SearchItem,
  SearchServices,
  UniqSalesProcces,
} from "@/components";
import useSearch from "@/hooks/useSearch";
import Link from "next/link";
import React from "react";

const Search = () => {
  const { isFocus } = useSearch();

  return (
    <div>
      <Header secondaryLinks={[]} />
      <div className=" bg-[#EEF0F4] pb-80">
        <div className="bg-sp-pink h-10" />
        <div
          className={`-mt-10 ${
            isFocus ? "max-w-4xl" : "max-w-3xl"
          } mx-auto  transition-all duration-300 `}
        >
          <SearchBar />
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

export default Search;
