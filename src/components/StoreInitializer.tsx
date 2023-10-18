"use client";

import { useRef } from "react";

import { useStore } from "@/models/store";

function StoreInitializer({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useStore.setState({ name, description });
    initialized.current = true;
  }
  return null;
}

export default StoreInitializer;
