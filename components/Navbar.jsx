import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-wide flex items-center gap-2">
          🏢 Sagar Multi Services
        </Link>
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-200 transition">Services</Link>
          <Link href="/apply" className="hover:text-blue-200 transition">Submit Request</Link>
          <Link href="/status" className="hover:text-blue-200 transition">Track Status</Link>
          <Link href="/admin" className="bg-blue-700 px-3 py-1.5 rounded hover:bg-blue-600 transition">
            Admin Panel
          </Link>
        </nav>
      </div>
    </header>
  );
}
