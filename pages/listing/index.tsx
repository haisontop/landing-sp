import {
  AgentCard,
  ApprasialForm,
  Button,
  Carousel,
  Footer,
  Header,
  Map,
  Nav,
  PropertyList,
} from "@/components";
import ListingSideCard from "@/components/Listing/ListingSideCard";
import OurSellerSaying from "@/components/Listing/OurSellerSaying";
import React from "react";
import Image from "next/image";
import ListingArticle from "@/components/Listing/ListingArticle";
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

const agent = [
  {
    name: "Donna Spillane",
    profession: "Principal and Licensed Real Estate Agent",
    img: "/image/listing/200813_Spillane.Property-10.png",
  },
  {
    name: "Patrick Skinner ",
    profession: "Sales Associate",
    img: "/image/listing/210714_Spillane.Property-6.png",
  },
];

const index = ({ secondaryLinks }: { secondaryLinks: any }) => {
  const item = [
    "/image/listing/166993800256625328-rsd.png",
    "https://placehold.it/800x600",
    "https://placehold.it/1400x800",
    "https://placehold.it/1200x900",
  ];
  return (
    <div>
      <div className="hidden lg:block">
        <Header secondaryLinks={secondaryLinks} />
      </div>
      <div className="fixed lg:hidden top-0 z-40 flex justify-center w-full">
        <Nav />
      </div>
      <div className=" bg-sp-solid-gray-500 relative">
        <div className=" bg-sp-solid-pink-500 lg:h-[511px] top-0 w-full absolute" />
        <div className="container lg:px-4 mx-auto">
          <div className="grid lg:grid-cols-12 gap-x-4 relative z-20">
            <div className=" lg:col-span-8">
              <div className="lg:mb-12">
                <Carousel loop showControls>
                  {item.map((src, i) => (
                    <div
                      className="relative h-[471px] md:h-[715px] flex-[0_0_100%]"
                      key={i}
                    >
                      <Image
                        src={src}
                        fill
                        alt="alt"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="hidden lg:block lg:w-8/12 mx-auto px-4 lg:px-0">
                <ListingArticle />
              </div>
              <div className="px-4 lg:px-0">
                <div className="block lg:hidden">
                  <ListingSideCard />
                </div>
                <div className="lg:hidden mt-10">
                  <ListingArticle />
                </div>
                <div className="lg:hidden mt-11 flex flex-col gap-y-2">
                  {agent.map((ag: any, index) => (
                    <AgentCard
                      key={index}
                      img={ag.img}
                      name={ag.name}
                      profession={ag.profession}
                    />
                  ))}
                </div>
                <Map />
              </div>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="bg-white rounded-2xl border-2 border-sp-solid-gray-600 mb-4 shadow-md overflow-hidden">
                <ListingSideCard />
              </div>
              <ApprasialForm />
            </div>
          </div>
        </div>
        <div className=" container mx-auto px-4 mt-[80px]">
          <h1 className="font-semibold text-2xl">
            What our sellers are saying
          </h1>
        </div>
        <OurSellerSaying />
        <div className="pb-10 lg:pb-20 mt-[79px]">
          <PropertyList />
          <div className="flex gap-x-2 lg:hidden justify-center mt-8">
              <Button label={"View all listings"} type="blue" />
              <Button label={"Contact Us"} type="outline" className="border-sp-blue" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
