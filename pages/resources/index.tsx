import { Button, CareersInRealEasts, Footer, Header, SubHeader } from "@/components";
import Image from "next/image";
import React from "react";
import resource from "../../fakedata/ResourseFakeDate";
import {
  ResourcesCard,
  resourcesTypes,
} from "@/components/Resources/ResourcesCard";
import Accordions from "@/components/Accordions/Accordions";
import { accordion } from "@/fakedata/AccourdiansFakeData";
import builder from "@builder.io/react";

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

      <div className="bg-sp-solid-gray-500">
        <SubHeader text="Resources" />
        <div className="container mx-auto px-4 mt-5 lg:mt-10">
          <div className="grid lg:grid-cols-2 lg:gap-y-8">
            {resource.map((rs: resourcesTypes) => (
              <ResourcesCard
                key={rs.id}
                title={rs.title}
                subtitle={rs.subtitle}
                id={rs.id}
                resources={rs.resources}
              />
            ))}
          </div>
        </div>
        <section className="container mx-auto px-4 mt-14 grid lg:grid-cols-6 lg:gap-x-24">
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-sp-black">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 text-base text-sp-solid-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
            <div>
              <p className="text-base text-sp-solid-gray-800">
                Still have questions?
              </p>
              <Button
                label="Contact Us"
                type="blue"
                className="font-bold mt-4"
              />
            </div>
          </div>
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <Accordions content={accordion} />
          </div>
        </section>
        <CareersInRealEasts />
      </div>
      <Footer />
    </>
  );
};

export default index;
