import Link from "next/link";
import React from "react";

export const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto   bg-red-500">
      <div className="flex justify-between items-center">
        <nav className="flex-row space-x-4">
          <Link href="/dashboard/page1">page 1</Link>
          <Link href="/dashboard/page2">page 2</Link>
        </nav>
      </div>
    </div>
  );
};
