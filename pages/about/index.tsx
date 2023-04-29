import { AboutBanner, Footer, Header, IndustrialKhowladge, OurFrandlyStaff } from "@/components";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <>
      <Header secondaryLinks={[]} />
      <main className="bg-sp-solid-gray-500 pb-28">
        <div className="bg-sp-pink py-6 border-t-2 border-sp-solid-pink-600">
        <div className="flex gap-x-3 items-center container px-4 mx-auto">
            <div>
              <Image
                alt="small logo"
                width={22}
                height={22}
                src={"/image/current-listing/SmallSquare-dark.png"}
              />
            </div>
            <h1 className="text-base font-medium text-sp-black">About Us</h1>
          </div>
        </div>
       <AboutBanner />
       <div className="mt-16" />
       <OurFrandlyStaff />
       <IndustrialKhowladge />
      </main>
      <Footer />
    </>
  );
};

export default index;
