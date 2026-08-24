export default function ServicesPage() {
  const servicesList = [
    { title: "Passport Services", desc: "Fresh applications, renewals, and quick document verification support." },
    { title: "PAN & Aadhaar", desc: "New PAN allocation, corrections, and updating personal particulars." },
    { title: "Printing & Digital", desc: "High quality ID card printing, scanning, and document management." }
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 my-8">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {servicesList.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold mb-2 text-slate-800">{service.title}</h2>
            <p className="text-slate-600 text-sm mb-4">{service.desc}</p>
            <a href="/sagar-multi-services/apply" className="text-blue-600 font-semibold text-sm hover:underline">Apply Now &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  );
}
