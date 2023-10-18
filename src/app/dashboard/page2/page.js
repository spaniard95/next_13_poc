"use client";
import React from "react";

import { useStore } from "@/models/store";

export default function Page1() {
  const data = useStore((state) => state.description);
  return (
    <>
      <div>page 2</div>
      <div>{"zustand data " + data}</div>
      <button
        type="button"
        className="ml-5 inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        onClick={() => {
          useStore.setState({ description: "george" });
        }}
      >
        Button
      </button>
    </>
  );
}
