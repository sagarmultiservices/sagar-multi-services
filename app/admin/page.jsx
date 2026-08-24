"use client";
import { useState } from "react";

const INITIAL_REQUESTS = [
  { id: "SMS-849201", client: "Rahul Sharma", service: "Passport Renewal", status: "Pending", date: "2026-08-24" },
  { id: "SMS-301928", client: "Priya Patel", service: "PAN Card Correction", status: "In Progress", date: "2026-08-23" },
];

export default function AdminPage() {
  const [requests, setRequests] = useState(INITIAL_REQUESTS);

  const updateStatus = (id, newStatus) => {
    setRequests(requests.map(r => r.id === id ? { ...r, status: newStatus } : r));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Admin Workspace</h1>
        <span className="text-xs bg-slate-200 text-slate-700 font-semibold px-3 py-1 rounded">
          Total Requests: {requests.length}
        </span>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
            <tr>
              <th className="p-4">Request ID</th>
              <th className="p-4">Client Name</th>
              <th className="p-4">Service</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {requests.map((r) => (
              <tr key={r.id} className="hover:bg-slate-50">
                <td className="p-4 font-mono font-bold text-blue-900">{r.id}</td>
                <td className="p-4 text-slate-800">{r.client}</td>
                <td className="p-4 text-slate-600">{r.service}</td>
                <td className="p-4">
                  <span className={`text-xs px-2.5 py-1 rounded font-semibold ${
                    r.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                    r.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {r.status}
                  </span>
                </td>
                <td className="p-4 flex gap-2">
                  <button 
                    onClick={() => updateStatus(r.id, "In Progress")}
                    className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100"
                  >
                    Process
                  </button>
                  <button 
                    onClick={() => updateStatus(r.id, "Completed")}
                    className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded hover:bg-emerald-100"
                  >
                    Complete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
