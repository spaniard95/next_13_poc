import { NavigationButton } from "@/app/(components)";
import { getLesson } from "@/app/api/lessons";
import { Lesson } from "@/app/types";

import React from "react";

interface CatalogDrawerProps {
  lessonId: string;
}
export default async function CatalogDrawer({ lessonId }: CatalogDrawerProps) {
  const lesson = await getLesson(lessonId);

  return (
    <div
      className={`absolute top-0 right-0 w-1/3 bg-gray-200 p-4 transition-transform transform translate-x-0" h-full shadow-lg z-10`}
    >
      {lesson.title}
      <NavigationButton path="/catalog" label="Back" />
    </div>
  );
}
