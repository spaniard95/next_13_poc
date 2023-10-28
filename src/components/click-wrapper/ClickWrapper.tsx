"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface ClickWrapperProps {
  children: React.ReactNode;
  path?: string;
  onClick?: () => void;
}

// bad practise, wrapper for click with useRouter and custom onClick
const ClickWrapper: React.FC<ClickWrapperProps> = ({
  children,
  path,
  onClick,
}) => {
  const navigate = useRouter();

  return (
    <div
      onClick={
        onClick ||
        (() => {
          console.log("click wrapper");
          navigate.push(path ?? "");
        })
      }
    >
      {children}
    </div>
  );
};

export default ClickWrapper;
