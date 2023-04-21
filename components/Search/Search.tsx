import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSliders } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components";

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
    <div className="flex gap-8 items-stretch">
      <input
        type="text"
        name="address"
        placeholder="Search for address or suburb"
        className="grow border-r border-gray-200 text-lg"
      />
      <select name="type" id="type" className="text-lg pr-4">
        <option value="sale">For Sale</option>
        <option value="lease">For Lease</option>
        <option value="sold">Sold</option>
        <option value="leased">Leased</option>
      </select>
      <div className="text-lg border-l border-gray-200 pl-8 flex items-center">
        <h4 className="pr-8">Filters</h4>
        <FontAwesomeIcon icon={faSliders} className="w-4" />
      </div>
      <Button
        label="Search"
        icon={faSearch}
        className="w-full max-w-[180px] justify-center"
      />
    </div>
  );
};
