import React from "react";

import { lessons } from "../content";
import { LessonCard } from "@/components/lesson-card";
import { CustomDrawer } from "@/components/custom-drawer";
import { ClickWrapper } from "@/components/click-wrapper";

export default function Page() {
  return lessons.map((lesson) => (
    <ClickWrapper key={lesson.id} path={`page3/${lesson.id}`}>
      <LessonCard key={lesson.id} lesson={lesson} />
    </ClickWrapper>
  ));
}
