import { Button, Footer, Form, Header, SubHeader } from '@/components'
import builder from '@builder.io/react';
import React from 'react'

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

const contact = [{type : "Phone", address : "(02) 1234 5678"}, {type : "Email", address : "hello@spillaneproperty.com.au"}, {type : "Address", address : " 4/103 Tudor St, Hamilton NSW"},]

export interface valueTypes {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const index = ({ secondaryLinks }: { secondaryLinks: any }) => {
  return (
    <div>
      <Header secondaryLinks={secondaryLinks} />
      <SubHeader text="Contact Us" />
      <main className="bg-sp-solid-gray-500 pb-[72px]">
        <div className="container mx-auto px-4 pt-8  lg:pt-10 grid lg:grid-cols-2 lg:gap-x-60">
          <div className="flex flex-col justify-end">
            <h1 className="text-4xl font-bold text-sp-solid-blue-800">
              Spillane Property
            </h1>
            <div className="rounded-2xl border border-sp-solid-gray-600 last:border-b-0 overflow-hidden mt-10 bg-white shadow-xl shadow-sp-solid-blue-700/10">
              {contact.map((contact: { type: string; address: string }) => (
                <div
                  key={contact.type}
                  className="p-7 lg:p-10 border-b border-sp-solid-gray-600"
                >
                  <h2 className=" text-lg text-sp-solid-gray-800">
                    {contact.type}
                  </h2>
                  <h1 className="mt-2.5 text-lg lg:text-2xl font-bold text-sp-black underline">
                    {contact.address}
                  </h1>
                </div>
              ))}
            </div>
            <div className="border-t-2 border-sp-solid-gray-600 mt-20 py-9 flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center">
              <p className="text-lg text-sp-solid-gray-800 font-medium">
                Looking for an agents details?
              </p>
              <Button type="blue" label="Our Agents" className="font-medium" />
            </div>
          </div>
          <div className=" rounded-2xl px-7 lg:px-16 pt-14 pb-10 bg-sp-pink border border-sp-solid-pink-600">
            <h1 className="text-4xl font-bold text-sp-solid-blue-800">
              General Enquires
            </h1>
            <Form />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default index;
