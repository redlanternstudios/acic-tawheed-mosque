import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACIC | Tawheed Mosque",
  description:
    "Afghan Community Islamic Center in San Diego with prayer, learning, family, events, and support.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
