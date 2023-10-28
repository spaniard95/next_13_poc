export default function Page1Layout({
  children,
  modal,
  lesson,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  lesson: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      {children}
      {modal}
      {lesson}
    </div>
  );
}
