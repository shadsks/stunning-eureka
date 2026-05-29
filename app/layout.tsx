import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueMontreal = localFont({
  src: "../../public/fonts/PPNeueMontreal-Regular.woff2",
  variable: "--font-sans",
  display: "swap",
});

const fragmentMono = localFont({
  src: [
    { path: "../../public/fonts/FragmentMono-Regular.woff2", style: "normal" },
    { path: "../../public/fonts/FragmentMono-Italic.woff2", style: "italic" },
  ],
  variable: "--font-mono",
  display: "swap",
});

const rightGrotesk = localFont({
  src: "../../public/fonts/PPRightGrotesk-SpatialBlack.woff2",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nitex | Helping Brands Thrive With Real-Time Fashion",
  description:
    "We power real-time fashion with exclusive, ready-to-buy designs—helping brands move faster, stay on trend, and grow without compromise.",
  icons: { icon: "/seo/favicon-black.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${neueMontreal.variable} ${fragmentMono.variable} ${rightGrotesk.variable} antialiased`}
    >
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
