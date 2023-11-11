"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface NavigationButtonProps {
  path: string;
  label: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ path, label }) => {
  const router = useRouter();

  return (
    // <Link href={path}>
    <button
      onClick={() => router.push(path)}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {label}
    </button>
    // </Link>
  );
};

export default NavigationButton;
