import {
  faBath,
  faBed,
  faCalendarPlus,
  faCar,
  faDoorOpen,
  faFilePdf,
  faLocationDot,
  faRuler,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AgentCard } from "../Cards";

const agent = [
  {
    name : "Donna Spillane",
    profession : "Principal and Licensed Real Estate Agent",
    img : "/image/listing/200813_Spillane.Property-10.png"
  },
  {
    name : "Patrick Skinner ",
    profession : "Sales Associate",
    img : "/image/listing/210714_Spillane.Property-6.png"
  }
]

const ListingSideCard = () => {
  const features = [
    {
      label: "3",
      type: "bed",
    },
    {
      label: "1",
      type: "car",
    },
    {
      label: "1",
      type: "bath",
    },
    {
      label: "300",
      type: "footage",
    },
  ];
  return (
    <div>
      <div className=" grid grid-cols-12 border-b-2">
        <div className="text-base flex gap-x-2 col-span-10 border-r-2 px-10  py-4">
          <h3 className="font-semibold text-sp-solid-gray-600">For Sale</h3>
          <h3 className="font-semibold text-sp-solid-gray-600">/</h3>
          <h3 className="font-semibold text-sp-solid-blue-700">
            13-85 Beastly Ln, Newcastle
          </h3>
        </div>
      </div>
      <div className="mt-8 mx-10">
        <button className="flex gap-x-3 items-center font-medium text-sm py-2 px-3 bg-[#F0F2F6] rounded-lg">
          <FontAwesomeIcon icon={faCalendarPlus} />
          <p>Auction - Sat 22nd Oct</p>
        </button>
        <h1 className="text-4xl font-bold text-sp-solid-blue-800 mt-6">
          33 Perkins Street, Newcastle
        </h1>
        <p className="mt-4 text-sp-black text-base">
          Price Guide: $1,100,000 - $1,200,000
        </p>
      </div>
      <div className={`flex border-y border-gray-200 px-10 mt-8`}>
        {features.map((feature) => {
          let icon = faBed;

          switch (feature.type) {
            case "bed":
              icon = faBed;
              break;
            case "bath":
              icon = faBath;
              break;
            case "car":
              icon = faCar;
              break;
          }

          return (
            <div
              className="
                  py-4 pr-4 pl-4 border-r border-gray-200 font-bold
                  flex
                  first:pl-0 last:pr-0 last:border-0 items-center"
              key={feature.type}
            >
              {feature.label}
              {feature.type !== "footage" ? (
                <FontAwesomeIcon icon={icon} className="w-4 ml-2" />
              ) : (
                <span className="text-xs bold inline-block ml-1">M2</span>
              )}
            </div>
          );
        })}
      </div>
      <div className="p-10 border-b-2">
        <button className="flex gap-x-3 items-center font-medium text-sm py-2 px-3 bg-[#F0F2F6] rounded-lg">
          <FontAwesomeIcon icon={faCalendarPlus} />
          <p>Open - Wed 14th Dec, 5:30pm</p>
        </button>
        <button className="flex gap-x-3 items-center font-medium text-sm py-2 px-3 bg-[#F0F2F6] rounded-lg mt-4">
          <FontAwesomeIcon icon={faCalendarPlus} />
          <p>Auction - Sat 22nd Oct</p>
        </button>
      </div>
      <div className="p-10 border-b-2 grid grid-cols-2 gap-8 text-sp-solid-blue-800">
        <div className="flex items-center gap-x-3 font-sm">
          <FontAwesomeIcon icon={faRuler} />
          <p className=" underline">Floor plan</p>
        </div>
        <div className="flex items-center gap-x-3 font-sm">
          <FontAwesomeIcon icon={faDoorOpen} />
          <p className=" underline">3D Tour</p>
        </div>
        <div className="flex items-center gap-x-3 font-sm">
          <FontAwesomeIcon icon={faVideo} />
          <p className=" underline">Video walk through</p>
        </div>
        <div className="flex items-center gap-x-3 font-sm">
          <FontAwesomeIcon icon={faFilePdf} />
          <p className=" underline">Sales Contact</p>
        </div>
      </div>
      <div className="p-10 border-b-2 flex gap-x-4">
        <button className="bg-sp-blue text-white px-6 py-4 rounded-lg font-medium text-base w-full">
          Make an enquiry
        </button>
        <button className="bg-sp-blue text-white px-6 py-4 rounded-lg font-medium text-base w-full block">
          Register to bid
        </button>
      </div>
      <div className="p-10 flex flex-col gap-y-4">
        {
          agent.map((ag : any, index) => <AgentCard key={index} img={ag.img} name={ag.name} profession={ag.profession} />)
        }
      </div>
    </div>
  );
};

export default ListingSideCard;
