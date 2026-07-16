import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fartcity Dominion | Engineering & Construction Services",
  description:
    "Building and Civil Engineering; Construction and Infrastructure Services; Oil and Gas Services; Property Development and Management; Project and Cost Management; Procurement and Supply Chain Services; and Logistics.",
  openGraph: {
    title: "Fartcity Dominion | Engineering & Construction Services",
    description:
      "Building and Civil Engineering; Construction and Infrastructure Services; Oil and Gas Services; Property Development and Management; Project and Cost Management; Procurement and Supply Chain Services; and Logistics.",
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
