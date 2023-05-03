import React from "react";
import { SingupProperty } from "../SingupProperty";
import { PropertyCard } from "../Cards/PropertyCard";

export const PropertyList = () => {
  const properties = [
    1234567, 1234567, 1234567, 1234567, 1234567, 1234567, 1234567, 1234567,
    1234567, 1234567, 1234567, 1234567, 1234567, 1234567, 1234567,
  ];
  return (
    <section className="overflow-x-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-flow-col auto-cols-[370px] md:auto-cols-[400px] gap-2 md:gap-4 pt-10 md:pt-32 scrollbar-hide">
          <div className="hidden md:inline-block">
          <SingupProperty />
          </div>
          {properties.map((property) => (
            <PropertyCard
              type="vertical"
              key={property}
              id={property}
              size="small"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
