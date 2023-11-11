import React from "react";

import { LessonCard } from "@/components/lesson-card";
import Link from "next/link";
import { getLessons } from "@/app/api/lessons";
import { useSearchParams } from "next/navigation";
import { CatalogDrawer } from "@/components/catalog-drawer";

export default async function Page({
  searchParams,
}: {
  searchParams: { open: boolean; lessonId: string };
}) {
  const { open = false, lessonId = "1" } = searchParams;

  const lessons = await getLessons();

  return (
    <div className="relative display-flex -mt-2">
      {lessons.map((lesson) => (
        <Link key={lesson.id} href={`/catalog?open=true&lessonId=${lesson.id}`}>
          <LessonCard key={lesson.id} lesson={lesson} />
        </Link>
      ))}

      {open && <CatalogDrawer lessonId={lessonId} />}
    </div>
  );
}
