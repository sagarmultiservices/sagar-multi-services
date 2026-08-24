export default function StatusPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white my-8 rounded-xl shadow-sm border border-slate-200">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">Track Application Status</h1>
      <div className="flex gap-2 mb-4">
        <input type="text" className="border border-slate-300 rounded p-2 flex-grow" placeholder="Enter Application ID (e.g. SMS-123456)" />
        <button className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700">Search</button>
      </div>
    </div>
  );
}
