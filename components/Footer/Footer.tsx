import Link from "next/link";
import React from "react";
import { ApprasialForm } from "../Forms";

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
    <footer className="bg-[#F2E3E1]">
      <div className="bg-[#020E17] rounded-b-[32px]">
        <div className="pt-[74px] pb-[53px] container mx-auto px-4 grid grid-cols-11 gap-x-[60px]">
          <div className=" col-span-3 flex flex-col text-white items-start">
            <div className="text-center">
              <h1 className=" text-6xl font-semibold">Spillane.</h1>
              <span className="text-base font-semibold">Property</span>
            </div>
            <ul className="text-[#F2E3E1] mt-[59px] flex flex-col gap-y-[16px] text-[18px]">
              <li>(02) 4905 0110</li>
              <li>hello@spillaneproperty.com.au</li>
              <li>4/103 Tudor St, Hamilton NSW 2303</li>
              <li></li>
            </ul>
          </div>
          <div className="col-span-2 text-[18px] text-[#F2E3E1]">
            <h2 className=" font-bold">For Sale</h2>
            <ul className="flex flex-col gap-y-[16px] mt-[16px]">
              {ForSale.map((sl) => (
                <li>
                  <Link href={sl}>{sl}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2  text-[18px] text-[#F2E3E1]">
            <div>
              <h2 className=" font-bold">For Lease</h2>
              <ul className="flex flex-col gap-y-[16px] mt-[16px]">
                {ForLease.map((sl) => (
                  <li>
                    <Link href={sl}>{sl}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-[49px]">
              <h2 className=" font-bold">Resources</h2>
              <ul className="flex flex-col gap-y-[16px] mt-[16px]">
                {Resourse.map((sl) => (
                  <li>
                    <Link href={sl}>{sl}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-4">
            <ApprasialForm />
          </div>
        </div>
      </div>
      <div className="py-[32px] container mx-auto px-5 text-[13px]">
        <ul className="flex gap-x-3">
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
      </div>
    </footer>
  );
};
