import React from "react";
import { Button } from "../Buttons";

const SellerFeedbackCard = () => {
  return (
    <div className="bg-sp-solid-blue-700 rounded-2xl text-white">
      <p className="px-10 py-8 border-b border-sp-solid-blue-500 text-base">7 High Street, The Hill</p>
      <p className="px-10 pt-10 text-xl font-medium">
        “Donna was simply amazing to work with. She guided me through the
        process in a super simple and supportive way. I never felt like I was
        pressured.”{" "}
      </p>
      <p className="text-xl font-medium mt-4 mx-10">Kim - Seller</p>
      <div className="lg:grid grid-cols-2 border border-x-0 border-sp-solid-blue-500 mt-8 text-sp-solid-pink-600 ">
        <div className="border-r border-b lg:border-b-0 border-x-sp-solid-blue-500">
          <h1 className="text-2xl lg:text-3xl font-bold py-5 lg:p-10 text-center">
            Sold for $1,200,000.
          </h1>
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold py-5 lg:p-10 text-center">
            Sold in 20 Days.
          </h1>
        </div>
      </div>
      <div className="flex justify-center lg:justify-between p-10 items-center">
        <Button
          label="Read full Case Study"
          type="pink"
          className="text-black font-medium"
        />
      </div>
    </div>
  );
};

export default SellerFeedbackCard;
