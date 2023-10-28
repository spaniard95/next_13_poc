import { Lesson } from "@/app/types";
import React from "react";

interface LessonCardProps {
  lesson: Lesson;
}
const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
  const { title, category, teachers } = lesson;

  return (
    <div
      className="border p-4 m-2 bg-white shadow-md rounded-md"
      onClick={() => console.log("hi")}
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-2">Category: {category}</p>
      <p className="text-sm text-gray-600 mb-2">
        Teachers: {teachers.join(", ")}
      </p>
    </div>
  );
};

export default LessonCard;
