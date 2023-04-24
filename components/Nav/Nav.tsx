import { useState } from "react";
import { SearchIcon, MenuIcon, SdotIcon } from "@/components";
import useScrollPosition from "@/hooks/useScrollPosition";

export function Nav() {
  const [searchState, setSearchState] = useState(false);
  const scrollPosition = useScrollPosition();
  const scrollPoint = 140;

  const items = [
    {
      label: "Buy",
      link: "/buy",
    },
    {
      label: "Lease",
      link: "/lease",
    },
    {
      label: "Sell",
      link: "/sell",
    },
  ];

  return (
    <div className="flex justify-center">
      <nav
        className={`rounded-lg bg-sp-blue border border-blue-900 px-6 flex self-center justify-self-center fixed z-30 ${
          scrollPosition >= scrollPoint && "drop-shadow-lg"
        }`}
      >
        <a
          href="/"
          className="text-white flex py-4 items-center transition-all overflow-hidden after:content-[''] after:mx-6 after:h-full after:border-r after:border-slate-600"
          style={{ width: scrollPosition >= scrollPoint ? 70 : 0 }}
        >
          <SdotIcon />
        </a>

        {items.map((navItem, index) => (
          <a
            href={navItem.link}
            key={navItem.link}
            className="pl-6 text-white py-4 after:content-[''] after:ml-6 after:h-full after:border-r after:border-slate-600"
            style={{
              paddingLeft: `${index === 0 && 0}`,
            }}
          >
            {navItem.label}
          </a>
        ))}
        <div className="pl-6 overflow-hidden flex items-center">
          <input
            type="text"
            placeholder="Search"
            className={`transition-all ${
              searchState && "mr-4 h-full px-4 bg-slate-800 text-white"
            }`}
            style={{ width: searchState ? 200 : 0 }}
          />
          <div
            onClick={() => setSearchState(!searchState)}
            style={{ cursor: "pointer" }}
            className="py-4"
          >
            <SearchIcon />
          </div>
        </div>
        <a
          href="#"
          className="
            text-white flex
              transition-all overflow-hidden pl-6 py-4
              before:content-[''] before:mr-6 before:h-full before:border-r before:border-slate-600
            "
          style={{
            width: scrollPosition >= 140 ? 70 : 0,
            paddingLeft: scrollPosition <= scrollPoint ? 0 : "inherit",
          }}
        >
          <MenuIcon />
        </a>
      </nav>
    </div>
  );
}
