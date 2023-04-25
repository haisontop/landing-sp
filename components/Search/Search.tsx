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
  const [search, setSearch] = useState<null | string>(null);
  return (
    <div className={`flex transition-all duration-300 gap-8 items-stretch ${search ? 'max-w-4xl' : 'max-w-3xl'} border-sp-gray rounded-2xl p-8 mx-auto shadow-2xl`}>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
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
        <h4 className="pr-8">Filters</h4>
        <FontAwesomeIcon icon={faSliders} className="w-4" />
      </div>
      {search && (
        <Button
          label="Search"
          icon={faSearch}
          className="w-full max-w-[180px] justify-center"
        />
      )}
    </div>
  );
};
