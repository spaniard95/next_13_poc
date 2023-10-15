import React from "react";

export default async function Test() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <div>Test</div>;
}
