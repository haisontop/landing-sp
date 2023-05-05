import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Nextbutton = ({ onclick }: { onclick: () => void }) => {
  return (
    <button
      className="bg-sp-solid-blue-800 w-24 h-24 text-lg absolute -right-12 text-white top-2/4 -mt-7  flex justify-start items-center pl-5 rounded-full"
      onClick={onclick}
    >
      <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "24px" }} />
    </button>
  );
};

export const Prevbutton = ({ onclick }: { onclick: () => void }) => {
  return (
    <button
      className="bg-sp-solid-blue-800 w-24 h-24 text-lg absolute -left-12 text-white top-2/4 -mt-7 flex justify-end items-center pr-5 rounded-full"
      onClick={onclick}
    >
      <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: "24px" }} />
    </button>
  );
};
