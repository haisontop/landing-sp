import {
  DonnasCurrentListing,
  DonnasRecentlySold,
  DonnasStats,
  Footer,
  Header,
  RequestAgentCard,
  SubHeader,
} from "@/components";
import SellerFeedbackCard from "@/components/Cards/SellerFeedbackCard";
import DonnasTeam from "@/components/About/OurFriendlyStaff/DonnasTeam";
import Image from "next/image";
import React from "react";
import builder from "@builder.io/react";
import OurSellerSaying from "@/components/Listing/OurSellerSaying";

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
  const list = ["1", "2", "3"];
  return (
    <>
      <Header secondaryLinks={secondaryLinks} />
      <main className="bg-sp-solid-gray-500 pb-[67px] lg:pb-0">
        <SubHeader text={"Donna Spillane"} />
        <div className="lg:grid grid-cols-3 gap-x-16 container mx-auto px-4 mt-10">
          <div className="lg:col-span-1">
            <RequestAgentCard />
            <div className="mt-10" />
            <DonnasTeam />
          </div>
          <div className="lg:col-span-2">
            <div className="mt-[40px] lg:mt-0" />
            <DonnasCurrentListing />
            <DonnasRecentlySold />
            <DonnasStats />
          </div>
        </div>
        <section className="mt-10 lg:mt-[80px] relative">
          <OurSellerSaying />
        </section>
      </main>
      <div className="lg:mt-20" />
      <Footer />
    </>
  );
};

export default index;
