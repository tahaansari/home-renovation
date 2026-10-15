import type { Metadata } from "next";
import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Home Renovation in Mumbai | Free Site Visit",
  description:
    "Complete home renovation services in Mumbai including civil work, plumbing, electrical, flooring, kitchen trolley, furniture and finishing.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-L6FY39RG66" />
    </html>
  );
}
