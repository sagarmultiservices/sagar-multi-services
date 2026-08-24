import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "Sagar Multi Services | Online Applications",
  description: "Official service request portal for Sagar Multi Services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="container mx-auto px-4 py-8 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
