export default function ApplyPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white my-8 rounded-xl shadow-sm border border-slate-200">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">Submit Application</h1>
      <p className="text-slate-600 mb-6">Fill out the details below to request a service.</p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input type="text" className="w-full border border-slate-300 rounded p-2" placeholder="Enter your full name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Service Required</label>
          <select className="w-full border border-slate-300 rounded p-2">
            <option>Passport Service</option>
            <option>PAN / Aadhaar</option>
            <option>Printing & Digital</option>
          </select>
        </div>
        <button type="button" className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700">Submit Request</button>
      </form>
    </div>
  );
}
