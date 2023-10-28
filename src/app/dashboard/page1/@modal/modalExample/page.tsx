"use client";
import { CustomDrawer } from "@/components/new-comp";
import { useRouter } from "next/navigation";

export default function ModalExample() {
  const router = useRouter();

  return (
    <div className="relative">
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-128 z-50 transform transition-transform duration-300 ease-in-out ${
          true ? "translate-x-0" : "translate-x-full"
        } bg-white shadow-md`}
      >
        Drawer content here...
        <button onClick={() => router.back()}>Close</button>
      </div>

      {/* Main content */}
      <div className="relative z-10">Main content here...</div>
    </div>

    // <dialog open>
    //   <div>Hello</div>
    //   <button onClick={() => router.back()}>Close</button>
    // </dialog>

    // <div className="drawer">
    //   <input
    //     id="my-drawer-4"
    //     type="checkbox" // keeps drawer open on this route
    //     className="drawer-toggle"
    //     checked
    //     readOnly
    //   />
    //   <div className="drawer-content">Page CONTENT</div>

    //   {/* Drawer */}
    //   <div className="drawer">
    //     <label
    //       htmlFor="my-drawer-4"
    //       aria-label="close sidebar"
    //       className="drawer-overlay"
    //     ></label>
    //     <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
    //       {/* Sidebar content here */}
    //       <li>
    //         <a>Sidebar Item 1</a>
    //       </li>
    //       <li>
    //         <a>Sidebar Item 2</a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}
