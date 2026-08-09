import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { BRAND } from "@/lib/brand";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cashnix.emperva.com"),
  title: {
    default: "Cashnix | Free Financial Tools",
    template: "%s | Cashnix",
  },
  description:
    "Simple, free calculators and planners to help you make smarter financial decisions.",
  icons: {
    icon: [{ url: "/icons/cashnix-icon.png", type: "image/png" }],
    apple: [{ url: "/icons/cashnix-icon.png" }],
  },
  openGraph: {
    siteName: "Cashnix",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: BRAND.logo.src,
        width: BRAND.logo.width,
        height: BRAND.logo.height,
        alt: BRAND.logo.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
