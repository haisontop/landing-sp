import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSliders } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components";
import { useState } from "react";

interface SearchProps {
  term?: string;
  category: "Sale" | "Lease" | "Sold" | "Leased";
  filters?: any;
}

export const Search: React.FC<SearchProps> = ({
  term = "",
  category,
  filters = "",
}) => {
  return (
    <>
      <div
        className={`flex flex-col md:flex-row transition-all duration-300 md:gap-8 items-stretch border-sp-gray rounded-2xl`}
      >
        <div className="border p-6 md:border-0 md:p-0 w-full md:border-r border-gray-200 flex items-center justify-between">
          <input
            type="text"
            name="address"
            placeholder="Search for address or suburb"
            className="grow  text-lg w-full outline-none md:p-0"
          />
          <FontAwesomeIcon icon={faSliders} className="w-4 md:hidden" />
        </div>
        <div className="flex md:gap-8 justify-between md:justify-normal">
          <select
            name="type"
            id="type"
            className="text-lg pr-4 pl-6 outline-none"
          >
            <option value="sale">For Sale</option>
            <option value="lease">For Lease</option>
            <option value="sold">Sold</option>
            <option value="leased">Leased</option>
          </select>
          <div className="text-lg border-l border-gray-200 pl-8 items-center hidden md:flex ">
            <h4 className="pr-8">Filters</h4>
            <FontAwesomeIcon icon={faSliders} className="w-4" />
          </div>
          <Button
            label="Search"
            icon={faSearch}
            className="w-full max-w-[180px] justify-center"
          />
        </div>
      </div>
    </>
  );
};
