"use client";
import React from "react";

import { lessons } from "../content";
import { LessonCard } from "@/components/lesson-card";

export default function Page() {
  return lessons.map((lesson) => (
    <LessonCard key={lesson.id} lesson={lesson} />
  ));
}
