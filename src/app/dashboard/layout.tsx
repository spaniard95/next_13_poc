export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header>Dashboard Header</header>

      {children}
    </html>
  );
}
