export type Lesson = {
  id: string;
  title: string;
  category: string;
  teachers: string[];
  grade: number;
};

export type Lessons = Lesson[];
