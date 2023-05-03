import { ApprasialForm, Footer, Header, Map, PropertyList } from "@/components";
import ListingSideCard from "@/components/Listing/ListingSideCard";
import OurSellerSaying from "@/components/Listing/OurSellerSaying";
import React from "react";

const index = () => {
  return (
    <div>
      <Header secondaryLinks={[]} />
      <div className=" bg-sp-solid-gray-500">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-12 gap-x-4">
            <div className=" lg:col-span-8">
              <div className="mb-12">{/* carousel */}</div>
              <div className="hidden lg:block lg:w-8/12 mx-auto">
                <h1 className="text-5xl font-bold">
                  Period Elegance, Prized Location - Auction unless sold prior
                </h1>
                <div className="mt-10 text-lg text-justify">
                  <p>
                    Centrally positioned within the fantastic community of
                    Carrington, the harbour and city on your doorstep, this
                    character-rich weatherboard home showcases a winning
                    combination of timeless turn of the century style and a
                    contemporary renovation. Whilst retaining it’s original
                    charm with high ceilings, arched hallway and ornate
                    fireplaces this home has also recently received updates with
                    a brand new gas equipped kitchen, two new bathrooms, new
                    plumbing and completely re-painted inside and out, just to
                    name a few. Flexible in configuration, the front room could
                    be used as an office, second living area or fourth bedroom.
                    The air-conditioned upstairs master bedroom is generous in
                    size and opens onto the front balcony. The rear of the home
                    has been completely renovated with new Jarrah flooring and
                    an open plan dining/kitchen area that flows freely to the
                    covered timber deck overlooking a fully fenced yard complete
                    with vegie gardens. Also providing prized off-street parking
                    this home is truly an exceptional property that is sure to
                    impress.
                  </p>
                  <ul className="mt-10 flex flex-col gap-y-3">
                    <li>
                      * Newly renovated character-rich home in the heart of
                      Carringto
                    </li>
                    <li>
                      * Brand new kitchen with timber benchtops and quality
                      appliances
                    </li>
                    <li>
                      * Two new bathrooms with contemporary floor-to-ceiling
                      tiling
                    </li>
                    <li>
                      * Charm and character with high ceilings and ornate
                      fireplaces
                    </li>
                    <li>
                      * Ground floor bedroom/office offers flexibility as extra
                      living space
                    </li>
                    <li>
                      * Back yard with brand new fencing and vegetable garden
                      beds
                    </li>
                    <li>
                      * Prized off-street parking for one vehicle; side access
                      from Doran St
                    </li>
                    <li>
                      * Walking distance to cafes, school, harbour and transport
                    </li>
                  </ul>
                  <p className="mt-10">Council rates: $567 p/qtr</p>
                </div>
              </div>
              <Map />
            </div>
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl border-2 border-sp-solid-gray-600 mb-4 shadow-md">
                <ListingSideCard />
              </div>
              <ApprasialForm />
            </div>
          </div>
        </div>
        <OurSellerSaying />
        <div className="mb-20">
            <PropertyList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
