"use client";
import React from "react";

import { lessons } from "../content";
import { LessonCard } from "@/components/lesson-card";
import { CustomDrawer } from "@/components/custom-drawer";
import { ClickWrapper } from "@/components/click-wrapper";

export default function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [selectedLesson, setSelectedLesson] = React.useState(null);

  return (
    <>
      {lessons.map((lesson) => (
        <ClickWrapper
          key={lesson.id}
          onClick={() => {
            console.log("clicked");
            setSelectedLesson(lesson);
            setIsDrawerOpen(true);
          }}
        >
          <LessonCard key={lesson.id} lesson={lesson} />
        </ClickWrapper>
      ))}
      <CustomDrawer
        lesson={selectedLesson}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
