"use client";
import { useState } from "react";

export default function ApplyPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "passport", notes: "" });
  const [file, setFile] = useState(null);
  const [submittedId, setSubmittedId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mockTrackingId = "SMS-" + Math.floor(100000 + Math.random() * 900000);
    setSubmittedId(mockTrackingId);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-slate-200">
      <h1 className="text-2xl font-bold mb-2 text-slate-800">Submit Service Request</h1>
      <p className="text-slate-500 text-sm mb-6">Fill in your details and upload the required supporting documents.</p>

      {submittedId ? (
        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-lg text-center">
          <h2 className="text-xl font-bold text-emerald-800 mb-2">Request Submitted Successfully!</h2>
          <p className="text-slate-700 mb-4">Your Application Tracking ID is:</p>
          <div className="text-2xl font-mono font-bold bg-white border px-4 py-2 rounded max-w-xs mx-auto text-blue-900">
            {submittedId}
          </div>
          <p className="text-xs text-slate-500 mt-4">Save this ID to track your application status.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input
              required
              type="text"
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-blue-600"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Mobile Number</label>
            <input
              required
              type="tel"
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-blue-600"
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Select Service</label>
            <select
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-blue-600 bg-white"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="passport">Online Passport Application</option>
              <option value="pancard">PAN Card Processing</option>
              <option value="aadhaar">Aadhaar Services</option>
              <option value="printing">ID Card / Printing Services</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Upload Required Document (PDF/JPG)</label>
            <input
              type="file"
              required
              accept=".pdf,.png,.jpg,.jpeg"
              className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Additional Notes</label>
            <textarea
              rows={3}
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-blue-600"
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />
          </div>

          <button type="submit" className="w-full bg-blue-900 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-800 transition">
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
}
