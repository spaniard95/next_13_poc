import { getLesson } from "@/app/api/lessons";
import { CustomDrawer } from "@/components/custom-drawer";

export const dynamic = "force dynamic";

export default async function Lesson({
  params: { id },
}: {
  params: { id: string };
}) {
  const lesson = await getLesson(id);

  return <CustomDrawer open={true} lesson={lesson} parentIsRSC={true} />;
}
