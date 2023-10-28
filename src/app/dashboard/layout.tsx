import { Dashboard } from "@/components/layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Dashboard />
      {children}
    </>
  );
}
