import React from "react";
import { PropertyCard } from "../Cards/PropertyCard";
import { Button } from "../Buttons";

export const SearchItem = () => {
  const properties = [
    1234567, 1234567, 1234567, 1234567, 1234567, 1234567, 1234567, 1234567,
  ];
  return (
    <section className="container mx-auto px-4 mt-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
        {properties.map((property) => (
          <PropertyCard
            type="vertical"
            id={property}
            key={property}
            size="small"
          />
        ))}
      </div>
      <div className="w-full flex md:hidden justify-center mt-8">
          <Button label="View More" type="outline" className="border-[#011E2D]" />
      </div>
    </section>
  );
};
