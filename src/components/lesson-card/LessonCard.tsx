import { Lesson } from "@/app/types";
import React from "react";

interface LessonCardProps {
  lesson: Lesson;
  onClick: () => void;
}
const LessonCard: React.FC<LessonCardProps> = ({ lesson, onClick }) => {
  const { title, category, teachers } = lesson;

  return (
    <div
      className="border p-2 bg-white shadow-md rounded-md w-1/2 m-2"
      onClick={onClick}
    >
      <h2 className="text-lg font-bold mb-1">{title}</h2>
      <p className="text-xs text-gray-600 mb-1">Category: {category}</p>
      <p className="text-xs text-gray-600">Teachers: {teachers.join(", ")}</p>
    </div>
  );
};

export default LessonCard;
