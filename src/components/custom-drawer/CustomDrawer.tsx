import { Lesson } from "@/app/types";
import React from "react";

interface CustomDrawerProps {
  open: boolean;
  onClose: () => void;
  lesson: Lesson;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  open,
  onClose,
  lesson,
}) => {
  const { title, category, teachers } = lesson ?? {};
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
            onClick={onClose}
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
