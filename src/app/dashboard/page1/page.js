"use client";

import Link from "next/link";
import React from "react";

export default function Page1() {
  return (
    <>
      <div>page 1</div>
      <Link href="/dashboard/page1/modalExample">Open Modal</Link>
    </>
  );
}
