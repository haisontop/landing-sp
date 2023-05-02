import { AboutBanner, Footer, Header, IndustrialKhowladge, OurFrandlyStaff, SubHeader } from "@/components";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <>
      <Header secondaryLinks={[]} />
      <main className="bg-sp-solid-gray-500 pb-28">
       <SubHeader text="About Us" />
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
