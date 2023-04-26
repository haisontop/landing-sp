import { faSearch, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "../Buttons";
import useSearch from "@/hooks/useSearch";

export const SearchBar = () => {
  const {setIsFocus, isFocus} = useSearch()
  return (
    <div
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      className={`px-8 py-6 shadow-2xl rounded-2xl border border-sp-gray bg-white`}
    >
      <div
        className={`flex transition-all duration-300 gap-8 items-stretch border-sp-gray rounded-2xl`}
      >
        <input
          type="text"
          name="address"
          placeholder="Search for address or suburb"
          className="grow border-r border-gray-200 text-lg w-full outline-none"
        />
        <select name="type" id="type" className="text-lg pr-4 outline-none">
          <option value="sale">For Sale</option>
          <option value="lease">For Lease</option>
          <option value="sold">Sold</option>
          <option value="leased">Leased</option>
        </select>
        <div className="text-lg border-l border-gray-200 pl-8 flex items-center">
          <FontAwesomeIcon icon={faSliders} className="w-4" />
        </div>
        {isFocus && (
          <Button
            label="Search"
            icon={faSearch}
            className="w-full max-w-[180px] justify-center"
          />
        )}
      </div>
    </div>
  );
};
