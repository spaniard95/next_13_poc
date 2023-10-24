import Link from "next/link";

export function Header() {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">My App</h1>
          <nav className="flex-row space-x-4">
            <Link href="/">Home</Link>
            <Link href="/dashboard/page1">Dashboard</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
