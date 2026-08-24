"use client";
import { useState } from "react";

export default function ApplyPage() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setResult("Sending Application...");

    const formData = new FormData(e.target);
    formData.append("access_key", "9e2f8ea7-24c3-44de-ba41-38c4c0f99c48");
    formData.append("subject", "New Service Request - Sagar Multi Services");
    formData.append("from_name", "Sagar Multi Services Portal");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Application submitted successfully! We will contact you soon.");
        e.target.reset();
      } else {
        setStatus("error");
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setResult("Submission failed. Check network connection.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white my-8 rounded-xl shadow-sm border border-slate-200">
      <h1 className="text-3xl font-bold mb-2 text-slate-800">Submit Application</h1>
      <p className="text-slate-600 mb-6">
        Fill out the form below. Details will be sent directly to our official support team.
      </p>

      {status === "success" && (
        <div className="p-4 mb-6 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg">
          {result}
        </div>
      )}

      {status === "error" && (
        <div className="p-4 mb-6 bg-rose-50 text-rose-800 border border-rose-200 rounded-lg">
          {result}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-700">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-slate-700">Mobile Number</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter 10-digit mobile number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-slate-700">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-slate-700">Service Required</label>
          <select
            name="service"
            className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option>Passport Service</option>
            <option>PAN Card Application / Correction</option>
            <option>Aadhaar Updates</option>
            <option>Printing & Digital Services</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-slate-700">Additional Notes / Details</label>
          <textarea
            name="message"
            rows="3"
            className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Describe your requirement..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200 disabled:opacity-50"
        >
          {status === "submitting" ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}
