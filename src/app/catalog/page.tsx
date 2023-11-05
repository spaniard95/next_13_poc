"use client";
import { CatalogDrawer } from "@/components/catalog-drawer";
import React, { useState } from "react";

export default function Catalog() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div
      className="relative display-flex"
      style={{ minHeight: 2000, maxHeight: 2400 }}
    >
      <button
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        className="absolute top-0 left-0 mt-4 ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
      >
        {isDrawerOpen ? "Close" : "Open"} Drawer
      </button>
      <CatalogDrawer open={isDrawerOpen} />
    </div>
  );
}
