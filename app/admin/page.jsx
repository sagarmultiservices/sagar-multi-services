export default function AdminPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white my-8 rounded-xl shadow-sm border border-slate-200">
      <h1 className="text-3xl font-bold mb-2 text-slate-800">Admin Control Panel</h1>
      <p className="text-slate-600 mb-6">
        All form applications submitted by users are delivered directly to your official email inbox.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-4">
        <div>
          <p className="text-sm font-medium text-slate-500">Connected Official Email</p>
          <p className="text-lg font-semibold text-slate-800">contact@sagarmultiservices.co.in</p>
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">Connected Web Domain</p>
          <p className="text-lg font-semibold text-slate-800">https://sagarmultiservices.co.in/</p>
        </div>

        <div className="pt-4 flex flex-wrap gap-4">
          <a
            href="https://sagarmultiservices.co.in/webmail"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Open Webmail Inbox ↗
          </a>
          <a
            href="https://sagarmultiservices.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-300 text-slate-700 px-5 py-2.5 rounded-lg font-medium hover:bg-slate-100 transition"
          >
            Visit Main Website ↗
          </a>
        </div>
      </div>
    </div>
  );
}
