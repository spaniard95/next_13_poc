export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>Dashboard Header</header>

      {children}
    </div>
  );
}
