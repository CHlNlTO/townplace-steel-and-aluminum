import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/component/Navbar";
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/component/Footer";
import { BusinessDetailsProvider } from "@/context/BusinessDetailsContext";

const inter = Inter({ subsets: ["latin"] });

// Business Details
const businessName = "Town Place Steel & Aluminum";
const tagLine = "Quality Steel & Aluminum Services";
const email = "town_place@yahoo.com";
const phone = "0939-908-8711";
const address = "146 J.P. Laurel Highway, Barangay San Roque, Santo Tomas, Philippines";
const facebook = "https://www.facebook.com/profile.php?id=100064243653794";

export const metadata: Metadata = {
  title: "Town Place Steel & Aluminum",
  description: "Quality Steel & Aluminum Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BusinessDetailsProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Toaster />
          <Analytics />
          <Footer />
        </body>
      </html>
    </BusinessDetailsProvider>
  );
}
