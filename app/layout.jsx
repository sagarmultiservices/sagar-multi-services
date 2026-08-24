import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sagar Multi Services",
  description: "Official Application & Service Portal",
  manifest: "/sagar-multi-services/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Sagar Multi Services",
  },
};

export const viewport = {
  themeColor: "#2563eb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
