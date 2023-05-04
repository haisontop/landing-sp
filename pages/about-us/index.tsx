import { AboutBanner, Footer, Header, IndustrialKhowladge, OurFrandlyStaff, SubHeader } from "@/components";
import builder from "@builder.io/react";
import Image from "next/image";
import React from "react";

export async function getStaticProps() {
  builder.init("bc22dc3b592c4fb7860d855ad1b2c528");

  const secondaryLinks = await builder.getAll("secondary-nav", {
    // You can use options for queries, sorting, and targeting here
    // https://github.com/BuilderIO/builder/blob/main/packages/core/docs/interfaces/GetContentOptions.md
  });

  return {
    props: {
      secondaryLinks: secondaryLinks || null,
    },
    revalidate: 5,
  };
}

const index = ({ secondaryLinks }: { secondaryLinks: any }) => {
  return (
    <>
      <Header secondaryLinks={secondaryLinks} />
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
