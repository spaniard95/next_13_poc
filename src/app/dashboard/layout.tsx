"use client";
export default function DashboardLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      <header>Dashboard Header</header>

      {children}
      {modal}
    </div>
  );
}
