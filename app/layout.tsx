import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Your Organization",
    template: "%s | Your Organization",
  },
  description: "Short description of what your organization does.",
  openGraph: {
    type: "website",
    siteName: "Your Organization",
    images: ["/og-image.png"],
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Your Organization",
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col bg-white text-gray-900`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}