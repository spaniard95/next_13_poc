"use client";

import { useRouter } from "next/navigation";

export default function Page({ params }: any) {
  const router = useRouter();

  return (
    <div className="relative">
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-128 z-50 transform transition-transform duration-300 ease-in-out ${
          true ? "translate-x-0" : "translate-x-full"
        } bg-white shadow-md`}
      >
        ID: {params}
        <button onClick={() => router.back()}>Close</button>
      </div>

      {/* Main content */}
      <div className="relative z-10">Main content here...</div>
    </div>
  );
}
