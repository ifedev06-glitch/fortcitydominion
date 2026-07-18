import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fortcity Dominion Limited | Engineering & Project Services",
  description:
    "Building and Civil Engineering, Oil and Gas Services, Property Development, Project Management, Cost Management, Procurement and Supply Chain, and Logistics Services.",
  icons: [{ rel: "icon", url: "/logo.jpg" }],
  openGraph: {
    title: "Fortcity Dominion Limited | Engineering & Project Services",
    description:
      "Building and Civil Engineering, Oil and Gas Services, Property Development, Project Management, Cost Management, Procurement and Supply Chain, and Logistics Services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
