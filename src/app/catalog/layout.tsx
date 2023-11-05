"use client";

import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div
      className="relative border border-gray-300"
      style={{ height: "500px" }}
    >
      {/* This is the container for your content */}
      <div className="p-4">
        {/* Content of the page */}
        Your page content goes here.
      </div>

      {/* Button to toggle the drawer */}
      <button
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        // className="absolute top-0 left-0 mt-4 ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
      >
        {isDrawerOpen ? "Close" : "Open"} Drawer
      </button>

      {/* The Drawer */}
      <div
        className={`absolute top-0 right-0 w-64 bg-gray-200 p-4 transition-transform transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } h-full shadow-lg z-10`}
      >
        {/* Drawer content goes here */}
        Drawer Content
      </div>
    </div>
  );
}
