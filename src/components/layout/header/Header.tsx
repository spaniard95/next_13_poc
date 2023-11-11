import Link from "next/link";

function Header() {
  return (
    <header className="bg-blue-500 text-white py-4 px-500">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">My App</h1>
          <nav className="flex-row space-x-4">
            <Link href="/catalog">Catalog</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
