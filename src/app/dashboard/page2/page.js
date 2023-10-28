"use client";
import React from "react";

import { lessons } from "../content";
import { LessonCard } from "@/components/lesson-card";
import { CustomDrawer } from "@/components/custom-drawer";

export default function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [selectedLesson, setSelectedLesson] = React.useState(null);

  return (
    <>
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          lesson={lesson}
          onClick={() => {
            setSelectedLesson(lesson);
            setIsDrawerOpen(true);
          }}
        />
      ))}
      <CustomDrawer
        lesson={selectedLesson}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
