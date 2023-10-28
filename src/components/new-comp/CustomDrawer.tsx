import React, { useState } from "react";

const CustomDrawer = () => {
  <div className="relative">
    {/* Drawer */}
    <div
      className={`fixed top-0 right-0 h-full w-128 z-50 transform transition-transform duration-300 ease-in-out ${
        true ? "translate-x-0" : "translate-x-full"
      } bg-white shadow-md`}
    >
      Drawer content here...
    </div>

    {/* Main content */}
    <div className="relative z-10">
      Main content here...
      <button
        // onClick={() => setIsOpen(!isOpen)}
        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded"
      >
        Toggle Drawer
      </button>
    </div>
  </div>;
};

export default CustomDrawer;
