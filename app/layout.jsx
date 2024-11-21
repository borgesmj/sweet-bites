import "./globals.css";
import Header from "@/ui/Layout/Header";
import Footer from "@/ui/Layout/Footer";
import { inter } from "./ui/Fonts/fonts";

export const metadata = {
  title: {
    template: "%s || Sweet Bites",
    default: "Inicio || Sweet Bites",
  },
  description:
    "Sweet Bites es un negocio familiar dedicado a la creación de horneados caseros, como galletas, brownies, panes y otros dulces.",
  openGraph: {
    title: "Sweet Bites",
    description:
      "Dulces horneados caseros como galletas, brownies y más. Calidad y sabor únicos.",
    url: "https://www.sweetbites.com",
    siteName: "Sweet Bites",
    images: [
      {
        url: "https://www.sweetbites.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sweet Bites - Horneados caseros",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sweet Bites",
    description:
      "Deliciosos horneados caseros como galletas, brownies, panes y más. ¡Haz tu pedido hoy!",
    images: ["https://www.sweetbites.com/twitter-image.jpg"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="mt-[--header-height] w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
