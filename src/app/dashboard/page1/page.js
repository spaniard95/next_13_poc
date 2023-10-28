import { getLessons } from "@/app/api/lessons";
import { ClickWrapper } from "@/components/click-wrapper";
import { LessonCard } from "@/components/lesson-card";
import React from "react";

export default async function Page1() {
  const lessons = await getLessons();

  return (
    <>
      {lessons.map((lesson) => (
        <ClickWrapper key={lesson.id} path={`page1/${lesson.id}`}>
          <LessonCard key={lesson.id} lesson={lesson} />
        </ClickWrapper>
      ))}
    </>
  );
}
