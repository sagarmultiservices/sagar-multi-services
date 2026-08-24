import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="bg-blue-900 text-white p-8 rounded-2xl shadow-md text-center">
        <h1 className="text-3xl font-bold mb-2">Welcome to Sagar Multi Services</h1>
        <p className="text-blue-100 max-w-xl mx-auto text-sm">
          Your trusted center for online passport applications, PAN cards, document uploads, and tracking.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/apply" className="bg-white text-blue-900 font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition">
            Apply Now
          </Link>
          <Link href="/status" className="bg-blue-800 text-white font-semibold px-5 py-2.5 rounded-lg border border-blue-700 hover:bg-blue-700 transition">
            Track Application
          </Link>
        </div>
      </section>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-2">Passport Services</h2>
          <p className="text-sm text-slate-600 mb-4">Fresh applications, renewals, and quick document verification support.</p>
          <Link href="/apply" className="text-blue-900 font-medium text-sm hover:underline">Submit Form →</Link>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-2">PAN & Aadhaar</h2>
          <p className="text-sm text-slate-600 mb-4">New PAN allocation, corrections, and updating personal particulars.</p>
          <Link href="/apply" className="text-blue-900 font-medium text-sm hover:underline">Submit Form →</Link>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-2">Printing & Digital</h2>
          <p className="text-sm text-slate-600 mb-4">High quality ID card printing, scanning, and document management.</p>
          <Link href="/apply" className="text-blue-900 font-medium text-sm hover:underline">Submit Form →</Link>
        </div>
      </div>
    </div>
  );
}
