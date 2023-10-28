import { getLesson, getLessons } from "@/app/api/lessons";
import { ClickWrapper } from "@/components/click-wrapper";

import { CustomDrawer } from "@/components/custom-drawer";
import { LessonCard } from "@/components/lesson-card";

export const dynamic = "force dynamic";
export default async function LessonDrawer({
  params: { id },
}: {
  params: { id: string };
}) {
  const lesson = await getLesson(id);
  const lessons = await getLessons();

  return (
    <>
      {lessons.map((lesson) => (
        // is this wrapper optimal? dont think so
        <ClickWrapper key={lesson.id} path={`${lesson.id}`}>
          <LessonCard key={lesson.id} lesson={lesson} />
        </ClickWrapper>
      ))}

      <CustomDrawer
        open={true}
        lesson={lesson}
        // onClose={() => console.log("close")}
      />
    </>
  );
}
