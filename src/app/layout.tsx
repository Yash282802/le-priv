import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Le Privé | Fine Dining Restaurant Vadodara",
  description: "Le Privé - Where Every Flavour Tells a Story. Premium fine dining restaurant in Alkapuri, Vadodara. North Indian, Italian, Oriental cuisines. Pure Vegetarian with Jain options available.",
  keywords: ["Le Privé", "restaurant Vadodara", "fine dining", "vegetarian restaurant", "Alkapuri", "North Indian", "Italian", "Oriental"],
  openGraph: {
    title: "Le Privé | Fine Dining Restaurant Vadodara",
    description: "Where Every Flavour Tells a Story. Premium fine dining in Alkapuri, Vadodara.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
