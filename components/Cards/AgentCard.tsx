import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface props { 
    img : string;
    name : string;
    profession : string;
}

export const AgentCard = ({img, name, profession } : props) => {
  return (
    <div className=" grid grid-cols-12 border-2 rounded-2xl overflow-hidden shadow-xl">
      <div className="col-span-5 relative overflow-hidden border-r-2">
          <Image alt={name} src={img} fill className="object-cover" />
      </div>
      <div className="col-span-7 h-full flex flex-col justify-between">
        <div className="p-6">
        <h2 className=" text-sp-solid-blue-800 text-xl font-semibold">{name}</h2>
        <p className="text-sm text-sp-black mt-2  mb-12">{profession}</p>
        </div>
        <Link href={""} className=" underline text-sm text-sp-solid-blue-800 m-6">View Profile</Link>
        <div className="border-t-2 grid grid-cols-2 text-sm text-sp-solid-blue-800 font-semibold">
          <button className="border-r-2 py-3 flex items-center justify-center gap-x-2 "><FontAwesomeIcon icon={faPhone} /> <p>Call</p></button>
          <button className="py-3 flex items-center justify-center gap-x-2 "><FontAwesomeIcon icon={faEnvelope} /> <p>Email</p></button>
        </div>
      </div>
    </div>
  );
};
