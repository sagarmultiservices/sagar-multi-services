import Link from "next/link";

const SERVICES = [
  { id: "passport", title: "Online Passport Application", fee: "₹1,500 + Service Charge", desc: "Fresh passports, renewals, and Tatkaal application handling." },
  { id: "pancard", title: "PAN Card Services", fee: "₹107", desc: "New PAN Card issuing, corrections, and Aadhaar linking." },
  { id: "aadhaar", title: "Aadhaar Services Assistance", fee: "Varies", desc: "Address update assistance, printouts, and appointment scheduling." },
  { id: "printing", title: "ID Cards & Offset Printing", fee: "On Request", desc: "Bulk printing, photo ID cards, banners, and document digitization." },
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          Fast & Reliable Citizen Services
        </h1>
        <p className="text-blue-100 max-w-2xl mx-auto mb-6 text-lg">
          Submit document requests, upload required files online, and track your application in real-time.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/apply" className="bg-amber-400 text-blue-950 font-bold px-6 py-3 rounded-lg shadow hover:bg-amber-300 transition">
            Apply Now
          </Link>
          <Link href="/status" className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Check Status
          </Link>
        </div>
      </section>

      {/* Service Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div key={s.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{s.desc}</p>
              </div>
              <div>
                <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-2 py-1 rounded">
                  {s.fee}
                </span>
                <Link href={`/apply?service=${s.id}`} className="mt-4 block text-center bg-blue-900 text-white text-sm font-medium py-2 rounded hover:bg-blue-800 transition">
                  Request Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
