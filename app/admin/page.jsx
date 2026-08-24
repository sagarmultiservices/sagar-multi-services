export default function AdminPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white my-8 rounded-xl shadow-sm border border-slate-200">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">Admin Panel</h1>
      <p className="text-slate-600 mb-6">Manage service applications and customer requests.</p>
      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-slate-500 text-center">
        No active requests found.
      </div>
    </div>
  );
}
