import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACIC Tawheed Mosque | San Diego",
  description: "A welcoming home for prayer, learning, family, and community in San Diego.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
