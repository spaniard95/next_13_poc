"use client";
import { Lesson } from "@/app/types";

import React from "react";

interface CatalogDrawerProps {
  open: boolean;
}

const CatalogDrawer: React.FC<CatalogDrawerProps> = ({ open }) => {
  return (
    <div
      className={`absolute top-0 right-0 w-64 bg-gray-200 p-4 transition-transform transform ${
        open ? "translate-x-0" : "translate-x-full"
      } h-full shadow-lg z-10`}
    >
      Drawer Content
    </div>
  );
};

export default CatalogDrawer;
