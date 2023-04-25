import React from "react";
import { Card } from "../Cards";
import { Button } from "../Buttons";

export const SingupProperty = () => {
  return (
    <Card color="pink" className="p-10 flex flex-col gap-4">
      <h3 className="text-4xl font-bold text-sp-blue">
        Be the first to see our new listings
      </h3>
      <p className="opacity-70 text-sp-blue">
        Sign up for property notifications and stay up-to-date on the latest
        properties available for sale.
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
        <Button label="Get listing Notifications" className="justify-center" />
      </div>
    </Card>
  );
};
