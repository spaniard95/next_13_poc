"use client";
import { Lesson } from "@/app/types";
import { useRouter } from "next/navigation";

import React from "react";

interface CustomDrawerProps {
  open: boolean;
  onClose?: () => void;
  lesson: Lesson;
  parentIsRSC?: boolean;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  open,
  onClose,
  lesson,
  parentIsRSC, // soooo bad
}) => {
  const { title, category, teachers } = lesson ?? {};
  const router = useRouter();
  return (
    open && (
      <div className="relative">
        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-1/2 z-50 transform transition-transform duration-300 ease-in-out ${
            true ? "translate-x-0" : "translate-x-full"
          } bg-white shadow-md`}
        >
          <h1>{title}</h1>
          <button
            onClick={
              !parentIsRSC ? onClose : () => router.push("/dashboard/page1") // really bad
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default CustomDrawer;
