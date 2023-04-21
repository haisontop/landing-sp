import { builder } from "@builder.io/sdk";

builder.init(`${process.env.BUILDER_KEY}`);

export const GetSecondaryNav = () =>
  builder
    .get("secondary-nav")
    .promise()
    .then(({ data }) => {
      // Do something with the data
      return data;
    });
