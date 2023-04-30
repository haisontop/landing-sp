import Link from "next/link";
import React from "react";
import { Button } from "../Buttons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { type } from "os";

interface props {
  types?: "vertical";
}

export const RequestAgentCard = ({ types }: props) => {
  return (
    <div
      className={` ${
        types === "vertical" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"
      } grid  shadow-2xl shadow-sp-blue/40 rounded-3xl overflow-hidden border border-sp-solid-gray-600/50`}
    >
      <div
        className={`relative overflow-hidden border-r-2 ${
          types === "vertical" ? " h-[216px] lg:h-full" : "h-[423px]"
        }`}
      >
        <Image
          alt={"agent name"}
          src={"/image/DonnaHero.png"}
          fill
          className="object-cover"
        />
        <div className="rounded-lg p-2 bg-slate-100 font-medium text-sp-blue inline-flex gap-2 transition hover:shadow-lg underline absolute bottom-5 left-5">
          No.1 Agent for Newcastle
        </div>
      </div>
      <div className={`p-5 ${types === "vertical" && "lg:p-16"}`}>
        <h1 className="font-bold text-4xl text-[#020E17]">Donna Spillane</h1>
        <p className="mt-4 text-[#020E17] text-base">
          Principal and <br /> Licensed Real Estate Agent
        </p>
        <p className="my-8 text-base text-sp-solid-gray-900/80">
          A personal real estate experience a number of years ago led Donna
          Spillane on a pathway that has seen her become one of the industry’s
          most successful agents. But it’s her passion for honest and ethical
          services that provide her clients the best possible outcome that has
          set Donna and Spillane Property apart from the rest.
        </p>
        <Link href={""}>
          <p className="underline text-sm text-sp-solid-blue-800 font-medium">
            View Donna’s Profile
          </p>
        </Link>
        <div
          className={` ${
            types === "vertical"
              ? " flex-col-reverse lg:flex-row"
              : "flex-col-reverse"
          } flex gap-2 mt-16`}
        >
          <Button label="Request appraisal" type="blue" />
          <div className="flex gap-x-2">
            <Button
              label="Call"
              type="outline"
              icon={faPhone}
              className={`border-sp-blue ${
                types === "vertical" ? "w-full lg:w-auto" : "w-full"
              } font-bold`}
            />
            <Button
              label="Eamil"
              type="outline"
              icon={faEnvelope}
              className={`border-sp-blue ${
                types === "vertical" ? "w-full lg:w-auto" : "w-full"
              } font-bold`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
