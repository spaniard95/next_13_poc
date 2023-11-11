import { NavigationButton } from "@/app/(components)";
import { Lesson } from "@/app/types";

import React from "react";

interface CatalogDrawerProps {}

const CatalogDrawerLoading: React.FC<CatalogDrawerProps> = () => {
  return (
    <div
      className={`absolute top-0 right-0 w-1/3 bg-gray-200 p-4 transition-transform transform translate-x-0" h-full shadow-lg z-10`}
    >
      loading
    </div>
  );
};

export default CatalogDrawerLoading;
