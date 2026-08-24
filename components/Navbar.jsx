import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-blue-400">
          Sagar Multi Services
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/services" className="hover:text-blue-400 transition">Services</Link>
          <Link href="/apply" className="hover:text-blue-400 transition">Apply Now</Link>
          <Link href="/status" className="hover:text-blue-400 transition">Track Status</Link>
          <Link href="/admin" className="hover:text-blue-400 transition">Admin</Link>
          <a
            href="https://sagarmultiservices.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md transition"
          >
            Main Site ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
