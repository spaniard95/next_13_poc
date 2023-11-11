import React from "react";
import { getLesson } from "@/app/api/lessons";
import { CatalogDrawer } from "@/components/catalog-drawer";
import CatalogDrawerLoading from "@/components/catalog-drawer/CatalogDrawerLoading";
import { Suspense } from "react";

export const dynamic = "force dynamic";

export default async function Lesson({
  params: { id },
}: {
  params: { id: string };
}) {
  const lesson = await getLesson(id);

  return (
    <Suspense fallback={<CatalogDrawerLoading />}>
      <CatalogDrawer lesson={lesson} />
    </Suspense>
  );
}
