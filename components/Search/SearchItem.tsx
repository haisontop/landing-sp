import React from "react";
import { PropertyCard } from "../Cards/PropertyCard";

export const SearchItem = () => {
  const properties = [
    1234567, 1234567, 1234567, 1234567, 1234567, 1234567, 1234567, 1234567,
  ];
  return (
    <section className="container mx-auto px-4 mt-12 grid md:grid-cols-4 gap-4">
      {properties.map((property) => (
        <PropertyCard type="vertical" id={property} key={property} size="small" />
      ))}
    </section>
  );
};
