import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shoply - Shop Simply",
  description: "Shop simply for quality products at great prices",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Shoply - Shop Simply",
    description: "Shop simply for quality products at great prices",
    url: "https://shoply-app-nine.vercel.app",
    siteName: "Shoply",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Shoply E-Commerce",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoply - Shop Simply",
    description: "Shop simply for quality products at great prices",
    images: ["/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} flex flex-col min-h-screen bg-gray-50 font-sans`}
      >
        <CartProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
