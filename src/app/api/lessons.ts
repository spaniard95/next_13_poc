import { Lesson, Lessons } from "../types";

export const lessons: Lessons = [
  {
    id: "1",
    title: "Introduction to Biology",
    category: "Science",
    teachers: ["Dr. Jane Smith", "Mr. John Doe"],
    grade: 9,
  },
  {
    id: "2",
    title: "Basic Algebra Concepts",
    category: "Mathematics",
    teachers: ["Prof. Alan Turing", "Ms. Ada Lovelace"],
    grade: 8,
  },
  {
    id: "3",
    title: "World History: Renaissance Era",
    category: "History",
    teachers: ["Mr. Leonard Vinci", "Ms. Marie Curie"],
    grade: 10,
  },
  {
    id: "4",
    title: "Literature: Shakespeare's Works",
    category: "Literature",
    teachers: ["Mr. William Wordsworth", "Ms. Emily Dickinson"],
    grade: 11,
  },
  {
    id: "5",
    title: "Chemical Reactions and Equations",
    category: "Chemistry",
    teachers: ["Dr. Albert Einstein", "Ms. Rosalind Franklin"],
    grade: 10,
  },
  {
    id: "6",
    title: "Geometry: Understanding Shapes",
    category: "Mathematics",
    teachers: ["Mr. Pythagoras", "Ms. Sophie Germain"],
    grade: 9,
  },
  {
    id: "7",
    title: "Earth Science: Climate and Weather",
    category: "Geography",
    teachers: ["Dr. Carl Sagan", "Ms. Jane Goodall"],
    grade: 7,
  },
  {
    id: "8",
    title: "Introduction to Coding",
    category: "Computer Science",
    teachers: ["Mr. Steve Jobs", "Ms. Grace Hopper"],
    grade: 12,
  },
  {
    id: "9",
    title: "Art: The Renaissance Masters",
    category: "Art",
    teachers: ["Mr. Pablo Picasso", "Ms. Frida Kahlo"],
    grade: 11,
  },
  {
    id: "10",
    title: "Physics: Laws of Motion",
    category: "Physics",
    teachers: ["Dr. Isaac Newton", "Ms. Chien-Shiung Wu"],
    grade: 10,
  },
];

export const getLessons = async (): Promise<Lessons> => {
  return lessons;
};

export const getLesson = async (id: string): Promise<Lesson> => {
  const lesson = lessons.find((lesson) => lesson.id === id);
  if (!lesson) {
    throw new Error(`Lesson ${id} not found`);
  }
  return lesson;
};
