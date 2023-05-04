import React from "react";
import UpcomingForm from "./UpcomingForm";
import MapBox from "./MapBox";

export const Map = () => {
  return (
    <>
      <div className="mt-20 grid lg:grid-cols-12 gap-x-4 border-2 rounded-2xl shadow-2xl bg-white">
        <UpcomingForm />
        <MapBox />
      </div>
      <div className="border-t-2 mt-5 block lg:hidden">
        <button className="bg-sp-blue text-white px-6 py-4 rounded-lg font-medium text-base w-full">
          Make an enquiry
        </button>
        <button className="bg-sp-blue text-white px-6 py-4 rounded-lg font-medium text-base w-full block mt-4">
          Register to bid
        </button>
      </div>
    </>
  );
};
