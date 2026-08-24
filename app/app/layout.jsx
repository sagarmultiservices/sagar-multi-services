import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export const metadata = {
  title: "Sagar Multi Services | Online Applications & Citizen Services",
  description: "Apply for Passport, PAN Card, Aadhaar Services, and Govt Schemes online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
