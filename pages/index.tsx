import { ApprasialForm, Button, Card, Header, Search, Footer } from "@/components";
import { PropertyCard } from "@/components/Cards/PropertyCard";
import builder from "@builder.io/react";
import Head from "next/head";
import Image from "next/image";

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

export default function Home({ secondaryLinks }: { secondaryLinks: any }) {
  const properties = [
    1234567, 1234567, 1234567, 1234567, 1234567, 1234567, 1234567, 1234567,
    1234567, 1234567, 1234567, 1234567, 1234567, 1234567, 1234567,
  ];

  return (
    <>
      <Head>
        <title>Spillane Property v2</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header secondaryLinks={secondaryLinks} />
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-3 grid-rows-[1fr_auto_1fr] gap-4">
            <PropertyCard
              id={123456}
              type="feature"
              className="col-span-2 row-span-2"
            />

            <ApprasialForm />

            <div className="grid grid-cols-2 gap-4">
              <Card
                color="pink"
                className="py-8 px-6 text-center text-sp-blue flex flex-col justify-center"
              >
                <h4 className="font-bold text-2xl mb-3">
                  93% Auction Clearance
                </h4>
                <p className="opacity-90 text-sm">
                  This is a short description about the days on market
                </p>
              </Card>

              <Card
                color="pink"
                className="py-8 px-6 text-center text-sp-blue flex flex-col justify-center"
              >
                <h4 className="font-bold text-2xl mb-3">
                  100% List <br /> To Sell
                </h4>
                <p className="opacity-90 text-sm">
                  This is a short description about the days on market
                </p>
              </Card>
            </div>

            <Card className="col-span-2 flex flex-col">
              <div className="p-8 grow justify-center flex flex-col">
                <h3 className="text-3xl font-bold text-sp-blue">
                  Discover Newcastle's finest properties
                </h3>
                <p className="opacity-70 mt-2">
                  Don't miss out on your dream home - start your search today!
                </p>
              </div>
              <div className="p-8 border-t border-gray-200">
                <Search category="Sale" />
              </div>
            </Card>

            <Card
              color="pink"
              className="py-8 px-8 text-center text-sp-blue shrink"
            >
              <img src="daysOnMarket.png" alt="" />
              <h4 className="font-bold text-3xl mb-3">20 Days on Market</h4>
              <p className="opacity-90">
                This is a short description about the days on market statistic,
                why is this good?
              </p>
            </Card>
          </div>
        </section>

        <section className="overflow-x-auto">
          <div className="container mx-auto px-4">
            <div className="grid grid-flow-col auto-cols-[400px] gap-4 pt-32 scrollbar-hide">
              <Card color="pink" className="p-10 flex flex-col gap-4">
                <h3 className="text-4xl font-bold text-sp-blue">
                  Be the first to see our new listings
                </h3>
                <p className="opacity-70 text-sp-blue">
                  Sign up for property notifications and stay up-to-date on the
                  latest properties available for sale.
                </p>
                <div className="flex flex-col gap-4">
                  <h5>Send notifications to:</h5>
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="rounded-md px-4 py-4 border border-gray-200"
                  />
                  <select
                    name="suburb"
                    id=""
                    className="rounded-md px-4 py-4 border border-gray-200"
                  >
                    <option value="all">All Suburbs</option>
                  </select>
                  <Button
                    label="Get listing Notifications"
                    className="justify-center"
                  />
                </div>
              </Card>

              {properties.map((property) => (
                <PropertyCard type="vertical" id={property} size="small" />
              ))}
            </div>
          </div>
        </section>
        <section className="mt-[79px] bg-unnamed-color ">
          <div className="container mx-auto px-4 pt-[59px] pb-[101px] grid grid-cols-7 gap-x-[62px]">
            <div className="col-span-4 bg-gray-200 h-[550px] rounded-3xl relative overflow-hidden">
              <Image
                alt="hero image"
                src="/image/home/hero-xlarge.png"
                className="object-cover w-full h-full"
                fill
              />
            </div>
            <div className="col-span-3 flex flex-col justify-center text-white">
              <h4 className=" text-sm">Our Mission</h4>
              <div className="w-full bg-white h-[1px] mt-[26px]" />
              <h1 className="text-4xl font-semibold mt-[40px]">
                The Spillane Property Mission
              </h1>
              <p className="text-base mt-[32px] text-unnamed-gray/60">
                Our mission at Spillane Property is to provide exceptional real
                estate services to our clients, while building long-term
                relationships based on trust and integrity. We strive to be the
                premier choice for buying, selling, and investing in real
                estate, by offering knowledgeable guidance, personalized
                service, and innovative solutions. We are dedicated to
                consistently exceeding our clients’ expectations and achieving
                their real estate goals.
              </p>
              <div>
                <Button label="More about us" type="pink" className="text-base font-medium mt-[56px]" />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
