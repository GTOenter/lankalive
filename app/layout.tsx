import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lanka Live | Sri Lanka Music Network",
  description: "Find musicians and troubadours across Sri Lanka. Connect with performers, discuss gigs, and join the nationwide music community.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
