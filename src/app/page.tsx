import StoreInitializer from "@/components/StoreInitializer";
import React from "react";
import { useStore } from "@/models/store";

export default async function Home() {
  const dataRes = await fetch("http://localhost:3000/data.json");
  const data = (await dataRes.json()) as {
    name: string;
    description: string;
  };

  useStore.setState({ name: data.name, description: data.description, age: 9 });

  return (
    <>
      <StoreInitializer name={data.name} description={data.description} />
      <div>{data.name}</div>
      <div>{data.description}</div>
    </>
  );
}
