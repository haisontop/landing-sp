import Link from "next/link";
import React from "react";
import { ApprasialForm } from "../Forms";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FacebookIcon, InstagramIcon } from "../Graphics";

export const Footer = () => {
  const ForSale = [
    "For Sale Hamilton",
    "For Sale Broad Meadow",
    "For Sale Merewether",
    "For Sale Kotara",
    "For Sale Warners Bay",
    "For Sale Warners Bay",
  ];
  const ForLease = [
    "For Lease Hamilton",
    "For Lease Broad Meadow",
    "For Lease Warners Bay",
  ];
  const Resourse = ["Seller Resources", "Landlord Resources"];
  return (
    <footer className="bg-[#F2E3E1] overflow-hidden">
      <div className="bg-[#020E17] rounded-b-[32px]">
        <div className="pt-[74px] pb-[53px] container mx-auto px-4 flex flex-col lg:grid lg:grid-cols-11 gap-x-[60px]">
          <div className=" col-span-3 flex flex-col text-white items-start mt-10 lg:mt-0">
            <div className="text-center">
              <div className="w-[220.55px] h-[71.39px] relative">
                  <Image alt="logo image" fill className="object-contain" src={"/image/whitelogo.png"} />
              </div>
            </div>
            <ul className="text-[#F2E3E1] mt-[59px] flex flex-col gap-y-[16px] text-[18px]">
              <li>(02) 4905 0110</li>
              <li>hello@spillaneproperty.com.au</li>
              <li>4/103 Tudor St, Hamilton NSW 2303</li>
              <li className="flex gap-x-4 text-2xl">
                <Link href={"/"}><FacebookIcon /></Link>{" "}
                <Link href={"/"}><InstagramIcon /></Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 text-[18px] text-sp-solid-pink-400 mt-10 lg:mt-0">
            <h2 className=" font-bold">For Sale</h2>
            <ul className="flex flex-col gap-y-[16px] mt-[16px]">
              {ForSale.map((sl) => (
                <li key={sl}>
                  <Link href={sl}>{sl}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2  text-[18px] text-[#F2E3E1] mt-10 lg:mt-0">
            <div>
              <h2 className=" font-bold">For Lease</h2>
              <ul className="flex flex-col gap-y-[16px] mt-[16px]">
                {ForLease.map((sl) => (
                  <li key={sl}>
                    <Link href={sl}>{sl}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-[49px]">
              <h2 className=" font-bold">Resources</h2>
              <ul className="flex flex-col gap-y-[16px] mt-[16px]">
                {Resourse.map((sl) => (
                  <li key={sl}>
                    <Link href={sl}>{sl}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-4 order-first md:order-last">
            <ApprasialForm />
          </div>
        </div>
      </div>
      <div className="py-[32px] container mx-auto px-5 text-[13px] relative grid grid-cols-2">
        <ul className="flex flex-col md:flex-row gap-x-3">
          <li className=" after:content-['|'] after:ml-1">
            <Link href="rights">Spillane Property © 2022</Link>
          </li>
          <li className=" underline after:content-['|'] after:ml-1">
            <Link href="rights">Sitemap</Link>
          </li>
          <li className=" underline after:content-['|'] after:ml-1">
            <Link href="rights">Privacy Policy</Link>
          </li>
          <li className=" underline">
            <Link href="rights">Terms and Conditions</Link>
          </li>
        </ul>
          <div className="absolute -bottom-7 md:-bottom-5 right-0 w-[186px] h-[222px]">
          <Image alt="dog image" src="/image/footer/Group 337.png" className="w-full h-full" width={270} height={290} />
          </div>
      </div>
    </footer>
  );
};
