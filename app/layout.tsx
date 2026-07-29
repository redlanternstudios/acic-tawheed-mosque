import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afghan Community Islamic Center | Tawheed Mosque",
  description:
    "Rooted in Afghan heritage and open to the entire Ummah. Prayer, learning, family, and community in San Diego.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
