"use client";
import { useState } from "react";

export default function StatusPage() {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setResult({
      id: trackingId,
      service: "Online Passport Application",
      status: "In Progress",
      updatedAt: "2026-08-24",
      step: 2,
    });
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h1 className="text-xl font-bold mb-4 text-slate-800">Track Application Status</h1>
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            required
            type="text"
            placeholder="Enter Request ID (e.g., SMS-123456)"
            className="flex-grow border border-slate-300 rounded px-3 py-2 text-sm focus:outline-blue-600"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
          />
          <button type="submit" className="bg-blue-900 text-white px-5 py-2 rounded text-sm font-medium hover:bg-blue-800 transition">
            Search
          </button>
        </form>
      </div>

      {result && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-4">
          <div className="flex justify-between items-start border-b pb-3">
            <div>
              <h2 className="font-bold text-slate-800">{result.service}</h2>
              <p className="text-xs text-slate-500">ID: {result.id}</p>
            </div>
            <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded">
              {result.status}
            </span>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-sm">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">✓</span>
              <span className="text-slate-700">Application Received</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">2</span>
              <span className="font-semibold text-blue-900">Document Verification in Progress</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold">3</span>
              <span>Completed & Invoice Ready</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
