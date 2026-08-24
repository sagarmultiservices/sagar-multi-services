export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800 mt-auto py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div>
          <p className="font-semibold text-white">Sagar Multi Services</p>
          <p className="text-xs text-slate-500 mt-1">Official Digital Application & Service Portal</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <a
            href="mailto:contact@sagarmultiservices.co.in"
            className="hover:text-blue-400 transition"
          >
            contact@sagarmultiservices.co.in
          </a>
          <span className="hidden md:inline text-slate-700">|</span>
          <a
            href="https://sagarmultiservices.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            sagarmultiservices.co.in
          </a>
        </div>
      </div>
    </footer>
  );
}
