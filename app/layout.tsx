import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home Renovation in Mumbai | Free Site Visit",
  description:
    "Complete home renovation services in Mumbai including civil work, plumbing, electrical, flooring, kitchen trolley, furniture and finishing.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
