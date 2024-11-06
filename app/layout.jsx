import "./globals.css";
import Header from "@/ui/Header";
import Footer from '@/ui/Footer'
import { inter } from "./ui/fonts";

export const metadata = {
  title: {
    template: "%s || Sweet Bites",
    default: "Inicio || Sweet Bites"
  },
  description: "PAgina de inicio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Header />
        <main className="mt-[--header-height] w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
