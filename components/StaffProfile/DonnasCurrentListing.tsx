import React from "react";
import { PropertyCard } from "../Cards/PropertyCard";

export const DonnasCurrentListing = () => {
  const properties = [
    1234567, 1234567, 1234567, 1234567, 1234567, 1234567, 1234567, 1234567,
    1234567, 1234567, 1234567, 1234567, 1234567, 1234567, 1234567,
  ];
  return (
    <div>
      <h1 className="text-2xl font-semibold">Donna’s Current Listings</h1>
      <div className="overflow-x-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-flow-col auto-cols-[350px] md:auto-cols-[400px] gap-x-4 pt-10 scrollbar-hide">
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
      </div>
    </div>
  );
};
